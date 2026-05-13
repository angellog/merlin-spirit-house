import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";

export function generateMetadata(): Metadata {
  return {
    title: "Protection Spells | Spiritual Shielding & Defense | Prof. Ndaula",
    description:
      "Protection spells against evil eye, black magic, curses and spiritual attacks. Spiritual shielding by Prof. Ndaula. Free consultation. WhatsApp +256788546704",
    keywords: [
      "protection spells",
      "spiritual shielding",
      "evil eye protection",
      "black magic defense",
      "spiritual protection",
    ],
    alternates: { canonical: "/protection-spells/" },
  };
}

export default function ProtectionSpellsPage() {
  const clientName = CLIENT_NAME;
  const clientTitle = CLIENT_TITLE;

  return (
    <ServicePageTemplate
      title="Protection Spells"
      heroImage="/images/services/protection-spells.jpg"
      seoH1="Protection Spells & Spiritual Shielding — Defend Against All Attacks"
      subheading="When the darkness comes for you, the spirits stand in its way through me."
      leadParagraph={`I am ${clientTitle} ${clientName}, and for over 25 years I have built spiritual shields around people, families, and businesses that no enemy can penetrate. In a world where unseen forces attack your health, your relationships, your finances, and your peace of mind, protection is not optional — it is survival. Every culture that practices spiritual work has its own methods of shielding, and the West African Vodun and ancestral healing traditions I carry are among the most powerful on earth. I do not offer vague blessings or weak prayers. I construct invisible barriers that deflect negative energy, repel spiritual attacks, and prevent enemies from reaching you through the spirit realm. My clients come to me under siege — suffering from nightmares, illness, misfortune, and the relentless pressure of spiritual warfare — and I make them untouchable. That is my work, and I have been doing it with consistent results for decades.`}
      whatsappPreFill={`Hello%20${clientTitle}%20${clientName}%2C%20I%20need%20protection%20from%20spiritual%20attack`}
      icon="⬡"
      whatIsSection={[
        {
          _type: "block",
          _key: "ps-wi-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "ps-wi-s1",
              text: "Protection spells are among the most essential and ancient forms of spiritual work. In the West African Vodun and ancestral healing traditions, these spells create an invisible barrier around you that deflects negative energy, repels spiritual attacks, and prevents enemies from reaching you through the spirit realm. A spell to protect against the evil eye is different from one that blocks curses, which is different again from one that prevents enemies from sending spirits against you. The healer must first identify the nature and source of the threat, then construct the appropriate spiritual defense. Some protection spells are permanent; others are temporary measures while a deeper problem is resolved.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "ps-wi-2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "ps-wi-s2",
              text: `Protection spells also serve a critical preventive purpose. You do not need to be under active attack to benefit from spiritual shielding. Many clients seek protection before traveling, before entering a new business deal, or during times of vulnerability — after a breakup, during illness, or when facing a jealous rival. Proactive protection is always more effective than emergency defense. A shield built before the attack arrives cannot be breached as easily as one erected under siege. I also teach clients simple daily practices rooted in herbal medicine and ancestral traditions to maintain their shield between sessions. The goal is not just to protect you once — it is to make you spiritually untouchable for good.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      whoNeedsSection={[
        "You feel watched or followed by an unseen presence that will not leave",
        "Bad things keep happening to you in an unnatural and relentless pattern",
        "Someone has threatened to curse you or send spirits against you",
        "You experience unexplained illness that doctors cannot diagnose or cure",
        "Your home or business feels heavy, unwelcoming, and spiritually contaminated",
        "People around you seem to drain your energy or bring you down consistently",
        "You are going through a major life transition and feel spiritually vulnerable",
        "You have enemies who are known to practice spiritual work against others",
      ]}
      processSteps={[
        "Spiritual Reading and Threat Assessment — You contact me and describe the symptoms you are experiencing and any known enemies or sources of spiritual threat. I perform a remote spiritual reading to determine whether you are already under attack, the source of the threat, and the type of protection needed. This reading reveals the exact nature of the spiritual danger you face.",
        "Shield Construction and Ritual Selection — Based on the reading, I select the appropriate ritual — which includes herbal baths, candle shieldings, ancestral wall construction, or mirror spells that reflect attacks back to their sender. I prepare the specific herbs, candles, and materials required for your unique defense. No generic shield covers everything; each protection is built for the specific threat you face.",
        "Protection Ritual Performance — I perform the protection ritual in sacred space, constructing the spiritual barrier around you, your home, or your business. The ritual is performed within 24 to 48 hours of your consultation. The shield is built layer by layer — each layer addressing a different type of attack. For households, I create a perimeter shield that nothing hostile can cross.",
        "Maintenance Guidance and Reinforcement — After the initial protection, I teach you simple daily practices rooted in ancestral healing and herbal medicine to maintain your shield. If the threat level increases or a new enemy emerges, the shield is reinforced. Regular spiritual check-ups are recommended for those living in environments with high spiritual conflict. I remain available to strengthen your defense whenever needed.",
      ]}
      whatToExpect={[
        {
          _type: "block",
          _key: "ps-we-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "ps-we-s1",
              text: `When you contact me, I ask about the symptoms you are experiencing and any known enemies or sources of spiritual threat. I perform a remote reading to assess your spiritual situation before recommending any work. If protection is needed, the first ritual is performed within 24 to 48 hours. Most clients feel an immediate sense of relief and lightness after the spell is cast — a tangible shift in the energy around them. Client reports consistently describe three signs of protection taking effect: nightmares and night terrors stop completely, the heavy oppressive feeling lifts and is replaced by clarity and calm, and the pattern of unexplained misfortune breaks. Active attacks typically cease within days. Full spiritual fortification takes one to two weeks depending on the severity of the threat. You are never left unprotected at any stage of the process.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      testimonials={[
        {
          name: "Amina J.",
          location: "United Kingdom",
          quote: `I felt something dark following me everywhere. Bad luck, broken relationships, illness. After ${clientTitle} ${clientName}'s protection spell, I feel like myself again for the first time in years. The darkness is gone.`,
          rating: 5,
        },
        {
          name: "Joseph K.",
          location: "Uganda",
          quote: "My mother-in-law was known for sending spirits against people she hated. After the protection spell, everything she tried bounced back. My family is safe now. The shield has held for over a year.",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "How do I know if I am under spiritual attack?",
          answer: [
            {
              _type: "block",
              _key: "ps-faq1",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ps-faq1-s",
                  text: "Common signs include a sudden string of bad luck across multiple areas of life, unexplained illness, recurring nightmares, a feeling of heaviness or being watched, relationship breakdowns without cause, and financial problems that appear from nowhere. If these things are happening in a pattern, it is not coincidence. A spiritual reading confirms whether you are under attack and identifies the source.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can protection spells protect my family and home too?",
          answer: [
            {
              _type: "block",
              _key: "ps-faq2",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ps-faq2-s",
                  text: "Yes. Protection spells are extended to cover your entire household, your children, and your business. Household protection is especially recommended if you suspect someone has been sending negative energy into your home. I create a perimeter shield that nothing hostile can cross. Your entire family becomes spiritually defended.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Is protection different from curse removal?",
          answer: [
            {
              _type: "block",
              _key: "ps-faq3",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ps-faq3-s",
                  text: "Yes. Curse removal eliminates an existing curse that is already affecting you. Protection prevents future attacks from reaching you. If you are already cursed, you need removal first and protection afterward. If you are not yet attacked but feel vulnerable, protection alone is sufficient. I advise you on which approach is needed during the consultation.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Do protection spells need to be renewed?",
          answer: [
            {
              _type: "block",
              _key: "ps-faq4",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ps-faq4-s",
                  text: "Most protection spells are long-lasting, but if the threat level increases or a new enemy emerges, the shield needs reinforcement. I let you know whether your protection is permanent or needs periodic renewal. Regular spiritual check-ups are recommended for those who live in environments with high spiritual conflict.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can someone bypass a protection spell?",
          answer: [
            {
              _type: "block",
              _key: "ps-faq5",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ps-faq5-s",
                  text: "A properly constructed protection spell by a powerful healer is extremely difficult to breach. However, if you weaken your own shield through fear, doubt, or exposure to corrupting influences, the protection is compromised. Following my guidance for maintaining your spiritual hygiene is essential to keeping the shield intact.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
      ]}
      relatedServices={[
        { title: "Curse Removal", href: "/curse-removal/" },
        { title: "Voodoo Spells", href: "/voodoo-spells/" },
      ]}
      conversionCopy={{
        heading: "Do Not Wait for the Next Attack. Shield Yourself Now.",
        body: `If you sense something is wrong, trust that feeling. Spiritual attacks do not stop on their own — they escalate. Contact ${clientTitle} ${clientName} today for a confidential assessment and immediate protection. The spirits will stand between you and whatever darkness comes your way. Free consultation available now.`,
      }}
    />
  );
}
