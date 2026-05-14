import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";

export function generateMetadata(): Metadata {
  return {
    title: "Binding Spells That Work Fast | Bind a Lover, Secure Commitment | Prof. Ndaula",
    description:
      "Powerful binding spells cast by Prof. Ndaula — 13 years experience. Bind a lover to you, prevent infidelity, secure commitment and loyalty. Free consultation. WhatsApp +256788546704.",
    keywords: [
      "binding spells that work",
      "bind a lover spell",
      "commitment binding spell",
      "faithfulness spell",
      "tie someone to you spell",
      "relationship binding ritual",
    ],
    alternates: { canonical: "/binding-spells/" },
  };
}

export default function BindingSpellsPage() {
  const clientName = CLIENT_NAME;
  const clientTitle = CLIENT_TITLE;

  return (
    <ServicePageTemplate
      title="Binding Spells"
      heroImage="/images/hero/ritual-altar.jpg"
      seoH1="Binding Spells That Work — Bind a Lover, Secure Commitment, Tie What Is Yours"
      subheading="What is yours must stay yours. I tie it down so nothing can pull it away."
      leadParagraph={`I am ${clientTitle} ${clientName}, and for over 13 years I have performed binding spells that hold what belongs to you — your lover's heart, your partner's loyalty, your family's safety, your business commitment. Binding is one of the oldest and most powerful spiritual practices on earth. The ancient Greeks called it katadesmos — the tying-down spell carved into lead tablets and buried at sacred crossroads. In West African Vodun, binding is knot magic — the ritual tying of cords that locks a spiritual bond in place so firmly that no outside force can undo it. I was trained in both traditions, and I use them with precision and authority. When a client comes to me because their lover is slipping away, because a rival is stealing their partner, or because someone they trusted is breaking faith, I bind that bond so tight it cannot be broken. That is what binding spells do — they secure, they hold, they tie what must not come undone.`}
      whatsappPreFill={`Hello%20${clientTitle}%20${clientName}%2C%20I%20need%20a%20binding%20spell%20to%20secure%20my%20relationship`}
      icon="⛓"
      badge="Most Requested"
      whatIsSection={[
        {
          _type: "block",
          _key: "bs-wi-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "bs-wi-s1",
              text: "Binding spells are ancient spiritual rituals designed to tie, secure, lock, or hold something in place. The Greek tradition called them katadesmos — inscribed tablets used to bind a person, a contract, or an outcome. The Roman equivalent was the defixio, the fixing-down spell that pinned a spiritual bond so it could not be undone. In West African Vodun, binding takes the form of cord-tying and knot magic — the physical act of tying knots during ritual becomes the spiritual act of locking a bond in place. Each knot represents a layer of binding energy, and once tied, the bond is held fast by ancestral authority. African ancestral binding ceremonies also invoke the spirits of the lineage to witness and enforce the tie, making the binding a covenant witnessed by the dead and upheld by the living. Binding is not about harming — it is about securing. A binding spell locks a commitment in place, anchors loyalty so it cannot drift, and holds a relationship together when forces are trying to pull it apart.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "bs-wi-2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "bs-wi-s2",
              text: `When I perform a binding spell, the work begins with a spiritual reading to determine the exact nature of the bond and the forces threatening to break it. I do not cast a generic binding — every situation requires a specific type of tie. A lover-binding uses different herbs, prayers, and ritual elements than an enemy-binding or a business-binding. In the West African Vodun knot magic tradition, I select the cord material — certain fibers carry specific spiritual properties — and I tie the knots at precise ritual moments, invoking the ancestral spirits with each one. The defixio tradition influences my work as well: I inscribe the binding intention onto sacred materials that anchor the spell in the physical and spiritual realms simultaneously. The result is a bond that holds with the weight of ancestral authority behind it. This is not guesswork or superstition — it is a disciplined spiritual technology that has produced consistent results for my clients for over 13 years.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      whoNeedsSection={[
        "Your partner is pulling away or losing interest without explanation",
        "You suspect infidelity and want to bind your lover's loyalty to you",
        "Someone you love is being influenced by others against you",
        "A rival is trying to steal your partner and you need to stop them",
        "You need commitment and fidelity from someone who resists giving it",
        "An enemy is sending spiritual attacks against you or your family",
        "A business partner is wavering on a commitment that affects your future",
        "You want to secure a relationship before it falls apart completely",
      ]}
      processSteps={[
        "Contact and Spiritual Assessment — You reach out to me via WhatsApp and describe your situation in full detail — the person you want to bind, the nature of the relationship, and the threats to the bond. I perform a spiritual reading to assess the strength of the existing connection, the forces working against it, and whether a binding spell is the right approach. I tell you honestly what is achievable and what to expect.",
        "Consultation and Ritual Design — Based on the reading, I design the specific binding ritual for your situation. I select the cord materials, knot patterns, herbs, candle colors, and ancestral prayers that correspond to your unique bond. I determine whether the binding requires knot magic in the West African Vodun tradition, a katadesmos-style inscription, or an ancestral binding ceremony — or a combination of all three. Every element is chosen with precision.",
        "Binding Ritual Performance — I perform the binding ritual in sacred space, tying the spiritual knots that hold your bond in place. Each knot is tied with an invocation to the ancestral spirits, calling them to witness and enforce the binding. The ritual is performed with full authority and the weight of decades of proven practice. You do not need to be physically present — spiritual work transcends distance. The binding takes hold as the knots are tied and the ancestral covenant is sealed.",
        "Results Secured and Follow-Up — After the ritual, I monitor the spiritual progress through follow-up readings. I confirm that the binding has taken hold and that the energy is holding as intended. If reinforcement is needed, I perform it. You receive clear guidance on what signs to watch for and when to expect the full manifestation of the binding. I remain available until the work is complete and the bond is secured.",
      ]}
      whatToExpect={[
        {
          _type: "block",
          _key: "bs-we-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "bs-we-s1",
              text: `When you contact me, you receive a response within hours. The first conversation is a spiritual assessment where I read the energy around your bond and identify the threats to it. If you proceed, the binding ritual is performed within 24 to 48 hours. For relationship bindings — loyalty, faithfulness, commitment — results typically manifest within 7 to 21 days. You will notice your partner becoming more attentive, more focused on you, and less influenced by outside forces. Coldness and distance dissolve. The wandering eye stops wandering. For protective bindings — binding an enemy's power or locking out spiritual attacks — the effect is immediate. You feel the shift as soon as the ritual is complete: the pressure lifts, the attacks cease, the threat neutralizes. Client reports consistently describe three signs of a successful binding: the target person becomes noticeably more committed and present, outside influences lose their grip on the relationship, and the bond deepens beyond what it was before the trouble started. Follow-up support is included, and I stay with you until the binding is fully secured.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      testimonials={[
        {
          name: "Dorcas A.",
          location: "Nigeria",
          quote: `My husband was spending more and more time away from home. I knew someone was pulling him. After ${clientTitle} ${clientName}'s binding spell, he stopped going out, became more loving than he had been in years, and the other woman disappeared from his life. The bond is strong again.`,
          rating: 5,
        },
        {
          name: "Samuel R.",
          location: "Tanzania",
          quote: "A business partner was about to break our agreement and side with a competitor. I contacted Prof. Ndaula for a binding spell. Within one week, my partner recommitted fully and the deal went through. The binding held and so did our partnership.",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "Do binding spells really work?",
          answer: [
            {
              _type: "block",
              _key: "bs-faq1",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "bs-faq1-s",
                  text: "Yes. Binding spells are one of the most documented and practiced forms of spiritual work across human history — from the ancient Greek katadesmos tablets found in archaeological sites across the Mediterranean to the knot magic traditions of West African Vodun practiced for centuries. When performed by a healer with genuine spiritual authority and deep knowledge of the binding traditions, the results are consistent and verifiable. I have performed thousands of binding spells with confirmed results over 13 years of practice.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Is a binding spell the same as a love spell?",
          answer: [
            {
              _type: "block",
              _key: "bs-faq2",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "bs-faq2-s",
                  text: "No. A love spell draws love toward you — it attracts, awakens, or rekindles romantic feelings. A binding spell secures what is already there — it locks loyalty in place, prevents a bond from breaking, and holds a commitment so it cannot drift. Love spells open the door; binding spells lock it shut. Many clients benefit from both — a love spell to draw the person and a binding spell to keep them. I advise you on which approach your situation requires during the consultation.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can a binding spell make someone stay who wants to leave?",
          answer: [
            {
              _type: "block",
              _key: "bs-faq3",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "bs-faq3-s",
                  text: "A binding spell strengthens the bond that already exists between two people and secures it against forces trying to break it. If the person genuinely wants to leave and there is no real spiritual connection remaining, the binding holds less firmly. But in most cases where someone is pulling away, the bond still exists — it is being weakened by outside interference, temptation, or spiritual attack. The binding restores and reinforces what was already there. I assess this honestly during the spiritual reading before any work is done.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "How long does a binding spell last?",
          answer: [
            {
              _type: "block",
              _key: "bs-faq4",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "bs-faq4-s",
                  text: "A properly performed binding spell by a powerful healer is long-lasting. Most relationship bindings hold for years — many hold permanently. The duration depends on the strength of the original bond and the severity of the forces working against it. If the threat level increases — for example, a new rival appears or a stronger spiritual attack is launched — the binding may need reinforcement. I advise you on what to expect during the consultation and I remain available for reinforcement if needed.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Is binding someone against their will ethical?",
          answer: [
            {
              _type: "block",
              _key: "bs-faq5",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "bs-faq5-s",
                  text: "Binding spells do not override free will — they secure and reinforce bonds that already exist. When two people share a genuine connection and that bond is being threatened by outside forces — infidelity, spiritual interference, manipulation by others — the binding protects what is rightfully there. In the West African Vodun and ancestral healing traditions, binding is understood as a form of spiritual preservation: keeping what is whole from being broken. I never perform binding work where the spirits indicate no genuine bond exists. The ancestral reading determines whether the binding is justified before any ritual is performed.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
      ]}
      relatedServices={[
        { title: "Love Spells", href: "/love-spells/" },
        { title: "Protection Spells", href: "/protection-spells/" },
      ]}
      conversionCopy={{
        heading: "Do Not Let What Is Yours Slip Away. Bind It Now.",
        body: `If your lover is drifting, if loyalty is breaking, if someone is pulling what belongs to you away — the time to act is now. Binding spells hold what must not be lost. Contact ${clientTitle} ${clientName} today for a confidential consultation and let the ancestral binding work begin. Free consultation available now.`,
      }}
    />
  );
}
