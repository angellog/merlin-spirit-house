import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";

export function generateMetadata(): Metadata {
  return {
    title: "Spirit Blessings & Ancestral Favour | Open Doors of Destiny | Prof. Ndaula",
    description:
      "Spirit blessings and ancestral favour rituals to open doors of destiny and divine prosperity. Free consultation with Prof. Ndaula. WhatsApp +256788546704",
    keywords: [
      "spirit blessings",
      "ancestral favour",
      "divine blessings",
      "ancestral rituals",
      "spiritual blessing",
    ],
    alternates: { canonical: "/spirit-blessings/" },
  };
}

export default function SpiritBlessingsPage() {
  const clientName = CLIENT_NAME;
  const clientTitle = CLIENT_TITLE;

  return (
    <ServicePageTemplate
      title="Spirit Blessings"
      heroImage="/images/services/spirit-blessings.jpg"
      seoH1="Spirit Blessings & Ancestral Favour — Open the Doors of Your Destiny"
      subheading="When the spirits smile upon you, every door opens and every path clears through my hands."
      leadParagraph={`I am ${clientTitle} ${clientName}, and for over 13 years I have served as a mediator between the living and the spirit world, calling upon ancestral spirits, nature spirits, and divine forces to bestow their favour upon those who seek it. In the West African Vodun and ancestral healing traditions, blessings are not given randomly — they are earned through proper relationship with the spirits, and I know exactly how to establish that relationship. A blessing is not begging or wishing — it is a sacred exchange. The spirits give because they are honoured, and I know precisely how to honour them. When the spirits bless you, obstacles dissolve, opportunities appear, relationships deepen, and a sense of peace and purpose infuses everything you do. My clients come to me feeling stuck, blocked, and spiritually dry — and after a blessing ritual, they describe feeling as though the entire universe has shifted in their favour. That is the power of ancestral favour when it is properly invoked by someone with genuine authority.`}
      whatsappPreFill={`Hello%20${clientTitle}%20${clientName}%2C%20I%20want%20to%20receive%20spirit%20blessings`}
      icon="✦"
      whatIsSection={[
        {
          _type: "block",
          _key: "sb-wi-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "sb-wi-s1",
              text: "Spirit blessings are rituals of invocation and offering that call upon ancestral spirits, nature spirits, and divine forces to bestow favour, protection, and prosperity upon a person or household. Unlike spells that target a specific problem, blessings are broader in scope — they align your entire life with the flow of divine grace. When the spirits bless you, obstacles dissolve, opportunities appear, relationships deepen, and a sense of peace and purpose infuses everything you do. A blessed life is not a lucky life — it is a spiritually aligned one. In the ancestral healing traditions of West Africa, this alignment is achieved through precise rituals that honour the spirits and invite their active participation in your life.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "sb-wi-2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "sb-wi-s2",
              text: "Spirit blessings are particularly powerful at key moments in life: before a new venture, after a birth, before marriage, when entering a new home, or when recovering from a period of hardship. They are also deeply valuable as ongoing spiritual maintenance — regular blessings keep your life aligned with divine favour and prevent negative forces from gaining a foothold. A blessed person is harder to curse, harder to harm, and more likely to attract the good things that life has to offer. The rituals involve specific offerings — foods, herbs, candles, drinks — that each spirit favours, combined with ancestral prayers and the channeling of divine energy into your life or home. This is the ancient practice that keeps families and lineages thriving across generations.",
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      whoNeedsSection={[
        "You feel like nothing goes your way no matter how hard you try",
        "You are starting a new business, job, or venture and want spiritual backing",
        "You have recently moved into a new home and want it blessed and protected",
        "Your family seems stuck in a cycle of misfortune and stagnation with no end",
        "You are preparing for marriage and want ancestral blessing on the union",
        "You have just recovered from illness or hardship and want spiritual renewal",
        "You feel spiritually dry and disconnected from divine favour and purpose",
        "You want to protect your children with ancestral blessings that endure",
      ]}
      processSteps={[
        "Spirit Identification and Reading — You contact me and describe your situation and what kind of blessing you seek. I perform a spiritual reading to determine which spirits — ancestral, nature, or divine — are most relevant to your situation and most likely to respond. Not every spirit is called for every situation. The reading reveals exactly which forces of the unseen world are aligned with your needs and ready to be invoked.",
        "Offering Preparation and Ritual Design — Based on the reading, I prepare the appropriate offerings: specific foods, herbs, candles, drinks, and other items that each spirit favours. Each spirit requires different offerings and different forms of invocation. I design the blessing ritual to include the correct prayers, the right sequence of offerings, and the proper channeling of divine energy. Everything is prepared in sacred space with full reverence.",
        "Blessing Ritual and Ancestral Invocation — I perform the blessing ritual, invoking the identified spirits, making the offerings, and channeling divine energy into your life, home, or family. The ritual involves prayer, offering, and the deliberate opening of channels between the spirit world and your life. Some blessings are performed in a single session; others involve a series of rituals over several days for maximum effect. The spirits respond to sincerity and proper honour — and I know how to honour them correctly.",
        "Guidance and Blessing Maintenance — After the blessing, I provide guidance on simple personal practices to maintain the blessing and keep your life aligned with divine favour. I also advise on when to seek renewal or additional blessings — at key life transitions or during periods of increased spiritual pressure. Many clients request regular blessings every few months as spiritual maintenance. The goal is a sustained elevation in your spiritual state that continues to benefit you long after the ritual is complete.",
      ]}
      whatToExpect={[
        {
          _type: "block",
          _key: "sb-we-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "sb-we-s1",
              text: `When you contact me, we discuss your situation and what kind of blessing you seek. I determine which spirits to invoke and what offerings are needed. The blessing ritual is typically performed within 24 to 72 hours of your consultation. Many clients report feeling an immediate shift — a sense of lightness, clarity, or warmth — during or shortly after the ritual. Client reports consistently describe three signs of a blessing taking effect: a tangible sense of ease and flow replaces the feeling of being stuck or blocked, unexpected opportunities or reconciliations appear within one to three weeks, and a general elevation in mood and fortune becomes noticeable to the client and those around them. The blessing creates a sustained elevation in your spiritual state that continues to benefit you long after the ritual is complete. Tangible results — such as new opportunities, reconciliations, or financial improvements — typically follow within one to three weeks.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      testimonials={[
        {
          name: "Beatrice K.",
          location: "Uganda",
          quote: `After the ancestral blessing from ${clientTitle} ${clientName}, my entire family's fortune shifted. My son got a scholarship, my business picked up, and the constant arguing in our home stopped. The spirits truly smiled on us.`,
          rating: 5,
        },
        {
          name: "Emmanuel N.",
          location: "Ghana",
          quote: "I was about to start a new business and wanted spiritual backing. After the blessing, everything fell into place effortlessly — the funding, the location, the clients. It felt like the doors were already open and waiting for me.",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "What is the difference between a blessing and a spell?",
          answer: [
            {
              _type: "block",
              _key: "sb-faq1",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "sb-faq1-s",
                  text: "A spell targets a specific outcome — returning a lover, attracting money, breaking a curse. A blessing is broader: it invites divine favour and alignment into your entire life. Blessings elevate your overall spiritual state, making good things flow more naturally toward you. Spells are precise; blessings are expansive. Both are powerful, and they work well together. Many clients combine a specific spell with a general blessing for maximum effect.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "How often should I receive a spirit blessing?",
          answer: [
            {
              _type: "block",
              _key: "sb-faq2",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "sb-faq2-s",
                  text: "Major blessings are recommended at key life transitions — new home, new business, marriage, birth. Some clients also request regular blessings every few months as spiritual maintenance to keep their lives aligned with divine favour. I advise you on what is appropriate for your situation during the consultation.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can a blessing protect me from curses?",
          answer: [
            {
              _type: "block",
              _key: "sb-faq3",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "sb-faq3-s",
                  text: "A blessing strengthens your spiritual state, making you more resistant to negative forces. However, if you are already under a specific curse, you need curse removal first and then a blessing afterward. If you are not yet attacked, a blessing provides a layer of general protection that makes it significantly harder for curses to take hold.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "What offerings are used in a blessing ritual?",
          answer: [
            {
              _type: "block",
              _key: "sb-faq4",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "sb-faq4-s",
                  text: "Offerings vary depending on which spirits are being invoked. Common offerings include specific foods, drinks, herbs, candles, and symbolic items rooted in ancestral healing traditions. I determine what each spirit requires and prepare everything on your behalf. You do not need to source anything yourself — all materials and offerings are handled by me.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can I request a blessing for someone else?",
          answer: [
            {
              _type: "block",
              _key: "sb-faq5",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "sb-faq5-s",
                  text: "Yes. Many people request blessings for their children, spouses, parents, or friends. The spirits extend their favour to anyone, as long as the request is genuine and the offering is made with sincerity. Parental blessings for children are among the most powerful and commonly requested rituals. A blessed child carries that favour throughout their life.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
      ]}
      relatedServices={[
        { title: "Money Spells", href: "/money-spells/" },
        { title: "Traditional Healing", href: "/traditional-healing/" },
      ]}
      conversionCopy={{
        heading: "Open Your Life to Divine Favour. The Spirits Are Ready.",
        body: `If your life feels stuck, if nothing flows, if every step forward meets resistance — the spirits are waiting for you to ask. A blessing is the most powerful way to align yourself with divine abundance. Reach out now and let ${clientTitle} ${clientName} open the channels of favour that have been waiting for you. Free consultation available.`,
      }}
    />
  );
}
