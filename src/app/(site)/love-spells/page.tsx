import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";

export function generateMetadata(): Metadata {
  return {
    title: "Love Spells That Work | Bring Back Lost Lover | Prof. Ndaula",
    description:
      "Powerful love spells that work fast to bring back lost lovers, stop divorce, attract new love. Free consultation with Prof. Ndaula. WhatsApp +256788546704",
    keywords: [
      "love spells that work",
      "bring back lost lover",
      "love spell caster",
      "binding love spells",
      "return lover spell",
    ],
    alternates: { canonical: "/love-spells/" },
  };
}

export default function LoveSpellsPage() {
  const clientName = CLIENT_NAME;
  const clientTitle = CLIENT_TITLE;

  return (
    <ServicePageTemplate
      title="Love Spells"
      heroImage="/images/services/love-spells.jpg"
      seoH1="Love Spells That Work — Bring Back Your Lost Lover Today"
      subheading="The heart knows what it wants. I open the path the spirits have closed."
      leadParagraph={`I am ${clientTitle} ${clientName}, and for over 25 years I have reunited thousands of separated lovers, stopped divorces that seemed inevitable, and drawn soulmates together across impossible distances. Love is the most powerful force in the spirit realm, and when the channels of love are blocked by jealousy, curses, or negative energy, the suffering is unbearable. I do not offer false hope or empty promises. I perform the ancestral work that clears those channels and restores the love that belongs to you. Every love spell I cast begins with a spiritual reading — I see the exact obstacles standing between you and the one you love — and I remove them with precision. My clients call me because my work produces results they can see and feel. I am here because the spirits sent me to heal broken hearts.`}
      whatsappPreFill={`Hello%20${clientTitle}%20${clientName}%2C%20I%20need%20help%20with%20a%20love%20situation`}
      icon="♥"
      badge="Most Requested"
      whatIsSection={[
        {
          _type: "block",
          _key: "ls-wi-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "ls-wi-s1",
              text: "Love spells are among the oldest and most powerful forms of spiritual work known to humanity. Rooted in West African Vodun and ancestral healing traditions that stretch back thousands of years, love spells channel spiritual force toward the deepest human desire: to love and be loved in return. A love spell is not superstition or wishful thinking — it is a deliberate, precise invocation of ancestral spirits and natural energies that clears the blockages preventing love from flowing between two hearts.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "ls-wi-2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "ls-wi-s2",
              text: `When I cast a love spell, the work begins long before any ritual is performed. I conduct a deep spiritual reading to assess the energies surrounding your relationship, your partner's heart, and the specific obstacles standing between you and the love you deserve. Only then does the healing begin. Using herbal medicine, sacred candles, ancestral invocation, and the voice of the spirits, I open the channels that fate and negative influences have closed. There are many types of love spells — return-lover spells that pull a partner back, binding spells that deepen commitment and loyalty, attraction spells that draw new love into an empty life. Each one is customized, because no two hearts are the same and no two spells should be either.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      whoNeedsSection={[
        "Your partner has grown cold and distant without explanation",
        "An ex has moved on but you know the love was real",
        "You keep attracting the wrong kind of partner repeatedly",
        "Your relationship feels cursed or blocked by outside interference",
        "You want to deepen commitment or bind your relationship permanently",
        "Someone is deliberately interfering in your relationship",
        "You feel a spiritual blockage preventing love from entering your life",
        "You need to stop a divorce or separation immediately",
      ]}
      processSteps={[
        "Consultation and Spiritual Reading — You contact me via WhatsApp and describe your love situation in full detail. I perform a spiritual reading to identify the root cause of the separation, coldness, or blockage. I tell you honestly whether the spell will work and what kind of results to expect. This reading reveals what no ordinary person can see.",
        "Ritual Preparation — Based on the reading, I select the exact combination of herbs, candle colors, ancestral prayers, and ritual timing required for your unique situation. Every element is chosen for its specific spiritual resonance — I never use generic or one-size-fits-all approaches. The spirits respond to precision, and I prepare with exactitude.",
        "Spell Casting and Ancestral Invocation — I perform the ritual in sacred space, calling upon the ancestral spirits and the forces of love to open the channels between you and your beloved. The work is done with full authority and decades of proven practice. You do not need to be present — spiritual work transcends physical distance.",
        "Follow-Up and Confirmation — After the ritual, I monitor the spiritual progress through follow-up readings. I check whether the spirits have accepted the work and whether the energy is moving as intended. If adjustments are needed, I make them. You receive clear guidance on what signs to watch for and when to expect results. I remain available until the work is complete.",
      ]}
      whatToExpect={[
        {
          _type: "block",
          _key: "ls-we-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "ls-we-s1",
              text: `When you reach out, you receive a response within hours — often sooner. The first conversation is a spiritual assessment where I read the energy around your love situation. You are told honestly whether the spell will work and what to expect. If you proceed, the ritual work begins immediately. Most clients notice shifts within 3 to 14 days: a text from an ex, a sudden change in their partner's behavior, a new romantic connection appearing unexpectedly. Full results typically manifest within one lunar cycle (28 days). Client reports consistently describe three key signs: the target person reaches out without prompting, arguments and coldness dissolve, and the emotional bond intensifies beyond what it was before. You are never left wondering — follow-up support is included, and I stay with you until the work is done.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      testimonials={[
        {
          name: "Grace N.",
          location: "Kenya",
          quote: `I had completely given up on my marriage. After ${clientTitle} ${clientName}'s return-lover spell, my husband returned within three weeks, changed and loving. I cannot explain what happened — but it worked.`,
          rating: 5,
        },
        {
          name: "Thandi M.",
          location: "South Africa",
          quote: "My boyfriend of four years suddenly left for someone else. I was destroyed. After the return-lover spell, he came back apologizing, saying he could not stop thinking about me. We are now engaged.",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "Do love spells really work?",
          answer: [
            {
              _type: "block",
              _key: "ls-faq1",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ls-faq1-s",
                  text: "Yes, when performed by an experienced healer with genuine spiritual authority. Love spells are not magic tricks — they are a form of ancestral energy work practiced across West Africa for generations. The key is having a healer who can accurately read your situation and direct the right kind of spiritual force toward it. I have performed thousands of love spells with consistent results over 25 years.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "How long before I see results from a love spell?",
          answer: [
            {
              _type: "block",
              _key: "ls-faq2",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ls-faq2-s",
                  text: "Most clients begin to notice changes within 3 to 14 days. Full results typically manifest within one lunar cycle (about 28 days). Some complex situations — such as long separations or deep curses on the relationship — require additional work over a longer period. I always set realistic expectations during the initial reading.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Is a love spell the same as mind control?",
          answer: [
            {
              _type: "block",
              _key: "ls-faq3",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ls-faq3-s",
                  text: "No. A love spell opens the heart and clears the spiritual blockages that prevent love from flowing. It does not force someone against their will — it awakens what is already there but has been buried by fear, interference, or negative energy. True love cannot be manufactured; it is uncovered and strengthened.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can a love spell bring back an ex who has been gone for years?",
          answer: [
            {
              _type: "block",
              _key: "ls-faq4",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ls-faq4-s",
                  text: "Yes, depending on the spiritual connection between you. The longer the separation, the more stubborn the spiritual block, and the more powerful the work required. During the initial reading, I assess whether the connection still exists and what is realistically achievable. I have successfully reunited couples separated for over a decade.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Will the person know a spell was cast on them?",
          answer: [
            {
              _type: "block",
              _key: "ls-faq5",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "ls-faq5-s",
                  text: "No. The person simply feels drawn to you, thinks of you more often, or experiences a change of heart. They attribute their feelings to their own emotions — never to a spell. The work is invisible to the untrained eye. This is how ancestral spiritual work has always functioned.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
      ]}
      relatedServices={[
        { title: "Voodoo Spells", href: "/voodoo-spells/" },
        { title: "Protection Spells", href: "/protection-spells/" },
      ]}
      conversionCopy={{
        heading: "Ready to Begin? Your Love Life Can Change Today.",
        body: `Do not let another day pass in heartbreak or loneliness. The spirits are ready to move — are you? Reach out now and let the healing begin. Your consultation with ${clientTitle} ${clientName} is confidential, personal, and the first step toward the love you deserve. Free consultation available now.`,
      }}
    />
  );
}
