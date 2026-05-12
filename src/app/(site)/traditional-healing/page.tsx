import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";

export function generateMetadata(): Metadata {
  return {
    title: "Traditional African Healing | Herbal Medicine & Ancestral Healing | Prof. Ndaula",
    description:
      "Traditional African healing with herbal medicine and ancestral rituals for body and spirit. Free consultation with Prof. Ndaula. WhatsApp +256788546704",
    keywords: [
      "traditional african healing",
      "herbal medicine",
      "ancestral healing",
      "traditional healer",
      "spiritual healing",
    ],
    alternates: { canonical: "/traditional-healing/" },
  };
}

export default function TraditionalHealingPage() {
  const clientName = CLIENT_NAME;
  const clientTitle = CLIENT_TITLE;

  return (
    <ServicePageTemplate
      title="Traditional Healing"
      seoH1="Traditional African Healing — Herbal Medicine & Ancestral Healing That Cures the Root"
      subheading="The old ways still heal. The ancestors still speak through me."
      leadParagraph={`I am ${clientTitle} ${clientName}, a traditional African healer with over 25 years of experience treating physical, emotional, and spiritual ailments that modern medicine cannot explain or cure. Traditional African healing is the oldest system of medicine on the continent — practiced for thousands of years before modern hospitals existed — and it remains the most effective approach for conditions that have a spiritual root. I do not dismiss Western medicine; I address what it cannot reach. Most physical and emotional problems have a spiritual origin: an ancestral disturbance, a curse, a spiritual blockage, or a disconnection from one's purpose and lineage. When doctors tell you nothing is wrong but your body tells you otherwise, I am the healer you need. My work combines spiritual reading, herbal medicine, ancestral communication, and energy cleansing to treat the whole person — body, mind, and spirit. I have healed thousands, and my practice grows by word of mouth because the results speak for themselves.`}
      whatsappPreFill={`Hello%20${clientTitle}%20${clientName}%2C%20I%20need%20traditional%20healing%20help`}
      icon="🌿"
      whatIsSection={[
        {
          _type: "block",
          _key: "th-wi-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "th-wi-s1",
              text: "Traditional African healing is not primitive or backward — it is a complete and sophisticated system that addresses the root cause of illness rather than merely suppressing symptoms. Traditional healers understand that most physical and emotional problems have a spiritual origin: an ancestral disturbance, a curse, a spiritual blockage, or a disconnection from one's purpose and lineage. Herbs are selected not just for their medicinal properties but for their spiritual resonance — each plant carries a specific energy that addresses a specific type of imbalance. The healer combines these herbs into remedies taken internally, used in baths, or burned as part of cleansing rituals. This is the original medicine, tested across generations and refined through centuries of ancestral healing practice.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "th-wi-2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "th-wi-s2",
              text: `When I perform traditional healing, the process includes spiritual reading, herbal treatment, ancestral communication, and energy cleansing. I combine these herbs into remedies that are taken internally, used in spiritual baths, or burned as part of cleansing rituals. This is not alternative medicine in the Western sense — it is the original medicine, tested across generations and refined through centuries of practice. Traditional healing is effective for conditions that modern medicine struggles with: unexplained infertility, chronic misfortune, recurring illness, emotional instability, ancestral disturbances, and spiritual sickness. It is also deeply effective as a complement to Western medicine — many clients use both systems simultaneously, addressing the spiritual dimension that doctors cannot reach. I never advise clients to abandon medical treatment; instead, my spiritual work addresses the underlying causes that physical treatment alone cannot resolve.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      whoNeedsSection={[
        "You have an illness that doctors cannot explain or cure despite repeated visits",
        "You feel spiritually disconnected from your ancestors and your roots",
        "You experience chronic bad luck that follows you everywhere without pause",
        "You have been trying to conceive without success and medical tests show nothing wrong",
        "You suffer from recurring nightmares or sleep disturbances that exhaust you",
        "You feel emotionally unstable for no apparent reason and nothing helps",
        "You have tried everything else — doctors, therapists, other healers — and nothing has worked",
        "You feel called to reconnect with traditional African spiritual practices and your lineage",
      ]}
      processSteps={[
        "Spiritual Reading and Root Cause Diagnosis — You contact me and describe your symptoms, your history, and what you have already tried. I perform a spiritual reading to identify the root cause — whether it lies in the ancestral realm, in spiritual attack, in energetic imbalance, or in a combination of factors. Every person's illness has a unique spiritual fingerprint, and the treatment must match it precisely. This reading reveals what no medical test can detect.",
        "Personalized Treatment Plan — Based on the reading, I prepare a personalized treatment plan that includes herbal remedies, spiritual baths, ancestral offerings, cleansing rituals, and ongoing spiritual guidance. Herbs are selected for their specific spiritual resonance with your condition and prepared according to traditional methods — some are brewed as teas, others combined into powders or pastes, and some used in spiritual baths. Every remedy is prepared specifically for you; there are no pre-made generic mixtures.",
        "Healing Ritual and Herbal Remedy Application — I perform the healing rituals and dispatch the herbal remedies within 24 hours. Spiritual rituals are performed according to the appropriate timing in the ancestral calendar. The remedies are prayed over to activate their spiritual properties. You receive clear instructions on how to use each remedy and what to expect as the healing progresses. Spiritual work is not limited by distance — I treat clients across the world effectively.",
        "Follow-Up Sessions and Progress Monitoring — After the initial treatment, I monitor your progress through follow-up readings and adjust the approach if needed. Chronic conditions or deep ancestral issues require several weeks of treatment. I give you a realistic timeline during the initial consultation. Follow-up sessions ensure that the healing is progressing and I remain available for ongoing spiritual guidance until you are fully restored.",
      ]}
      whatToExpect={[
        {
          _type: "block",
          _key: "th-we-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "th-we-s1",
              text: `Your first contact with me is a conversation about your symptoms, your history, and what you have already tried. I then perform a spiritual reading to see what is happening in the spirit realm. You receive an honest assessment of your situation, including whether traditional healing is the right approach and what kind of results you can expect. If you proceed, the healing work begins immediately. Herbal remedies are prepared and dispatched within 24 hours. Spiritual rituals are performed according to the appropriate timing. Most clients begin to feel improvement within the first week, with deeper healing unfolding over the following weeks. Client reports consistently describe three signs of healing taking effect: physical symptoms that resisted medical treatment begin to ease, a sense of spiritual reconnection and clarity emerges, and the pattern of misfortune or illness breaks. Ongoing support is always available, and I stay with you until the healing is complete.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      testimonials={[
        {
          name: "Ngozi O.",
          location: "Nigeria",
          quote: `I had been trying to get pregnant for five years. Doctors said nothing was wrong. After two months of traditional healing with ${clientTitle} ${clientName}, I conceived. My daughter is now two years old and perfectly healthy.`,
          rating: 5,
        },
        {
          name: "Samuel D.",
          location: "Kenya",
          quote: "I was always sick — one thing after another. No doctor could find the cause. The healer identified an ancestral disturbance affecting my family for three generations. After the healing, my health improved dramatically and has stayed strong.",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "Is traditional healing safe?",
          answer: [
            {
              _type: "block",
              _key: "th-faq1",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "th-faq1-s",
                  text: "Yes, when performed by an experienced and initiated healer like myself. The herbs I use are time-tested and carefully selected for each individual. I never use toxic or harmful substances. Spiritual rituals are conducted with strict protocols that ensure safety. Traditional healing has been practiced safely for millennia — the key is working with a genuine practitioner.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can I use traditional healing alongside Western medicine?",
          answer: [
            {
              _type: "block",
              _key: "th-faq2",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "th-faq2-s",
                  text: "Absolutely. Traditional healing and Western medicine address different dimensions of the same problem. One treats the body; the other treats the spirit. Many clients use both simultaneously with excellent results. I never advise you to stop taking prescribed medication or abandon medical treatment. The two systems complement each other perfectly.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "How are the herbal remedies prepared?",
          answer: [
            {
              _type: "block",
              _key: "th-faq3",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "th-faq3-s",
                  text: "Herbs are selected based on the spiritual reading and prepared according to traditional methods — some are dried and brewed as teas, others combined into powders or pastes, and some used in spiritual baths. Every remedy is prepared specifically for the individual client. I also pray over the herbs to activate their spiritual properties. No pre-made generic mixtures are ever used.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "How long does traditional healing take?",
          answer: [
            {
              _type: "block",
              _key: "th-faq4",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "th-faq4-s",
                  text: "Simple ailments improve within days. Chronic conditions or deep ancestral issues require several weeks or months of treatment. I give you a realistic timeline during the initial consultation based on the spiritual reading. I never rush the process — healing must unfold at the pace the spirit dictates for lasting results.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can traditional healing help someone who is far away?",
          answer: [
            {
              _type: "block",
              _key: "th-faq5",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "th-faq5-s",
                  text: "Yes. Spiritual work is not limited by physical distance. I perform readings and rituals remotely, and herbal remedies are dispatched to any location worldwide. Many of my clients are based in different countries and receive effective treatment through remote consultations and shipped remedies. Distance does not weaken ancestral healing.",
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
        { title: "Spirit Blessings", href: "/spirit-blessings/" },
      ]}
      conversionCopy={{
        heading: "The Ancestors Have Been Waiting for You to Ask.",
        body: `If you have tried everything and nothing has worked, the answer lies not in the physical world but in the spiritual one. Traditional healing addresses the root cause that other methods cannot reach. Reach out now for a confidential consultation with ${clientTitle} ${clientName}. The herbs are ready. The spirits are listening. Free consultation available.`,
      }}
    />
  );
}
