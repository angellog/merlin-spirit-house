import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";

export function generateMetadata(): Metadata {
  return {
    title: "Voodoo Spells That Work | Authentic Vodun Rituals | Prof. Ndaula",
    description:
      "Authentic voodoo spells and West African Vodun rituals for love, justice, protection and retribution. Free consultation with Prof. Ndaula. WhatsApp +256788546704",
    keywords: [
      "voodoo spells",
      "vodun rituals",
      "voodoo spell caster",
      "authentic voodoo",
      "voodoo for justice",
    ],
    alternates: { canonical: "/voodoo-spells/" },
  };
}

export default function VoodooSpellsPage() {
  const clientName = CLIENT_NAME;
  const clientTitle = CLIENT_TITLE;

  return (
    <ServicePageTemplate
      title="Voodoo Spells"
      seoH1="Authentic Voodoo Spells & Vodun Rituals — Power That Commands"
      subheading="Ancient power speaks through the hands of the faithful. I am its vessel."
      leadParagraph={`I am ${clientTitle} ${clientName}, an initiated practitioner of West African Vodun with over 25 years of experience commanding the spirits that ordinary healers cannot reach. Voodoo is not evil — it is the most complete and direct spiritual system on earth for communicating with the unseen world. It encompasses healing, protection, justice, love, and retribution. The Loa, the ancestors, the forces of nature — these spirits are real, and they respond to those who know how to approach them with respect and authority. I was initiated through a lineage that stretches back generations, and I carry the spiritual authority that this work demands. When I perform voodoo, every element has a purpose, every word carries power, and every gesture opens a channel between the visible and invisible worlds. My clients come to me when ordinary methods have failed, and the voodoo I perform delivers results that defy explanation.`}
      whatsappPreFill={`Hello%20${clientTitle}%20${clientName}%2C%20I%20need%20help%20with%20a%20voodoo%20matter`}
      icon="✦"
      whatIsSection={[
        {
          _type: "block",
          _key: "vs-wi-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "vs-wi-s1",
              text: "Voodoo — or Vodun, as it is properly known in its West African origin — is one of the most misunderstood spiritual traditions on earth. Originating in the kingdoms of Dahomey and Kongo and carried across oceans by those who refused to abandon their ancestral ways, Vodun is not darkness or evil. It is a complete spiritual system for communicating with the unseen world. It encompasses healing, protection, justice, love, and retribution. The spirits that Vodun calls upon — the Loa, the ancestors, the forces of nature — are real, and they respond to those who approach them with the proper initiation and authority.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "vs-wi-2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "vs-wi-s2",
              text: `A voodoo spell differs from other forms of spiritual work in its intensity and precision. It calls upon specific spirits and uses specific materials — bones, herbs, fire, earth, water — each chosen for its resonance with the desired outcome. When I perform voodoo work, every element serves a purpose, every word carries power, and every gesture opens a channel between the visible and invisible worlds. Voodoo spells are used for a wide range of purposes: to bind a lover, to punish a wrongdoer, to protect against enemies, to attract money, to break a curse, to compel truth, to demand justice where none has been given. The power of Vodun lies in its directness — it does not ask politely. It commands. And when performed by a true practitioner, the spirits obey.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      whoNeedsSection={[
        "Someone has wronged you and the legal system has failed you completely",
        "You are under spiritual attack and need a stronger defense than prayer alone",
        "You need to compel someone to tell the truth or fulfill a promise",
        "Your enemy is using dark forces against you and you must fight back",
        "You want a love binding that cannot be broken by ordinary means",
        "You need to break a curse or hex placed upon you through voodoo",
        "You seek justice for betrayal, theft, or harm done to your family",
        "You feel called to Vodun as your spiritual path and need authentic guidance",
      ]}
      processSteps={[
        "Consultation and Assessment — You contact me and describe your situation in full detail — who is involved, what has happened, and what outcome you seek. Honesty is essential because the spirits see everything, and withholding information weakens the work. I determine whether Vodun is the right approach for your case.",
        "Spirit Identification and Material Preparation — Based on the assessment, I determine which Loa and ancestral spirits to invoke, what materials are required — bones, herbs, candle colors, offerings — and the precise timing of the ritual according to the spiritual calendar. Each spirit requires specific offerings and invocations. I prepare everything in sacred space.",
        "Ritual Performance in Sacred Space — I perform the voodoo ritual with full authority and precision. Every chant, every offering, every gesture is executed according to the traditions passed down through my lineage. The spirits are called, the offerings are made, and the spiritual force is directed toward your desired outcome. Voodoo work is never performed carelessly — each ritual is precise, powerful, and conducted with reverence.",
        "Confirmation Reading and Follow-Up — After the ritual, I perform a follow-up reading to confirm whether the spirits have accepted the work and to assess the direction the energy is moving. If additional steps are needed, I perform them. I remain available for guidance and support throughout the entire process until the results manifest.",
      ]}
      whatToExpect={[
        {
          _type: "block",
          _key: "vs-we-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "vs-we-s1",
              text: `When you contact me, you are asked to describe your situation in complete detail. After the initial assessment, I tell you whether voodoo is the right approach and what to expect in terms of timing and results. Voodoo spells produce strong and fast results — sometimes within 48 hours for simpler workings. More complex cases involving multiple enemies or deep spiritual warfare require a series of rituals over one to three lunar cycles. Client reports consistently describe three signs of voodoo taking effect: the target experiences a sudden change of heart or behavior, obstacles that seemed immovable dissolve without explanation, and a tangible shift in the spiritual atmosphere around the situation becomes noticeable. Throughout the process, I remain available for guidance and support. You are never alone in this work.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      testimonials={[
        {
          name: "Kwame A.",
          location: "Ghana",
          quote: `My business partner stole everything from me and the courts did nothing. After ${clientTitle} ${clientName}'s voodoo work, he came back begging to return what he took. Justice was served when every other path failed.`,
          rating: 5,
        },
        {
          name: "Patricia R.",
          location: "United States",
          quote: "I was being harassed by someone who would not stop. The protection voodoo spell created a wall around me that nothing could penetrate. The harassment stopped completely within a week. I finally have peace.",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "Is voodoo dangerous?",
          answer: [
            {
              _type: "block",
              _key: "vs-faq1",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "vs-faq1-s",
                  text: "Vodun is a powerful spiritual system and must be treated with respect. In the hands of an initiated practitioner like myself, it is safe for the client. The danger lies in amateur attempts or working with someone who does not have proper initiation and lineage. I carry genuine spiritual authority passed down through generations, and I conduct every ritual with strict protocols that ensure your safety.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can voodoo be used for justice against someone who wronged me?",
          answer: [
            {
              _type: "block",
              _key: "vs-faq2",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "vs-faq2-s",
                  text: "Yes. Vodun can be directed toward justice and retribution when someone has caused genuine harm. The Loa judge whether the cause is just. If a person has truly wronged you, the spirits act decisively. If the cause is petty or malicious, the work backfires on the requester. I always assess this honestly before proceeding.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "How is voodoo different from other spells?",
          answer: [
            {
              _type: "block",
              _key: "vs-faq3",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "vs-faq3-s",
                  text: "Vodun invokes specific spirits — the Loa and ancestral forces of West African Vodun — using a structured system of ritual, offerings, and invocation. It is more direct and forceful than general spellwork. The rituals involve specific materials and procedures passed down through generations of initiated practitioners. Voodoo commands; it does not request.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "How quickly do voodoo spells work?",
          answer: [
            {
              _type: "block",
              _key: "vs-faq4",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "vs-faq4-s",
                  text: "Simple voodoo workings produce results within 24 to 72 hours. More complex rituals — especially those involving multiple targets or deep spiritual warfare — take one to three lunar cycles. I set realistic expectations during your consultation and keep you informed throughout the process.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Will I need to provide anything for the ritual?",
          answer: [
            {
              _type: "block",
              _key: "vs-faq5",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "vs-faq5-s",
                  text: "In some cases, I ask for personal items — a photograph, a piece of clothing, a name written on paper — to connect the spell to the target. Most materials are provided by me. You are told exactly what is needed during the consultation. Nothing unreasonable is ever requested.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
      ]}
      relatedServices={[
        { title: "Protection Spells", href: "/protection-spells/" },
        { title: "Curse Removal", href: "/curse-removal/" },
      ]}
      conversionCopy={{
        heading: "The Spirits Are Waiting. Are You Ready to Act?",
        body: `If you have been wronged, if you need protection, if you demand justice where none has come — Vodun offers a path that ordinary methods cannot. Reach out now for a confidential consultation with ${clientTitle} ${clientName}. The spirits do not forget, and neither should you. Free consultation available.`,
      }}
    />
  );
}
