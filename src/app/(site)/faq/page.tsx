"use client";

import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { useState } from "react";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256788546704";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

const faqs = [
  {
    question: "Do voodoo spells really work?",
    answer: "Yes, voodoo spells are real and effective when performed by a genuine, experienced practitioner with proper spiritual authority. Voodoo is not a parlor trick or a superstition — it is an ancient spiritual system with roots in West African Vodun, practiced for thousands of years. The effectiveness of a spell depends on the healer's lineage, experience, spiritual connection, and the specific circumstances of the client's situation. Spells cast by someone with inherited spiritual authority — as opposed to someone who merely read about it — carry significantly more power. That said, results can vary depending on the complexity of the situation, the openness of the client, and the spiritual forces involved. No legitimate healer will guarantee a specific outcome with absolute certainty, but a skilled practitioner can achieve remarkable results in the vast majority of cases.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary depending on the type of spiritual work, the complexity of the situation, and the spiritual forces involved. Some clients report noticeable shifts within days — particularly with cleansing and protection work. Love spells and relationship work typically show results within one to three weeks. More complex situations, such as generational curse removal or long-standing spiritual attacks, may require multiple sessions and can take several weeks to fully resolve. During your initial consultation, you will receive an honest and realistic assessment of the expected timeline for your specific situation. It is important to understand that spiritual work is not instant — it unfolds according to natural spiritual laws. However, most clients begin to feel or observe changes within the first week after a ritual is performed.",
  },
  {
    question: "What is the difference between voodoo and witchcraft?",
    answer: "Voodoo and witchcraft are often confused, but they are fundamentally different spiritual systems. Voodoo — more accurately Vodun — originates from West Africa and is a structured, theologically rich religion with a pantheon of spirits (loa or orisha), priesthood, sacred rituals, and moral codes. It is a complete spiritual tradition with deep cultural and ancestral roots. Witchcraft, on the other hand, is a broader and more general term that refers to the practice of magical or supernatural arts, and it spans many different cultures and traditions — from European folk magic to Wicca to various indigenous practices. A voodoo practitioner works within a specific ancestral and spiritual framework, invoking established spirits and following ancient protocols. A witch may work independently, drawing from various traditions. Both can be powerful, but voodoo carries the weight and authority of an unbroken lineage stretching back thousands of years.",
  },
  {
    question: "Is voodoo evil or dangerous?",
    answer: "Voodoo itself is not evil or inherently dangerous. This misconception stems from centuries of colonial misrepresentation, Hollywood sensationalism, and cultural misunderstanding. Authentic Vodun is a spiritual practice centered on harmony, balance, healing, and communion with the divine. Like any powerful tool, it can be used for different purposes — just as medicine can heal or harm depending on the practitioner's intent. A legitimate healer uses voodoo for restoration, protection, and positive transformation. The danger lies not in the practice itself but in working with unqualified or unethical practitioners who lack proper training and spiritual authority. When performed by someone with genuine lineage and moral integrity, voodoo is a force for profound good. It has healed relationships, removed curses, protected families, and brought prosperity to countless people across the world.",
  },
  {
    question: "Can you cast a spell without the other person knowing?",
    answer: "Yes, most spiritual work does not require the other person's knowledge or consent. Love spells, protection spells, binding rituals, and curse removal can all be performed remotely without the target being aware. This is one of the fundamental principles of distance spiritual work — energy transcends physical boundaries and does not require the recipient's conscious participation. However, ethical considerations are important. A responsible healer will assess whether a particular spell is appropriate and will not perform work intended to cause genuine harm. The goal of spiritual practice is healing and restoration, not manipulation for its own sake. During your consultation, the healer will discuss what is possible and what is advisable in your specific situation, always with respect for spiritual law and moral boundaries.",
  },
  {
    question: "Is the initial consultation really free?",
    answer: "Yes, the initial consultation is completely free with no obligation and no hidden costs. This is not a trick or a pressure tactic — it is a genuine offer rooted in the belief that everyone deserves honest spiritual guidance before making any commitment. During the consultation, you will describe your situation, receive a spiritual assessment, and learn what can be done. If spiritual work is recommended, you will be told the cost upfront with full transparency. You are entirely free to decline and walk away at any point. The free consultation exists because many people are understandably cautious about spiritual services, and the healer believes that the quality of the work should speak for itself. There is no pressure to proceed, no aggressive upselling, and no obligation of any kind.",
  },
  {
    question: "Is everything strictly confidential?",
    answer: "Absolutely. Confidentiality is not merely a policy — it is a sacred obligation. Everything you share during a consultation, every detail of your situation, and all information about any spiritual work performed on your behalf is held in the strictest confidence. No information is ever shared with third parties, discussed with other clients, stored in insecure systems, or used for any purpose beyond your healing. This commitment to privacy is rooted in both professional ethics and spiritual law. In traditional healing practice, breaking confidentiality is considered a grave violation that carries spiritual consequences. Your identity, your situation, and the nature of the work performed remain entirely between you and the healer. Many clients are public figures, business owners, or individuals in sensitive positions, and their privacy has never been compromised.",
  },
  {
    question: "Can you help people who are not in Uganda?",
    answer: "Yes, absolutely. The majority of clients are not physically present in Uganda, and distance is no barrier to effective spiritual work. Spiritual energy operates beyond physical boundaries — a ritual performed in Kampala can be just as powerful for someone in London, Dubai, Toronto, or Sydney as it is for someone sitting in the same room. This is not a modern innovation; distance healing has been part of traditional African spiritual practice for centuries. Ancestors and spirits do not respect geographic borders. The healer has successfully worked with clients across Africa, Europe, North America, the Middle East, Asia, and Australia. All that is required is your willingness to engage, your honest description of the situation, and your openness to the spiritual process.",
  },
  {
    question: "Do I need to be in the same location as the healer?",
    answer: "No, you do not need to be in the same location as the healer, and most clients never are. Distance spiritual work is the norm, not the exception. The healer performs rituals, castings, and cleansings on your behalf from the sacred space in Uganda, and the spiritual energy reaches you wherever you are in the world. You do not need to be present, awake, or performing any action at the time of the ritual. The healer will communicate with you before and after the work to explain what was done and what to expect. In rare cases where in-person work is beneficial — such as a property cleansing — alternative arrangements can be discussed, but for the vast majority of situations, remote work is equally effective and far more convenient.",
  },
  {
    question: "How does love spell casting work?",
    answer: "Love spell casting works by directing spiritual energy toward influencing the emotions, thoughts, and spiritual connection between two people. The process begins with a thorough consultation to understand the specifics of your situation — the nature of the relationship, what went wrong, and what outcome you desire. Based on this assessment, the healer selects the appropriate ritual, invokes the relevant spirits, and performs the casting using traditional materials such as herbs, roots, sacred oils, and symbolic objects tied to the individuals involved. The spiritual energy then works to reopen the channels of affection, dissolve negative influences that may be blocking the relationship, and draw the two people back into alignment. Love spells are most effective when there was a genuine connection to begin with — they amplify and restore what was real, rather than creating something from nothing. Results typically manifest within one to three weeks.",
  },
  {
    question: "What is a generational curse and how is it removed?",
    answer: "A generational curse is a spiritual affliction that passes down through a family bloodline, affecting multiple generations with recurring patterns of misfortune, illness, relationship failure, financial ruin, or spiritual oppression. These curses originate from various sources — ancestral transgressions, pacts made by forebears, spiritual attacks targeting a bloodline, or unresolved spiritual debt. The effects can be devastating and persistent, creating a sense that no matter what a person does, the same negative outcomes repeat. Removing a generational curse requires a deep spiritual diagnosis to identify the origin and nature of the curse, followed by specific rituals designed to sever the spiritual chain and cleanse the bloodline. This often involves ancestral communication, sacrificial offerings, protective sealings, and repeated cleansing over multiple sessions. The process is more involved than a standard curse removal, but it is entirely possible with the right spiritual authority and experience.",
  },
  {
    question: "How do I know if I have a curse on me?",
    answer: "There are several common signs that may indicate the presence of a curse or spiritual attack: persistent bad luck that defies logical explanation, recurring health problems that doctors cannot diagnose, sudden and unexplained financial collapse, a string of failed relationships with no clear cause, vivid and disturbing nightmares, a persistent feeling of heaviness or oppression, unexplained fear or anxiety, things breaking or malfunctioning around you with unusual frequency, and a sense that something invisible is working against you. While any single symptom could have a mundane explanation, when multiple signs appear together and persist despite your best efforts to resolve them through conventional means, it often indicates a spiritual dimension to the problem. The only way to know for certain is through a spiritual assessment by a genuine practitioner, who can read the energies surrounding you and determine whether a curse, hex, or spiritual attack is present.",
  },
  {
    question: "What is the success rate of your spells?",
    answer: "While no spiritual practitioner can ethically claim a one hundred percent success rate — spiritual work involves variables beyond anyone's absolute control — the vast majority of clients experience meaningful, often dramatic results. Based on years of practice and client feedback, the success rate for most types of work — love spells, protection, cleansing, and prosperity rituals — is very high. The key factors that influence success include the accuracy of the spiritual diagnosis, the skill and authority of the healer, the complexity of the situation, and the client's openness to the process. Situations involving deep generational curses or complex spiritual attacks may require more time and multiple sessions, but even these challenging cases show significant improvement in most instances. The healer will always give you an honest assessment of the likelihood of success during your consultation, rather than making promises that cannot be kept.",
  },
  {
    question: "Do you use black magic?",
    answer: "The terms 'black magic' and 'white magic' are Western constructs that do not accurately describe traditional African spiritual practice. In the healer's tradition, spiritual work is evaluated by its purpose and effect, not by a simplistic color-coded system. The practice includes rituals for healing, protection, restoration, and positive transformation — work that brings balance and resolves suffering. The healer does not perform work intended to cause unjustified harm, innocent suffering, or spiritual destruction. However, protective and binding work — which some might label as 'dark' — is entirely appropriate when defending against spiritual attacks, removing curses, or stopping someone who is causing harm. The distinction that matters is not the label but the intent: is the work serving healing and justice, or is it serving malice and destruction? This practice serves the former.",
  },
  {
    question: "How much does it cost?",
    answer: "The cost of spiritual work varies depending on the type and complexity of the service required. Simple consultations are free. More involved work — such as love spells, protection rituals, or spiritual cleansings — has different fee levels based on the materials required, the duration of the ritual, and the spiritual intensity involved. During your free consultation, you will receive a clear and transparent quote for any recommended work before you make any commitment. There are no hidden fees, no surprise charges, and no pressure to proceed. If cost is a barrier, mention it during the consultation — the healer believes that spiritual help should not be reserved only for those who can afford premium rates, and arrangements can sometimes be made. The initial consultation is always free, and you owe nothing if you choose not to proceed.",
  },
  {
    question: "How do I pay for services?",
    answer: "Payment can be made through several methods including bank transfer, mobile money (MTN Mobile Money, Airtel Money), Western Union, MoneyGram, and other international remittance services. The specific payment options will be discussed during your consultation based on your location and preference. Payment is typically required before the spiritual work begins, as the materials, offerings, and preparations must be arranged in advance. In some cases, partial payment may be accepted with the remainder due upon completion. Full details and receipts are provided for every transaction. The healer operates with complete financial transparency — you will always know exactly what you are paying for and why. No additional charges will ever be added without your prior knowledge and agreement.",
  },
  {
    question: "Can spells be reversed if needed?",
    answer: "Yes, most spells and spiritual work can be reversed or undone if circumstances change or if you no longer desire the effects. Reversal involves specific counter-rituals that neutralize or dissolve the spiritual energy that was originally cast. The process and complexity of reversal depend on the type of spell, how long it has been active, and the spiritual forces involved. Simple spells can often be reversed quickly, while more complex or long-standing work may require a more involved process. It is important to communicate with the healer as soon as possible if you wish to reverse a spell, as the sooner the reversal is performed, the cleaner and more effective it tends to be. This is another reason why working with a legitimate practitioner is essential — they have the knowledge and authority both to cast and to reverse, whereas an unqualified practitioner may not be able to undo what they have done.",
  },
  {
    question: "What is traditional healing and how is it different from Western medicine?",
    answer: "Traditional healing is an ancient system of spiritual, herbal, and energetic practice that addresses the root spiritual causes of suffering, rather than merely treating physical symptoms. While Western medicine excels at diagnosing and treating physiological conditions through surgery, pharmaceuticals, and evidence-based protocols, it does not address the spiritual dimension of human experience. Traditional healing operates on the understanding that many problems — recurring misfortune, relationship failures, unexplained illness, emotional distress — have spiritual roots that cannot be resolved through physical means alone. A traditional healer works with ancestral spirits, natural forces, and sacred rituals to identify and remove these spiritual blockages. The two systems are not enemies — they are complementary. Many clients seek traditional healing after conventional approaches have failed to resolve their problems, finding that the spiritual dimension was the missing piece all along.",
  },
  {
    question: "Are your services backed by any spiritual lineage or tradition?",
    answer: "Yes. This practice is rooted in an unbroken ancestral lineage of traditional healers from Uganda, East Africa. The spiritual authority carried by the healer is not self-appointed or acquired through casual study — it was inherited through bloodline and validated through years of rigorous training under elder practitioners within the family tradition. This lineage carries specific spiritual permissions, ancestral endorsements, and sacred obligations that cannot be obtained through books or short courses. The training involved mastery of herbal medicine, ritual casting, spiritual diagnosis, ancestral communication, and the ethical responsibilities of the healer's role. This inherited authority is what distinguishes a genuine traditional healer from someone who has simply learned techniques. It is the difference between a licensed physician and someone who has read a medical textbook. The lineage ensures that the spiritual power behind the work is authentic, sanctioned, and effective.",
  },
  {
    question: "I am skeptical — should I still reach out?",
    answer: "Absolutely. Skepticism is natural, healthy, and entirely understandable — especially given the number of fraudulent practitioners and the sensationalized portrayal of spiritual healing in popular culture. The healer welcomes skeptics because healthy skepticism indicates intelligence and discernment, qualities that actually serve the spiritual process well. You do not need to believe in order for the work to be effective — you simply need to be open enough to describe your situation honestly and allow the process to unfold. Many of the most dramatic success stories come from clients who were deeply skeptical at the outset but reached out as a last resort when nothing else had worked. The free consultation carries no risk and no obligation — you can speak your mind, ask difficult questions, and decide for yourself whether what you hear resonates. The healer would rather work with an honest skeptic than someone who professes blind faith. Your doubt will not diminish the power of the work.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappUrl = `https://wa.me/${clientWhatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I have a question not covered in your FAQ.`)}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              Questions &amp; Answers
            </p>
            <h1>
              Frequently Asked Questions About Voodoo, Spells &amp; Spiritual Healing
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--color-text-secondary)]">
              Honest answers to the questions people ask most. If your question is not here, reach out directly — no question is too strange or too small.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                open={openIndex === i}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    setOpenIndex(i);
                  } else if (openIndex === i) {
                    setOpenIndex(null);
                  }
                }}
                className="group rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-gold-dim)]/20 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-lg font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] transition-colors hover:text-[var(--color-gold-primary)] list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-[var(--color-gold-primary)] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-20 rounded-2xl bg-[var(--color-bg-surface)] border border-[var(--color-gold-dim)]/20 p-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              Still Have Questions?
            </p>
            <h2>Ask Directly</h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              No question is too unusual or too personal. {clientTitle} {clientName} is available to answer anything — honestly and confidentially.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-white transition-all hover:brightness-110 animate-pulse-whatsapp"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                WhatsApp Now
              </a>
              <Link
                href="/consultation"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[var(--color-gold-primary)] px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--color-gold-primary)] transition-all hover:bg-[var(--color-gold-primary)] hover:text-[var(--color-bg-deepnight)]"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
