# Service knowledge base

Reference material for whoever answers an enquiry — a JivoChat operator, the
practitioner on WhatsApp, or an AI assistant wired to these files. It is the
single source of truth for what we say about services, prices, timescales and
limits.

## Files

| File | Use it for |
|---|---|
| `01-services.md` | What each service is, who it suits, what happens |
| `02-pricing.md` | The real tiers and what is included |
| `03-qualifying.md` | Questions that triage an enquiry before quoting |
| `04-objections.md` | Honest answers to the doubts people actually raise |
| `05-boundaries.md` | **Read before answering anyone.** What must never be promised, and when to stop and refer out |
| `06-whatsapp-playbook.md` | The funnel from first reply to booking, with templates |
| `knowledge.json` | The same facts, machine-readable, for an assistant |

## Two rules that override everything else

**Never promise an outcome.** The site's own disclaimer states that
effectiveness "depends on numerous factors including the nature of the
situation, the individuals involved, and spiritual forces beyond human
control," and that testimonials "are not a guarantee that you will achieve
the same results." Any message promising a specific result contradicts our
published terms.

**Never position this as a substitute for professional care.** The disclaimer
is explicit: these services "are not a substitute for professional medical,
psychological, legal, or financial advice." See `05-boundaries.md` for the
situations where the only correct answer is to refer someone elsewhere.

Keeping to both is not only honest — it is what the published disclaimer
already commits the business to, so departing from it in a chat creates real
exposure.

## Keeping this current

Prices and service descriptions are duplicated from the website. When the site
changes, update these files in the same commit, or operators will quote
figures the site contradicts. Sources of truth on the site:

- Prices — `src/app/(site)/pricing/page.tsx`
- Service descriptions — `src/app/(site)/<service>/page.tsx`
- Limits — `src/app/(site)/disclaimer/page.tsx`
