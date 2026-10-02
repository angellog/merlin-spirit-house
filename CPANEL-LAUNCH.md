# Deploying Merlin Spirit House to cPanel

This app is **Next.js 16 with React 19** — a server-rendered application, not a
static site. It cannot be deployed by copying HTML files into `public_html`.
It needs a Node process, which cPanel provides through Phusion Passenger.

---

## Before you start: confirm Node support

Log into cPanel and type **`node`** in the search box.

- **"Setup Node.js App" appears** → you're good, continue below.
- **Nothing appears** → your plan does not have Node enabled. Open a support
  ticket asking for it. Nothing below will work until it's on, because the
  contact form and the `/studio` CMS route both need a running Node process.

The Node selector must offer **20.x or newer**. This project targets 22
(`.nvmrc`), and `next@16` requires `>=20.19.0`.

---

## 1. Build and package

Run locally (or in CI) — **not** on the server:

```bash
npm ci
npx next build
bash scripts/package-cpanel.sh
```

That produces `dist-cpanel.zip`.

Build on the server is not viable: `next build` on shared hosting routinely
exceeds the memory cap and gets killed partway, leaving a broken deploy.

> `dist-cpanel.zip` is gitignored. At ~49 MB it is a build artifact that is
> reproducible from source in about a minute, so it is deliberately not
> committed — it would bloat every future clone of the repo and sits just
> under GitHub's 50 MB warning threshold. Regenerate it with the command
> above whenever you need it.

## 2. Create the app in cPanel

In **Setup Node.js App → Create Application**:

| Field | Value |
|---|---|
| Node.js version | 22.x (20.x minimum) |
| Application mode | Production |
| Application root | e.g. `merlinspirithouse` |
| Application URL | your domain |
| Application startup file | `server.js` |

Save. cPanel creates the application root directory.

## 3. Upload

Upload `dist-cpanel.zip` into the **application root** via File Manager, then
**Extract**. `server.js` must end up at the top level of that directory, not
inside a nested folder — Passenger looks for the startup file exactly where
you declared it.

## 4. Set environment variables

Still in Setup Node.js App, add every variable from `.env.example`.

**The required ones** — the site renders with visible gaps in its sales copy
without them, because 35 of the 87 usages have no fallback value:

```
NEXT_PUBLIC_CLIENT_NAME        NEXT_PUBLIC_CLIENT_WHATSAPP
NEXT_PUBLIC_CLIENT_TITLE       NEXT_PUBLIC_CLIENT_EMAIL
NEXT_PUBLIC_CLIENT_TAGLINE     NEXT_PUBLIC_CLIENT_LOCATION
NEXT_PUBLIC_CLIENT_YEARS       NEXT_PUBLIC_SITE_URL
```

> **These are baked in at build time.** `NEXT_PUBLIC_*` values are inlined
> into the JavaScript bundle by `next build`. Setting them in cPanel after
> the fact changes nothing — you must set them, rebuild, repackage and
> re-upload. This is the single most common way this deploy goes wrong.

Sanity variables are genuinely optional: `src/sanity/lib/client.ts` guards on
`isConfigured` and falls back to the bundled MDX content in `/content`. A
verified production build succeeds with them empty.

## 5. Restart and verify

Click **Restart**. Then check, in order:

1. Homepage loads **and is styled.** Unstyled text means `.next/static` is
   missing — repackage with the script rather than copying by hand.
2. Images render. Blank images mean `public/` is missing, same cause.
3. Submit the contact form. See the warning below first.
4. `/sitemap.xml` and `/robots.txt` return 200.

## 6. HTTPS

Run **AutoSSL** (cPanel → SSL/TLS Status) once DNS resolves to the host.
`NEXT_PUBLIC_SITE_URL` must be the `https://` origin, or canonical tags and
social previews will advertise the wrong scheme.

---

## Known issues to resolve before taking real enquiries

### The contact form does not deliver anything

`src/app/(site)/api/contact/route.ts` validates the submission, writes it to
the server log with `console.log`, and returns `{success: true}`. It sends no
email and stores nothing. The visitor is shown a success state and reasonably
believes they have made contact.

For a consultation business this loses leads silently, which is worse than
having no form at all. It needs an email provider (Resend, SendGrid, or SMTP
through the hosting account) or a database write before launch.

### Domain mismatch

`next-sitemap.config.js` hardcodes `https://merlinspirithouse.com`. If the
site is served from a different domain, update that file as well as
`NEXT_PUBLIC_SITE_URL` — otherwise `sitemap.xml` and `robots.txt` will point
search engines at a domain you may not control.

### Trailing slashes

`trailingSlash: true` applies to API routes too, so `POST /api/contact`
answers **308** and only `/api/contact/` returns 200. The client fetch was
corrected to include the slash. Keep it when adding new endpoints: a 308 on
a cross-origin POST can drop the request body.

### Two contact addresses exist in the code

`info@merlinspirithouse.com` and `contact@merlinspirithouse.com` are both
hardcoded, three occurrences each. Only one is wired into `.env.example`.
Confirm which mailbox actually receives mail and make the other consistent —
otherwise some pages invite visitors to write to an address that bounces.

### "13 years" is hardcoded on 10 pages

Body copy on 10 service pages states "13 years" / "over 13 years", while the
hero stat and service templates read `NEXT_PUBLIC_CLIENT_YEARS` (which
defaults to an empty string, rendering as a bare "+ Years Experience").

`.env.example` sets it to 13 to match. If the real figure differs, the
hardcoded prose on those 10 pages has to be edited too, or the page will
contradict its own headline in front of a visitor deciding whether to trust
the practitioner.

### Unreferenced image originals

`public/images/Prof. Ndaula/` contains 29 camera-original JPEGs (~10.9 MB)
that nothing in `src/` references; processed copies already exist under
`images/services`, `images/portrait` and `images/hero`. They are kept in the
repository as source material but excluded from the deploy bundle by
`scripts/package-cpanel.sh`. The space in that directory name also requires
percent-encoding in any URL, so avoid referencing it directly from code.
