# WhatsApp playbook

Most enquiries arrive on WhatsApp from a deep link on the site. Each service
page prefills its own opening message, so you usually know which service drew
them before they type anything.

## What the prefill tells you

| Prefill text contains | Came from |
|---|---|
| "need help with a love situation" | `/love-spells/` |
| "need a binding spell to secure my relationship" | `/binding-spells/` |
| "I think I am cursed and need help" | `/curse-removal/` |
| "need protection from spiritual attack" | `/protection-spells/` |
| "need help with a financial situation" | `/money-spells/` |
| "need traditional healing help" | `/traditional-healing/` |
| "want to receive spirit blessings" | `/spirit-blessings/` |
| "need help with a voodoo matter" | `/voodoo-spells/` |
| "found your website and need spiritual help" | Floating button, page unknown |
| "would like to book a free private consultation" | `/consultation/` |
| "just submitted a message through your website" | `/thank-you/`, form already sent |

A curse or protection prefill means a frightened person. Open gently.

## The five stages

### 1. First reply — within minutes if possible

Acknowledge, do not pitch. Never open with a price.

> Thank you for reaching out. I am {TITLE} {NAME}. Tell me what has been
> happening, in your own words — take your time. Our first conversation is
> free and there is no obligation.

### 2. Understand — the real work

Run the questions in `03-qualifying.md`. Two or three at a time, never as a
form. Check the boundary table before anything else. Do not name a service
yet.

### 3. Recommend — one service, in their words

> From what you have told me — {THEIR OWN WORDS} — the work that fits is
> {SERVICE}. {ONE SENTENCE ON WHY}. That starts from ${PRICE}, and the exact
> figure depends on what your situation needs, which we settle in the free
> consultation. In past work of this kind, people often see the first signs
> within {RANGE}.

Then stop. Let them decide.

### 4. Close — by removing friction, not by pressure

> Shall I set up your free consultation? I will need {WHAT YOU NEED}. There
> is nothing to pay at this stage.

If they hesitate, ask what is holding them back and answer it from
`04-objections.md`. **Do not** invent urgency, imply the problem will worsen
if they wait, or offer a discount that expires. Those tactics work on
frightened people and they are exactly why this trade has the reputation it
does.

### 5. Follow up — once, maybe twice

One message after about 48 hours:

> I wanted to check in — no pressure at all. If now is not the right time,
> that is completely fine, and you are welcome to write whenever you are
> ready.

If there is no reply, stop. A second follow-up a week later is the absolute
limit. Someone who has gone quiet about a painful situation is not a lead to
be worked.

## Never send

- A guarantee of any outcome
- A deadline or a price that expires
- A claim about health, a diagnosis, or advice to stop treatment
- Anything implying harm to another person
- Bulk or broadcast messages to people who did not ask — it breaches
  WhatsApp's own rules and gets the number banned, which costs every future
  enquiry

## If the number gets banned

Every wa.me link on the site resolves from one environment variable,
`NEXT_PUBLIC_CLIENT_WHATSAPP`. Changing it requires a rebuild and redeploy,
because `NEXT_PUBLIC_*` values are inlined at build time — the number cannot
be swapped from the hosting panel alone. Protecting the number matters.
