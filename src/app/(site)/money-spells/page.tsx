import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";

export function generateMetadata(): Metadata {
  return {
    title: "Money Spells That Work | Wealth & Prosperity Rituals | Prof. Ndaula",
    description:
      "Money spells that work fast to break financial blockages, attract wealth and open doors of prosperity. Free consultation with Prof. Ndaula. WhatsApp +256788546704",
    keywords: [
      "money spells that work",
      "wealth spells",
      "prosperity rituals",
      "financial breakthrough spell",
      "money spell caster",
    ],
    alternates: { canonical: "/money-spells/" },
  };
}

export default function MoneySpellsPage() {
  const clientName = CLIENT_NAME;
  const clientTitle = CLIENT_TITLE;

  return (
    <ServicePageTemplate
      title="Money Spells"
      heroImage="/images/services/money-spells.jpg"
      seoH1="Money Spells That Work — Break Financial Blockages & Open Doors of Wealth"
      subheading="Poverty is not your destiny. The spirits of abundance are ready to move through me."
      leadParagraph={`I am ${clientTitle} ${clientName}, and for over 13 years I have helped thousands of people break free from financial stagnation, crushing debt, and the invisible spiritual forces that keep prosperity locked away from them. In the traditional African understanding, wealth is not merely a matter of hard work or luck — it is a matter of spiritual alignment. When the channels of abundance are blocked by curses, jealousy, ancestral debts, or negative energy, no amount of effort brings prosperity. I know this because I have seen it in thousands of readings. I do not offer empty promises of overnight riches. I perform the ancestral work that clears the blockages, opens the channels, and aligns your spirit with the flow of divine abundance. My clients do not just earn more — they find that money and opportunities flow toward them naturally, as if the universe has finally remembered their name.`}
      whatsappPreFill={`Hello%20${clientTitle}%20${clientName}%2C%20I%20need%20help%20with%20a%20financial%20situation`}
      icon="◈"
      whatIsSection={[
        {
          _type: "block",
          _key: "ms-wi-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "ms-wi-s1",
              text: "Money spells are rituals designed to remove the spiritual blockages that keep poverty, debt, and financial stagnation rooted in your life. In the traditional African understanding, wealth is not merely a matter of hard work or luck — it is a matter of spiritual alignment. When the channels of abundance are blocked by curses, jealousy, ancestral debts, or negative energy, no amount of effort brings prosperity. A money spell clears those channels and opens the doors that fate has shut. These spells draw upon ancestral healing and herbal medicine traditions that have addressed financial imbalance for centuries.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "ms-wi-2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "ms-wi-s2",
              text: `There are many forms of money spells, and I use each one for the specific type of financial struggle you face. Some attract new opportunities — clients, jobs, contracts, windfalls. Others unblock stuck payments and debts owed to you. Some protect existing wealth from being drained by envious eyes or spiritual theft. I use a combination of herbal mixtures, candle rituals, ancestral invocation, and prosperity prayers to direct the flow of abundance toward you. Each spell is tailored to the specific nature of your financial struggle. Money spells do not create wealth from nothing — they remove what is blocking it and align your spirit with the energy of abundance. Many clients discover that after a money spell, opportunities appear from nowhere: a promotion suddenly comes through, a debt is repaid unexpectedly, a business deal that was stuck finally closes. The money was always meant for you. The spell simply removed what was standing in the way.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      whoNeedsSection={[
        "You work hard but money slips through your fingers every single month",
        "Your business has stagnated despite your best efforts and investments",
        "You are drowning in debt with no clear way out in sight",
        "Clients or customers have stopped coming and you do not know why",
        "Money owed to you is being deliberately withheld by someone",
        "You suspect someone has placed a financial curse on you or your business",
        "Every investment you make turns into a loss without explanation",
        "You feel an invisible ceiling on your earnings that you cannot break through",
      ]}
      processSteps={[
        "Spiritual Diagnosis and Root Cause Identification — You contact me and describe your financial situation in detail. I perform an ancestral reading to identify the exact root cause of your financial blockage — whether it is a curse, an ancestral debt, spiritual theft by an enemy, or misalignment with the energy of prosperity. Until the cause is known, no ritual can be effective. This reading reveals what no financial advisor can see.",
        "Ritual Selection and Preparation — Based on the diagnosis, I select the appropriate ritual: a prosperity bath, a candle-and-herb working, an ancestral offering, or a combination of these. I prepare the herbal mixtures, select the candle colors, and determine the precise timing according to the spiritual calendar. Every element is chosen for its specific resonance with your unique financial situation.",
        "Spell Casting and Ancestral Invocation — I perform the money spell ritual in sacred space, calling upon the ancestral spirits and the forces of abundance to open the channels that have been blocked. The work is done with full authority and the precision that comes from decades of practice. You do not need to be physically present — spiritual work transcends distance.",
        "Follow-Up, Progress Monitoring, and Channel Maintenance — After the ritual, I perform follow-up readings to confirm that the channels of abundance have opened and are flowing correctly. If adjustments are needed, I make them. I also provide guidance on simple practices to keep the channels clear and prevent future blockages. Some situations require a single powerful ritual; others need a series of workings over several weeks. I guide you through every step.",
      ]}
      whatToExpect={[
        {
          _type: "block",
          _key: "ms-we-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "ms-we-s1",
              text: `After your initial consultation with me, you know exactly what is causing your financial problems and what the healing plan involves. Most money spells begin to show results within one to two weeks: unexpected payments arrive, new opportunities appear, or you notice a tangible shift in the energy around your finances. For deep blockages or long-standing curses, the process takes up to a full lunar cycle. Client reports consistently describe three signs of the money spell taking effect: stuck payments or debts suddenly get released, new clients or job opportunities appear without effort, and a feeling of financial heaviness lifts and is replaced by a sense of flow and possibility. Throughout the work, I check in with you to assess progress and adjust the approach if needed. You are never left to wonder whether the spell is working.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      testimonials={[
        {
          name: "David O.",
          location: "South Africa",
          quote: `My business had been stuck for two years. After ${clientTitle} ${clientName}'s money ritual, a contract I had been waiting on for months came through in eight days. Revenue has tripled since. I believe now.`,
          rating: 5,
        },
        {
          name: "Fatima B.",
          location: "Nigeria",
          quote: "I was buried in debt and could not see a way out. After the money spell, three separate payments I had given up on came through in the same week. I paid off my debts and have been financially free since.",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "Can a money spell make me rich overnight?",
          answer: [
            {
              _type: "block",
              _key: "ms-faq1",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ms-faq1-s",
                  text: "Money spells remove blockages and align you with prosperity, but they do not create money from nothing. You should expect opportunities to open, payments to arrive, and financial flow to increase — often dramatically. Someone who takes action on the opportunities that appear sees the fastest and greatest results. The wealth comes through real channels; the spell clears the path.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Why do I keep losing money no matter what I do?",
          answer: [
            {
              _type: "block",
              _key: "ms-faq2",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ms-faq2-s",
                  text: "Chronic financial loss has a spiritual root: a curse placed by an envious person, an ancestral debt that has not been settled, or a spiritual drain caused by someone feeding on your prosperity. A reading identifies the exact cause, and a money spell removes it permanently. Without addressing the spiritual root, the financial drain continues regardless of effort.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "How long do money spell results last?",
          answer: [
            {
              _type: "block",
              _key: "ms-faq3",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ms-faq3-s",
                  text: "A properly performed money spell removes the blockage permanently. However, if you are exposed to new spiritual attacks — from jealous people, for example — the blockages return. Some clients choose regular spiritual maintenance to keep their channels clear. I advise you on what is appropriate during the consultation.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Will the money spell affect my job or business?",
          answer: [
            {
              _type: "block",
              _key: "ms-faq4",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ms-faq4-s",
                  text: "Yes, in a positive way. Many clients report receiving promotions, new clients, or unexpected business opportunities shortly after a money spell. The spell opens channels — it does not force specific outcomes. The form the prosperity takes depends on your life circumstances and the actions you take on the opportunities that emerge.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Is the consultation confidential?",
          answer: [
            {
              _type: "block",
              _key: "ms-faq5",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ms-faq5-s",
                  text: "Absolutely. Every consultation and every ritual is completely private. Your name, your situation, and the work performed are never shared with anyone. Discretion is a sacred principle in my practice. I treat your financial struggles with the same confidentiality as a doctor treats your health.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
      ]}
      relatedServices={[
        { title: "Spirit Blessings", href: "/spirit-blessings/" },
        { title: "Protection Spells", href: "/protection-spells/" },
      ]}
      conversionCopy={{
        heading: "Break Free from Financial Struggle. Abundance Awaits You.",
        body: `You were not born to struggle endlessly. If money keeps slipping away, if doors keep closing, if nothing you do works — there is a spiritual reason. Reach out now and let ${clientTitle} ${clientName} open the channels of prosperity that have been blocked. Your financial breakthrough is closer than you think. Free consultation available now.`,
      }}
    />
  );
}
