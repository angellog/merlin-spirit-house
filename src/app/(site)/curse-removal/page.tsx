import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";

export function generateMetadata(): Metadata {
  return {
    title: "Curse Removal & Hex Breaking | Break Generational Curses | Prof. Ndaula",
    description:
      "Curse removal and hex breaking to break generational curses and spiritual bondage permanently. Free consultation with Prof. Ndaula. WhatsApp +256788546704",
    keywords: [
      "curse removal",
      "hex breaking",
      "generational curse",
      "break a curse",
      "curse cleanser",
    ],
    alternates: { canonical: "/curse-removal/" },
  };
}

export default function CurseRemovalPage() {
  const clientName = CLIENT_NAME;
  const clientTitle = CLIENT_TITLE;

  return (
    <ServicePageTemplate
      title="Curse Removal"
      heroImage="/images/services/curse-removal.jpg"
      seoH1="Curse Removal & Hex Breaking — Break Free from Spiritual Bondage Forever"
      subheading="What was placed upon you by darkness, I remove by the authority of the ancestors."
      leadParagraph={`I am ${clientTitle} ${clientName}, and for over 25 years I have broken curses that other healers declared unbreakable. A curse is a deliberate spiritual attack — a concentrated charge of negative energy directed at you by someone with the knowledge and intent to cause harm. Curses affect every dimension of your life: your health, your relationships, your finances, your peace of mind, and even the lives of your children. Some curses are recent and targeted; others are generational, passed down through a bloodline like an invisible inheritance of suffering. Whatever its origin, a curse does not expire on its own — it must be broken by someone with greater spiritual authority than the one who placed it. I carry that authority. I was trained through a lineage of practitioners who specialized in curse removal, and I have dismantled the most powerful and deeply rooted spiritual attacks across dozens of countries. When I break a curse, it stays broken, and I seal the channels so it can never return.`}
      whatsappPreFill={`Hello%20${clientTitle}%20${clientName}%2C%20I%20think%20I%20am%20cursed%20and%20need%20help`}
      icon="⊘"
      whatIsSection={[
        {
          _type: "block",
          _key: "cr-wi-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "cr-wi-s1",
              text: "A curse is a deliberate spiritual attack — a concentrated charge of negative energy directed at you by someone with the knowledge and intent to cause harm. Curses affect every dimension of your life: your health, your relationships, your finances, your peace of mind, and even the lives of your children. Some curses are recent and targeted; others are generational, passed down through a bloodline like an invisible inheritance of suffering. Whatever its origin, a curse does not expire on its own. It must be broken by someone with greater spiritual authority than the one who placed it. Curse removal is one of the most demanding and critical forms of spiritual work in the West African Vodun and ancestral healing traditions, and it requires a practitioner who carries genuine lineage and power.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "cr-wi-2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "cr-wi-s2",
              text: "Once a curse is identified, the removal ritual is tailored to counteract it precisely. Different curses require different methods rooted in ancestral healing and herbal medicine: some are broken through fire rituals that burn away the spiritual attachment, others through herbal cleansings that purify the body and spirit, and still others through ancestral intervention that overrides the curse at its source. Generational curses often require the most intensive work, as the spiritual debt has compounded over generations and must be settled layer by layer. The result, when the work is complete, is total freedom — a lightness and clarity that clients describe as being reborn.",
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      whoNeedsSection={[
        "Your family has suffered the same pattern of misfortune for generations",
        "You have been told by someone that they cursed you and your life collapsed after",
        "Your life was going well and then suddenly collapsed without any logical explanation",
        "You experience recurring health problems that no doctor can diagnose or cure",
        "You have nightmares about being attacked, choked, or pursued by dark figures",
        "You feel a heavy, oppressive energy that follows you everywhere and will not lift",
        "Your relationships keep failing in the exact same way every single time",
        "You have visited other healers who confirmed a curse but could not remove it",
      ]}
      processSteps={[
        "Comprehensive Curse Reading and Mapping — You contact me and describe your symptoms and any information you have about who might have cursed you. I perform a deep spiritual reading to determine the nature of the curse, its source, how long it has been in place, and whether it is a single curse or a layered attack. Some curses are straightforward — a single hex placed by a jealous rival. Others are complex — a network of spiritual bindings placed over years by multiple enemies. The reading reveals all of this before any work begins.",
        "Removal Protocol Design — Based on the reading, I design a removal protocol tailored to the specific curse. I determine which rituals are needed: fire rituals for burning away spiritual attachments, herbal cleansings for purifying the body and spirit, ancestral intervention for overriding the curse at its source, or a combination. For generational curses, I map out the layer-by-layer approach required to settle the accumulated spiritual debt. Each ritual is planned with precision.",
        "Layer-by-Layer Curse Removal — I perform the removal rituals in sequence, each one stripping away a layer of the spiritual bondage. Between sessions, I monitor your progress through follow-up readings to confirm each layer has been fully removed before proceeding to the next. Rushing this process is dangerous — each layer must be cleared completely before the next is addressed. For simple recent curses, a single session suffices. For layered or generational curses, multiple sessions over two to four weeks are required.",
        "Sealing and Protection Installation — When the final layer of the curse is removed, I perform a sealing ritual that closes the channels the curse used to attach to you. I then install spiritual protection to prevent the curse from being re-attached or replaced by a new one. You are not just freed — you are shielded. I also provide guidance on maintaining your spiritual hygiene to ensure the freedom is permanent. Follow-up readings confirm the curse is completely gone.",
      ]}
      whatToExpect={[
        {
          _type: "block",
          _key: "cr-we-1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "cr-we-s1",
              text: `When you contact me, you are asked to describe your symptoms and any information about who might have cursed you. I perform a reading — often within hours — to confirm the curse and assess its nature. You receive an honest report of what was found and a clear plan for removal. The first cleansing ritual takes place within 24 to 48 hours. Most clients feel an immediate reduction in the heaviness and oppression they have been carrying. Client reports consistently describe three signs of curse removal taking effect: the persistent feeling of spiritual weight lifts and is replaced by lightness and clarity, the pattern of unexplained misfortune breaks and life begins to flow again, and physical symptoms that resisted medical treatment begin to ease. Full removal of a simple curse is accomplished in a single session; generational or layered curses require several sessions over two to four weeks. Throughout the process, I provide support, guidance, and reassurance. You are not alone in this fight.`,
              marks: [],
            },
          ],
          markDefs: [],
        },
      ]}
      testimonials={[
        {
          name: "Janet M.",
          location: "South Africa",
          quote: `Three generations of women in my family could never keep a husband. After ${clientTitle} ${clientName} broke the generational curse, I met someone genuine and we have been happily married for two years. The cycle is finally broken.`,
          rating: 5,
        },
        {
          name: "Robert C.",
          location: "United Kingdom",
          quote: "My ex told me she had cursed me and laughed about it. Within months, everything fell apart — my job, my health, my relationships. After the curse removal, my life turned around so fast it made my head spin. I am free now.",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "How do I know if I am cursed?",
          answer: [
            {
              _type: "block",
              _key: "cr-faq1",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "cr-faq1-s",
                  text: "Common signs include a sudden and unexplained collapse of multiple areas of your life simultaneously, recurring nightmares of being attacked, a persistent feeling of heaviness or oppression, health problems that doctors cannot explain, and a sense that something invisible is actively working against you. If these symptoms appeared suddenly and persist despite your best efforts, a spiritual reading confirms whether a curse is the cause.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can a curse be passed down through generations?",
          answer: [
            {
              _type: "block",
              _key: "cr-faq2",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "cr-faq2-s",
                  text: "Yes. Generational curses are among the most common and destructive types. They manifest as recurring patterns of misfortune within a family — every generation suffers the same types of failure, illness, or loss. These curses are usually placed on an ancestor and descend through the bloodline until someone with spiritual authority breaks them permanently. I specialize in this work.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "What happens after a curse is removed?",
          answer: [
            {
              _type: "block",
              _key: "cr-faq3",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "cr-faq3-s",
                  text: "Most clients experience an immediate sense of relief, lightness, and clarity. The oppressive symptoms begin to lift within days. Life starts to flow again — opportunities return, health improves, relationships mend. I also install protection after the removal to prevent the curse from being re-attached or replaced. You are not just freed; you are shielded.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Can the person who cursed me just curse me again?",
          answer: [
            {
              _type: "block",
              _key: "cr-faq4",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "cr-faq4-s",
                  text: "Without protection, yes. That is why I always install a spiritual shield after removing a curse. This shield makes it increasingly difficult — and eventually impossible — for the same person to curse you again. If the enemy is persistent, I also perform a reflecting spell that sends any future attacks back to the sender, which discourages further attempts permanently.",
                  marks: [],
                },
              ],
              markDefs: [],
            },
          ],
        },
        {
          question: "Why could other healers not remove my curse?",
          answer: [
            {
              _type: "block",
              _key: "cr-faq5",
              style: "normal",
              children: [
                {
                  _type: "span",
                  _key: "cr-faq5-s",
                  text: "Not all practitioners carry the same level of spiritual authority. A curse placed by a powerful practitioner requires a healer with greater power to remove it. Additionally, some curses are layered or hidden — if a healer does not perform a thorough reading, they remove one layer while leaving deeper layers intact. I perform a complete diagnostic reading before any removal work, ensuring every layer is identified and dismantled. My lineage specializes in exactly this kind of work.",
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
        { title: "Traditional Healing", href: "/traditional-healing/" },
      ]}
      conversionCopy={{
        heading: "You Were Not Born to Suffer. Freedom Is Possible Today.",
        body: `If you suspect you are cursed, do not wait. Curses do not fade with time — they strengthen. The longer you carry this burden, the deeper it roots and the harder it becomes to remove. Reach out now for a confidential reading with ${clientTitle} ${clientName}. If a curse is found, I break it — completely, permanently, and with the full authority of the ancestral spirits. You deserve to be free. Free consultation available.`,
      }}
    />
  );
}
