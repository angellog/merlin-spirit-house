const API_VERSION = "v2021-06-07"

function pt(key: string, text: string) {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    children: [{ _type: "span", _key: `${key}-0`, text, marks: [] }],
    markDefs: [],
  }
}

function slug(current: string) {
  return { _type: "slug", current }
}

function ref(id: string, key: string) {
  return { _type: "reference", _ref: id, _key: key }
}

async function sanityMutate(
  projectId: string,
  dataset: string,
  token: string,
  mutations: Record<string, unknown>[],
) {
  const url = `https://${projectId}.api.sanity.io/${API_VERSION}/data/mutate/${dataset}`
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ mutations }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Sanity API ${res.status}: ${err}`)
  }
  return res.json()
}

async function main() {
  const projectId = process.env.SANITY_PROJECT_ID || process.argv[2]
  const dataset = process.env.SANITY_DATASET || process.argv[3] || "production"
  const token = process.env.SANITY_API_TOKEN || process.argv[4]

  if (!projectId || !token) {
    console.error(
      "Usage: npx tsx src/sanity/seed.ts <projectId> [dataset] <token>",
    )
    console.error(
      "Or set SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN env vars",
    )
    process.exit(1)
  }

  const run = (mutations: Record<string, unknown>[]) =>
    sanityMutate(projectId, dataset, token, mutations)

  console.log("Seeding Sanity project:", projectId, "dataset:", dataset)

  const T = "Prof."
  const N = "Prof. Ndaula"

  console.log("1/7 — siteSettings...")
  await run([
    {
      createOrReplace: {
        _id: "siteSettings",
        _type: "siteSettings",
        clientName: "Prof. Ndaula",
        clientTitle: "Prof.",
        clientWhatsapp: "+256788546704",
        clientEmail: "contact@merlinspirithouse.com",
        clientLocation: "Kampala, Uganda",
        clientYears: 13,
        clientDomain: "merlinspirithouse.com",
        clientTagline: "Ancient Power. Real Results.",
        clientOrigin: [
          pt(
            "origin-1",
            "Born into a lineage of traditional healers stretching back generations, Prof. Ndaula received ancestral gifts that most cannot learn from books. From a young age, the spirits called — and the calling could not be ignored.",
          ),
          pt(
            "origin-2",
            "Initiated under the guidance of elder practitioners within the family tradition, Prof. Ndaula spent years mastering herbal medicine, ritual casting, spiritual diagnosis, and ancestral communication. This inherited authority is what distinguishes a genuine traditional healer from someone who has simply learned techniques.",
          ),
        ],
        ga4Id: "",
        socialLinks: {
          facebook: "",
          instagram: "",
          youtube: "",
          tikTok: "",
          telegram: "",
        },
        disclaimerText:
          "Spiritual services are offered for guidance and spiritual balance. Results may vary. No specific outcome is guaranteed.",
        jivoWidgetId: "",
        jivoProactiveMessage:
          "Whatever you're going through, you don't have to face it alone. Chat now — it's free and confidential.",
        jivoEnabled: true,
      },
    },
  ])

  console.log("2/7 — consultation...")
  await run([
    {
      createOrReplace: {
        _id: "consultation",
        _type: "consultation",
        heroCopy: "Book a Private Consultation — It's Free",
        whatHappensCopy: [
          pt(
            "whc-1",
            "When you reach out, you will be heard without judgment. The first conversation is a spiritual assessment where the healer reads the energy around your situation and determines whether spiritual work can help you.",
          ),
          pt(
            "whc-2",
            "You will be told honestly what is possible and what is not. If the healer determines that your situation can be helped, you will receive a clear explanation of what the work involves, how long it may take, and what to expect.",
          ),
          pt(
            "whc-3",
            "There is no pressure to proceed. You are free to take the information and make your own decision. If you choose to move forward, the work begins immediately.",
          ),
        ],
        whatYouLearn: [
          "Whether your situation has a spiritual root cause",
          "What type of spiritual work — if any — is appropriate",
          "A realistic timeline for results",
          "The exact cost before you commit to anything",
          "Whether distance healing is suitable for your case",
        ],
        privacyGuarantee: [
          pt(
            "pg-1",
            "Everything you share is held in complete confidence. Your name, your situation, and the nature of any work performed remain entirely between you and the healer. Confidentiality is not merely a policy — it is a sacred obligation rooted in both professional ethics and spiritual law.",
          ),
        ],
        guaranteeCopy:
          "If you are unsatisfied with the initial consultation, you owe nothing.",
        responseTimeText: "Typically responds within 1 hour",
        availabilityText: "Available 24 hours a day, 7 days a week",
      },
    },
  ])

  console.log("3/7 — person...")
  await run([
    {
      createOrReplace: {
        _id: "person-prof-amara-kato",
        _type: "person",
        name: "Prof. Ndaula",
        title: "Prof.",
        slug: slug("prof-amara-kato"),
        bio: [
          pt(
            "bio-1",
            `Born into a lineage of traditional healers stretching back generations, ${T} ${N} received ancestral gifts that most cannot learn from books. Over 13 years, clients from Uganda, Kenya, South Africa, the UK, the USA, and beyond have sought guidance — and found it.`,
          ),
          pt(
            "bio-2",
            `The spiritual authority carried by ${T} ${N} is not self-appointed — it was inherited through bloodline and validated through years of rigorous training under elder practitioners within the family tradition. This lineage carries specific spiritual permissions, ancestral endorsements, and sacred obligations that cannot be obtained through books or short courses.`,
          ),
        ],
        yearsExperience: 25,
      },
    },
  ])

  console.log("4/7 — categories...")
  const categoriesData = [
    {
      _id: "cat-haitian-vodou",
      title: "Haitian Vodou",
      s: "haitian-vodou",
      focus: "Haitian Vodou tradition, loa spirits, Erzulie, Papa Legba, rituals",
    },
    {
      _id: "cat-west-african-vodun",
      title: "West African Vodun",
      s: "west-african-vodun",
      focus: "Origins in Benin/Togo/Ghana, Fa divination, Legba, Mawu-Lisa",
    },
    {
      _id: "cat-hoodoo",
      title: "Hoodoo",
      s: "hoodoo",
      focus: "American folk magic, rootwork, conjure, gris-gris, candle magic",
    },
    {
      _id: "cat-louisiana-voodoo",
      title: "Louisiana Voodoo",
      s: "louisiana-voodoo",
      focus: "New Orleans Voodoo, Marie Laveau tradition, spiritual baths, mojo bags",
    },
    {
      _id: "cat-love-spells",
      title: "Love Spells",
      s: "love-spells",
      focus: "How love spells work, different types, what to expect, FAQs",
    },
    {
      _id: "cat-traditional-healing",
      title: "Traditional Healing",
      s: "traditional-healing",
      focus: "African traditional medicine, herbs, ancestral connection",
    },
    {
      _id: "cat-spirit-world",
      title: "Spirit World",
      s: "spirit-world",
      focus: "Spirit possession, ancestral spirits, communication with spirits",
    },
    {
      _id: "cat-money-prosperity",
      title: "Money and Prosperity",
      s: "money-and-prosperity",
      focus: "Wealth rituals, financial blockages, business blessing",
    },
  ]
  await run(
    categoriesData.map((c) => ({
      createOrReplace: {
        _id: c._id,
        _type: "category",
        title: c.title,
        slug: slug(c.s),
        focus: c.focus,
      },
    })),
  )

  const SVC = {
    loveSpells: "svc-love-spells",
    voodooSpells: "svc-voodoo-spells",
    moneySpells: "svc-money-spells",
    protectionSpells: "svc-protection-spells",
    traditionalHealing: "svc-traditional-healing",
    curseRemoval: "svc-curse-removal",
    spiritBlessings: "svc-spirit-blessings",
  }

  console.log("5/7 — service pages...")
  await run([
    {
      createOrReplace: {
        _id: SVC.loveSpells,
        _type: "servicePage",
        title: "Love Spells",
        slug: slug("love-spells"),
        metaDescription:
          "Bring back your lost lover, stop a divorce, attract new love. Powerful love spells cast by experienced traditional healer. Contact via WhatsApp.",
        seoH1: `Powerful Love Spells That Work — Cast by ${T} ${N}`,
        subheading: "The heart knows what it wants. Let the spirits open the path.",
        icon: "♥",
        badge: "Most Requested",
        whatsappPreFill: `Hello%20${T}%20${N}%2C%20I%20need%20help%20with%20a%20love%20situation`,
        whatIsSection: [
          pt(
            "ls-wi-1",
            "Love spells are among the oldest and most powerful forms of spiritual work known to humanity. For centuries, traditional healers across Africa and beyond have called upon ancestral spirits, natural energies, and sacred rituals to mend broken hearts, reignite lost passion, and draw soulmates together. A love spell is not mere superstition — it is a deliberate channeling of spiritual force toward the deepest human desire: to love and be loved in return.",
          ),
          pt(
            "ls-wi-2",
            `When ${T} ${N} casts a love spell, the work begins long before any ritual is performed. The first step is a spiritual reading — a deep assessment of the energies surrounding your relationship, your partner's heart, and the obstacles standing between you and the love you deserve. Only then does the healing begin. Using herbs, candles, ancestral invocation, and voice, ${T} ${N} opens the channels that fate and negative influences have closed.`,
          ),
          pt(
            "ls-wi-3",
            "There are many types of love spells, each designed for a different situation. Return-lover spells pull a partner back who has drifted away. Binding spells deepen commitment and loyalty. Attraction spells draw new love into an empty life. Each one is customized — no two hearts are the same, and no two spells should be either.",
          ),
        ],
        whoNeedsSection: [
          "Your partner has grown cold and distant without explanation",
          "An ex has moved on but you know the love was real",
          "You keep attracting the wrong kind of partner",
          "Your relationship feels cursed or blocked by outside influence",
          "You want to deepen commitment or bind your relationship",
          "Someone is interfering in your relationship",
          "You feel a spiritual blockage preventing love from entering your life",
          "You need to stop a divorce or separation",
        ],
        howHealerWorks: [
          pt(
            "ls-hh-1",
            `${T} ${N} does not use generic spells or one-size-fits-all rituals. Every love spell is crafted after a personal consultation and spiritual reading. The healer listens to your story, examines the spiritual roots of the problem, and then selects the exact combination of herbs, ancestral prayers, candle work, and ritual timing needed for your unique situation. Some spells require multiple sessions; others show results within days. The approach is always personal, always confidential, and always grounded in decades of proven practice.`,
          ),
        ],
        whatToExpect: [
          pt(
            "ls-we-1",
            `When you reach out, you will receive a response within hours — often sooner. The first conversation is a spiritual assessment where ${T} ${N} reads the energy around your love situation. You will be told honestly whether the spell can work and what to expect. If you proceed, the ritual work begins. Most clients notice shifts within 3 to 14 days: a text from an ex, a change in their partner's behavior, a new romantic connection appearing unexpectedly. Full results typically manifest within one lunar cycle. You are never left wondering — follow-up support is included.`,
          ),
        ],
        conversionCopy: {
          heading: "Ready to Begin? Your Love Life Can Change.",
          body: "Do not let another day pass in heartbreak or loneliness. The spirits are ready to move — are you? Reach out now and let the healing begin. Your consultation is confidential, personal, and the first step toward the love you deserve.",
        },
        sortOrder: 0,
      },
    },
    {
      createOrReplace: {
        _id: SVC.voodooSpells,
        _type: "servicePage",
        title: "Voodoo Spells",
        slug: slug("voodoo-spells"),
        metaDescription:
          "Authentic voodoo spells and rituals for love, protection, revenge, and justice. Performed by a traditional voodoo practitioner with decades of experience. Private consultations available.",
        seoH1: `Authentic Voodoo Spells & Rituals — ${T} ${N}`,
        subheading: "Ancient power speaks through the hands of the faithful.",
        icon: "✦",
        whatsappPreFill: `Hello%20${T}%20${N}%2C%20I%20need%20help%20with%20a%20voodoo%20matter`,
        whatIsSection: [
          pt(
            "vs-wi-1",
            "Voodoo is one of the most misunderstood spiritual traditions on earth. Originating in West Africa and carried across the ocean by those who refused to abandon their ancestral ways, voodoo is not evil — it is a complete spiritual system for communicating with the unseen world. It encompasses healing, protection, justice, love, and retribution. The spirits that voodoo calls upon — the Loa, the ancestors, the forces of nature — are real, and they respond to those who know how to approach them with respect and authority.",
          ),
          pt(
            "vs-wi-2",
            `A voodoo spell differs from other forms of spiritual work in its intensity and precision. It calls upon specific spirits and uses specific materials — bones, herbs, blood, fire, earth, water — each chosen for its resonance with the desired outcome. When ${T} ${N} performs voodoo work, every element has a purpose, every word has power, and every gesture opens a channel between the visible and invisible worlds.`,
          ),
          pt(
            "vs-wi-3",
            "Voodoo spells are used for a wide range of purposes: to bind a lover, to punish a wrongdoer, to protect against enemies, to attract money, to break a curse, to compel truth, to demand justice where none has been given. The power of voodoo lies in its directness — it does not ask politely. It commands. And when performed by a true practitioner, the spirits obey.",
          ),
        ],
        whoNeedsSection: [
          "Someone has wronged you and the legal system has failed",
          "You are under spiritual attack and need a stronger defense than prayer alone",
          "You need to compel someone to tell the truth or fulfill a promise",
          "Your enemy is using dark forces against you",
          "You want a love binding that cannot be broken by ordinary means",
          "You need to break a curse or hex placed upon you through voodoo",
          "You seek justice for betrayal, theft, or harm done to your family",
          "You feel called to voodoo as your spiritual path and need guidance",
        ],
        howHealerWorks: [
          pt(
            "vs-hh-1",
            `${T} ${N} was initiated into voodoo practice through a lineage that stretches back generations. The work begins with a consultation to understand the exact nature of your situation — who is involved, what has happened, and what outcome you seek. From there, the healer determines which spirits to invoke, what materials are required, and the timing of the ritual. Voodoo work is never performed carelessly. Each ritual is precise, powerful, and conducted in sacred space. Follow-up readings confirm whether the spirits have accepted the work and guide any additional steps needed.`,
          ),
        ],
        whatToExpect: [
          pt(
            "vs-we-1",
            `When you contact ${T} ${N}, you will be asked to describe your situation in detail. Honesty is essential — the spirits see everything, and withholding information weakens the work. After the initial assessment, you will be told whether voodoo is the right approach and what to expect in terms of timing and results. Voodoo spells often produce strong and fast results, sometimes within 48 hours for simpler workings. More complex cases — involving multiple enemies or deep spiritual warfare — may require a series of rituals. Throughout the process, ${T} ${N} remains available for guidance and support.`,
          ),
        ],
        conversionCopy: {
          heading: "The Spirits Are Waiting. Are You Ready to Act?",
          body: "If you have been wronged, if you need protection, if you demand justice where none has come — voodoo offers a path that ordinary methods cannot. Reach out now for a confidential consultation. The spirits do not forget, and neither should you.",
        },
        sortOrder: 1,
      },
    },
    {
      createOrReplace: {
        _id: SVC.moneySpells,
        _type: "servicePage",
        title: "Money Spells",
        slug: slug("money-spells"),
        metaDescription:
          "Attract money, break financial blockages, and open the doors of prosperity with powerful money spells cast by an experienced traditional healer. Confidential consultations via WhatsApp.",
        seoH1: `Money Spells & Wealth Rituals — ${T} ${N}`,
        subheading: "Poverty is not your destiny. The spirits of abundance are ready to move.",
        icon: "◈",
        whatsappPreFill: `Hello%20${T}%20${N}%2C%20I%20need%20help%20with%20a%20financial%20situation`,
        whatIsSection: [
          pt(
            "ms-wi-1",
            "Money spells are rituals designed to remove the spiritual blockages that keep poverty, debt, and financial stagnation rooted in your life. In the traditional African understanding, wealth is not merely a matter of hard work or luck — it is also a matter of spiritual alignment. When the channels of abundance are blocked by curses, jealousy, ancestral debts, or negative energy, no amount of effort will bring prosperity. A money spell clears those channels and opens the doors that fate has shut.",
          ),
          pt(
            "ms-wi-2",
            `There are many forms of money spells. Some attract new opportunities — clients, jobs, contracts, windfalls. Others unblock stuck payments and debts owed to you. Some protect existing wealth from being drained by envious eyes or spiritual theft. ${T} ${N} uses a combination of herbal mixtures, candle rituals, ancestral invocation, and prosperity prayers to direct the flow of abundance toward you. Each spell is tailored to the specific nature of your financial struggle.`,
          ),
          pt(
            "ms-wi-3",
            "It is important to understand that money spells do not create wealth from nothing — they remove what is blocking it and align your spirit with the energy of abundance. Many clients discover that after a money spell, opportunities seem to appear from nowhere: a promotion they were overlooked for suddenly comes through, a debt is repaid unexpectedly, a business deal that was stuck finally closes. The money was always meant for you. The spell simply removed what was standing in the way.",
          ),
        ],
        whoNeedsSection: [
          "You work hard but money slips through your fingers every month",
          "Your business has stagnated despite your best efforts",
          "You are drowning in debt with no way out in sight",
          "Clients or customers have stopped coming and you do not know why",
          "Money owed to you is being deliberately withheld",
          "You suspect someone has placed a financial curse on you or your business",
          "Every investment you make turns into a loss",
          "You feel an invisible ceiling on your earnings that you cannot break through",
        ],
        howHealerWorks: [
          pt(
            "ms-hh-1",
            `${T} ${N} begins every money spell with a spiritual diagnosis. Using ancestral reading, the healer identifies the root cause of your financial blockage — whether it is a curse, an ancestral debt, spiritual theft by an enemy, or simply misalignment with the energy of prosperity. Once the cause is known, the appropriate ritual is selected: a prosperity bath, a candle-and-herb working, an ancestral offering, or a combination of these. Some situations require a single powerful ritual; others need a series of workings over several weeks. The healer guides you through every step and provides follow-up support to ensure the channels of abundance remain open.`,
          ),
        ],
        whatToExpect: [
          pt(
            "ms-we-1",
            `After your initial consultation with ${T} ${N}, you will know exactly what is causing your financial problems and what the healing plan involves. Most money spells begin to show results within one to two weeks: unexpected payments, new opportunities, or a noticeable shift in the energy around your finances. For deep blockages or long-standing curses, the process may take up to a full lunar cycle. Throughout the work, the healer checks in with you to assess progress and adjust the approach if needed. You are never left to wonder whether the spell is working.`,
          ),
        ],
        conversionCopy: {
          heading: "Break Free from Financial Struggle. Abundance Awaits.",
          body: "You were not born to struggle endlessly. If money keeps slipping away, if doors keep closing, if nothing you do seems to work — there is a spiritual reason. Reach out now and let the healer open the channels of prosperity that have been blocked. Your financial breakthrough is closer than you think.",
        },
        sortOrder: 2,
      },
    },
    {
      createOrReplace: {
        _id: SVC.protectionSpells,
        _type: "servicePage",
        title: "Protection Spells",
        slug: slug("protection-spells"),
        metaDescription:
          "Shield yourself from evil eye, black magic, enemies, and spiritual attacks. Powerful protection spells cast by a traditional healer. Confidential help available now.",
        seoH1: `Protection Spells & Spiritual Shielding — ${T} ${N}`,
        subheading: "When the darkness comes for you, the spirits will stand in its way.",
        icon: "⬡",
        whatsappPreFill: `Hello%20${T}%20${N}%2C%20I%20need%20protection%20from%20spiritual%20attack`,
        whatIsSection: [
          pt(
            "ps-wi-1",
            "Protection spells are among the most essential and ancient forms of spiritual work. In a world where unseen forces can attack your health, your relationships, your finances, and your peace of mind, protection is not optional — it is survival. Every culture that practices spiritual work has its own methods of shielding, and the African traditional tradition is among the most powerful. These spells create an invisible barrier around you that deflects negative energy, repels spiritual attacks, and prevents enemies from reaching you through the spirit realm.",
          ),
          pt(
            "ps-wi-2",
            `When ${T} ${N} performs a protection spell, the work is tailored to the specific threat you face. There is no generic shield that covers everything. A spell to protect against the evil eye is different from one that blocks curses, which is different again from one that prevents enemies from sending spirits against you. The healer first identifies the nature and source of the threat, then constructs the appropriate spiritual defense. Some protection spells are permanent; others are temporary measures while a deeper problem is being resolved.`,
          ),
          pt(
            "ps-wi-3",
            "Protection spells also serve a preventive purpose. You do not need to be under active attack to benefit from spiritual shielding. Many clients seek protection before traveling, before entering a new business deal, or during times of vulnerability — after a breakup, during illness, or when facing a jealous rival. Proactive protection is always more effective than emergency defense. A shield built before the attack arrives cannot be breached as easily as one erected under siege.",
          ),
        ],
        whoNeedsSection: [
          "You feel watched or followed by an unseen presence",
          "Bad things keep happening to you in an unnatural pattern",
          "Someone has threatened to curse you or send spirits against you",
          "You are experiencing unexplained illness that doctors cannot diagnose",
          "Your home or business feels heavy and unwelcoming",
          "People around you seem to drain your energy or bring you down",
          "You are going through a major life transition and feel vulnerable",
          "You have enemies who are known to practice spiritual work",
        ],
        howHealerWorks: [
          pt(
            "ps-hh-1",
            `${T} ${N} begins with a thorough spiritual reading to determine whether you are already under attack, the source of the threat, and the type of protection needed. The healer then selects the appropriate ritual — which may include herbal baths, candle shieldings, ancestral wall construction, or mirror spells that reflect attacks back to their sender. Some clients require a single powerful ritual; others need layered protection over multiple sessions. ${T} ${N} also teaches clients simple daily practices to maintain their shield between sessions. The goal is not just to protect you once but to make you spiritually untouchable.`,
          ),
        ],
        whatToExpect: [
          pt(
            "ps-we-1",
            `When you contact ${T} ${N}, you will be asked about the symptoms you are experiencing and any known enemies or sources of spiritual threat. The healer will perform a remote reading to assess your spiritual situation before recommending any work. If protection is needed, the first ritual is usually performed within 24 to 48 hours of your consultation. Most clients feel an immediate sense of relief and lightness after the spell is cast — a tangible shift in the energy around them. Active attacks typically cease within days. Full spiritual fortification may take one to two weeks depending on the severity of the threat.`,
          ),
        ],
        conversionCopy: {
          heading: "Do Not Wait for the Next Attack. Shield Yourself Now.",
          body: "If you sense something is wrong, trust that feeling. Spiritual attacks do not stop on their own — they escalate. Contact a healer today for a confidential assessment and immediate protection. The spirits will stand between you and whatever darkness comes your way.",
        },
        sortOrder: 3,
      },
    },
    {
      createOrReplace: {
        _id: SVC.traditionalHealing,
        _type: "servicePage",
        title: "Traditional Healing",
        slug: slug("traditional-healing"),
        metaDescription:
          "Authentic traditional African healing for physical, emotional, and spiritual ailments. Herbal remedies, ancestral readings, and energy cleansing by an experienced traditional healer.",
        seoH1: `Traditional African Healing — ${T} ${N}`,
        subheading: "The old ways still heal. The ancestors still speak.",
        icon: "🌿",
        whatsappPreFill: `Hello%20${T}%20${N}%2C%20I%20need%20traditional%20healing%20help`,
        whatIsSection: [
          pt(
            "th-wi-1",
            "Traditional African healing is the oldest system of medicine and spiritual care on the continent — practiced for thousands of years before modern hospitals existed. It is not primitive or backward; it is a complete and sophisticated system that addresses the root cause of illness rather than merely suppressing symptoms. Traditional healers understand that most physical and emotional problems have a spiritual origin: an ancestral disturbance, a curse, a spiritual blockage, or a disconnection from one's purpose and lineage.",
          ),
          pt(
            "th-wi-2",
            `When ${T} ${N} performs traditional healing, the process includes spiritual reading, herbal treatment, ancestral communication, and energy cleansing. Herbs are selected not just for their medicinal properties but for their spiritual resonance — each plant carries a specific energy that addresses a specific type of imbalance. The healer combines these herbs into remedies that are taken internally, used in baths, or burned as part of cleansing rituals. This is not alternative medicine in the Western sense — it is the original medicine, tested across generations and refined through centuries of practice.`,
          ),
          pt(
            "th-wi-3",
            "Traditional healing is effective for conditions that modern medicine struggles with: unexplained infertility, chronic misfortune, recurring illness, emotional instability, ancestral disturbances, and spiritual sickness. It is also deeply effective as a complement to Western medicine — many clients use both systems simultaneously, addressing the spiritual dimension that doctors cannot reach.",
          ),
        ],
        whoNeedsSection: [
          "You have an illness that doctors cannot explain or cure",
          "You feel spiritually disconnected from your ancestors and your roots",
          "You experience chronic bad luck that follows you everywhere",
          "You have been trying to conceive without success and medical tests show nothing wrong",
          "You suffer from recurring nightmares or sleep disturbances",
          "You feel emotionally unstable for no apparent reason",
          "You have tried everything else and nothing has worked",
          "You feel called to reconnect with traditional African spiritual practices",
        ],
        howHealerWorks: [
          pt(
            "th-hh-1",
            `${T} ${N} approaches healing as a sacred responsibility passed down through a lineage of practitioners. Every session begins with a spiritual reading to identify the root cause of the problem — whether it lies in the ancestral realm, in spiritual attack, in energetic imbalance, or in a combination of factors. Once the diagnosis is clear, the healer prepares a personalized treatment plan that may include herbal remedies, spiritual baths, ancestral offerings, cleansing rituals, and ongoing spiritual guidance. The healer does not use a one-size-fits-all approach — every person's illness has a unique spiritual fingerprint, and the treatment must match it precisely. Follow-up sessions ensure that the healing is progressing and adjust the approach if needed.`,
          ),
        ],
        whatToExpect: [
          pt(
            "th-we-1",
            `Your first contact with ${T} ${N} will be a conversation about your symptoms, your history, and what you have already tried. The healer will then perform a spiritual reading — either remotely or during a consultation — to see what is happening in the spirit realm. You will receive an honest assessment of your situation, including whether traditional healing is the right approach and what kind of results you can expect. If you proceed, the healing work begins immediately. Herbal remedies are typically prepared and dispatched within 24 hours. Spiritual rituals are performed according to the appropriate timing. Most clients begin to feel improvement within the first week, with deeper healing unfolding over the following weeks. Ongoing support is always available.`,
          ),
        ],
        conversionCopy: {
          heading: "The Ancestors Have Been Waiting for You to Ask.",
          body: "If you have tried everything and nothing has worked, perhaps the answer lies not in the physical world but in the spiritual one. Traditional healing addresses the root cause that other methods cannot reach. Reach out now for a confidential consultation. The herbs are ready. The spirits are listening.",
        },
        sortOrder: 4,
      },
    },
    {
      createOrReplace: {
        _id: SVC.curseRemoval,
        _type: "servicePage",
        title: "Curse Removal",
        slug: slug("curse-removal"),
        metaDescription:
          "Break free from curses, hexes, jinxes, and generational spiritual bondage. Powerful curse removal by an experienced traditional healer. Immediate help available.",
        seoH1: `Curse Removal & Hex Breaking — ${T} ${N}`,
        subheading: "What was placed upon you by darkness can be removed by the light.",
        icon: "⊘",
        whatsappPreFill: `Hello%20${T}%20${N}%2C%20I%20think%20I%20am%20cursed%20and%20need%20help`,
        whatIsSection: [
          pt(
            "cr-wi-1",
            "A curse is a deliberate spiritual attack — a concentrated charge of negative energy directed at you by someone with the knowledge and intent to cause harm. Curses can affect every dimension of your life: your health, your relationships, your finances, your peace of mind, and even the lives of your children. Some curses are recent and targeted; others are generational, passed down through a bloodline like an invisible inheritance of suffering. Whatever its origin, a curse does not expire on its own. It must be broken by someone with greater spiritual authority than the one who placed it.",
          ),
          pt(
            "cr-wi-2",
            `Curse removal is one of the most demanding and critical forms of spiritual work. ${T} ${N} approaches it with the gravity it demands. The process begins with a deep spiritual reading to determine the nature of the curse, its source, how long it has been in place, and whether it is a single curse or a layered attack. Some curses are straightforward — a single hex placed by a jealous rival. Others are complex — a network of spiritual bindings placed over years by multiple enemies, sometimes reinforced by ancestral debts. The reading reveals all of this before any work begins.`,
          ),
          pt(
            "cr-wi-3",
            "Once the curse is identified, the removal ritual is tailored to counteract it precisely. Different curses require different methods: some are broken through fire rituals that burn away the spiritual attachment, others through herbal cleansings that purify the body and spirit, and still others through ancestral intervention that overrides the curse at its source. Generational curses often require the most intensive work, as the spiritual debt has compounded over generations and must be settled layer by layer. The result, when the work is complete, is total freedom — a lightness and clarity that many clients describe as being reborn.",
          ),
        ],
        whoNeedsSection: [
          "Your family has suffered the same pattern of misfortune for generations",
          "You have been told by someone that they cursed you",
          "Your life was going well and then suddenly collapsed without explanation",
          "You experience recurring health problems that no doctor can diagnose",
          "You have nightmares about being attacked, choked, or pursued by dark figures",
          "You feel a heavy, oppressive energy that follows you everywhere",
          "Your relationships keep failing in the same way every time",
          "You have visited other healers or psychics who confirmed a curse but could not remove it",
        ],
        howHealerWorks: [
          pt(
            "cr-hh-1",
            `${T} ${N} has been breaking curses for decades and carries the spiritual authority required to dismantle even the most powerful and deeply rooted spiritual attacks. The work always begins with a comprehensive reading that maps the entire spiritual landscape of the curse — its source, its layers, its effects, and its vulnerabilities. From there, the healer designs a removal protocol that may include multiple rituals over several days or weeks, depending on the severity of the curse. Each ritual strips away a layer of the spiritual bondage. Between sessions, the healer monitors your progress through follow-up readings. When the final layer is removed, the healer performs a sealing ritual that closes the channels the curse used and installs protection to prevent re-attachment. The result is permanent freedom.`,
          ),
        ],
        whatToExpect: [
          pt(
            "cr-we-1",
            `When you contact ${T} ${N}, you will be asked to describe your symptoms and any information you have about who might have cursed you. The healer will then perform a reading — often within hours — to confirm the curse and assess its nature. You will receive an honest report of what was found and a clear plan for removal. The first cleansing ritual typically takes place within 24 to 48 hours. Most clients feel an immediate reduction in the heaviness and oppression they have been experiencing. Full removal of a simple curse may be accomplished in a single session; generational or layered curses may require several sessions over two to four weeks. Throughout the process, ${T} ${N} provides support, guidance, and reassurance. You are not alone in this fight.`,
          ),
        ],
        conversionCopy: {
          heading: "You Were Not Born to Suffer. Freedom Is Possible.",
          body: "If you suspect you are cursed, do not wait. Curses do not fade with time — they strengthen. The longer you carry this burden, the deeper it roots and the harder it becomes to remove. Reach out now for a confidential reading. If a curse is found, the healer will break it — completely, permanently, and with the full authority of the ancestral spirits. You deserve to be free.",
        },
        sortOrder: 5,
      },
    },
    {
      createOrReplace: {
        _id: SVC.spiritBlessings,
        _type: "servicePage",
        title: "Spirit Blessings",
        slug: slug("spirit-blessings"),
        metaDescription:
          "Receive ancestral blessings, open doors of favour, and align with divine prosperity. Spirit blessings cast by an experienced traditional healer. Private consultations available.",
        seoH1: `Spirit Blessings & Ancestral Favour — ${T} ${N}`,
        subheading: "When the spirits smile upon you, every door opens and every path clears.",
        icon: "✦",
        whatsappPreFill: `Hello%20${T}%20${N}%2C%20I%20want%20to%20receive%20spirit%20blessings`,
        whatIsSection: [
          pt(
            "sb-wi-1",
            "Spirit blessings are rituals of invocation and offering that call upon ancestral spirits, nature spirits, and divine forces to bestow favour, protection, and prosperity upon a person or household. Unlike spells that target a specific problem, blessings are broader in scope — they align your entire life with the flow of divine grace. When the spirits bless you, obstacles dissolve, opportunities appear, relationships deepen, and a sense of peace and purpose infuses everything you do. A blessed life is not a lucky life — it is a spiritually aligned one.",
          ),
          pt(
            "sb-wi-2",
            `In the African traditional understanding, blessings are not given randomly — they are earned through proper relationship with the spirits. ${T} ${N} acts as the mediator between you and the spirit world, making the appropriate offerings, speaking the correct prayers, and performing the rituals that invite the spirits to extend their favour toward you. This is not begging or wishing — it is a sacred exchange. The spirits give because they are honoured, and the healer knows exactly how to honour them.`,
          ),
          pt(
            "sb-wi-3",
            "Spirit blessings are particularly powerful at key moments in life: before a new venture, after a birth, before marriage, when entering a new home, or when recovering from a period of hardship. They are also deeply valuable as ongoing spiritual maintenance — regular blessings keep your life aligned with divine favour and prevent negative forces from gaining a foothold. A blessed person is harder to curse, harder to harm, and more likely to attract the good things that life has to offer.",
          ),
        ],
        whoNeedsSection: [
          "You feel like nothing goes your way no matter how hard you try",
          "You are starting a new business, job, or venture and want spiritual backing",
          "You have recently moved into a new home and want it blessed",
          "Your family seems stuck in a cycle of misfortune and stagnation",
          "You are preparing for marriage and want ancestral blessing on the union",
          "You have just recovered from illness or hardship and want spiritual renewal",
          "You feel spiritually dry and disconnected from divine favour",
          "You want to protect your children with ancestral blessings",
        ],
        howHealerWorks: [
          pt(
            "sb-hh-1",
            `${T} ${N} performs spirit blessings through a careful and reverent process. First, a reading determines which spirits — ancestral, nature, or divine — are most relevant to your situation and most likely to respond. Then the healer prepares the appropriate offerings: foods, herbs, candles, drinks, and other items that each spirit favours. The blessing ritual itself involves invocation, prayer, offering, and the channeling of divine energy into your life or home. Some blessings are performed in a single session; others involve a series of rituals over several days for maximum effect. The healer also provides guidance on how to maintain the blessing through simple personal practices.`,
          ),
        ],
        whatToExpect: [
          pt(
            "sb-we-1",
            `When you contact ${T} ${N}, you will discuss your situation and what kind of blessing you seek. The healer will determine which spirits to invoke and what offerings are needed. The blessing ritual is typically performed within 24 to 72 hours of your consultation. Many clients report feeling an immediate shift — a sense of lightness, clarity, or warmth — during or shortly after the ritual. Tangible results — such as unexpected opportunities, reconciliations, or financial improvements — often follow within one to three weeks. The blessing creates a sustained elevation in your spiritual state that continues to benefit you long after the ritual is complete.`,
          ),
        ],
        conversionCopy: {
          heading: "Open Your Life to Divine Favour. The Spirits Are Ready.",
          body: "If your life feels stuck, if nothing flows, if every step forward meets resistance — the spirits may be waiting for you to ask. A blessing is the simplest and most powerful way to align yourself with divine abundance. Reach out now and let the healer open the channels of favour that have been waiting for you.",
        },
        sortOrder: 6,
      },
    },
  ])

  console.log("6/7 — testimonials...")
  const testimonialsData = [
    {
      _id: "test-grace-n",
      name: "Grace N.",
      location: "Kenya",
      quote: `I had completely given up on my marriage. After working with ${T} ${N}, my husband returned within three weeks, changed and loving. I cannot explain what happened — but it worked.`,
      rating: 5,
      service: SVC.loveSpells,
      featured: true,
    },
    {
      _id: "test-david-o",
      name: "David O.",
      location: "South Africa",
      quote: "My business had been stuck for two years. After the money ritual, a contract I had been waiting on for months came through in eight days. I am not superstitious, but I believe now.",
      rating: 5,
      service: SVC.moneySpells,
      featured: true,
    },
    {
      _id: "test-amina-j",
      name: "Amina J.",
      location: "United Kingdom",
      quote: "I felt something dark following me everywhere I went. Bad luck, broken relationships, illness. The cleansing changed everything. I feel like myself again for the first time in years.",
      rating: 5,
      service: SVC.protectionSpells,
      featured: true,
    },
    {
      _id: "test-sarah-m",
      name: "Sarah M.",
      location: "USA",
      quote: "I was skeptical but the protection spell worked exactly as described. I had been experiencing a string of bad luck — job loss, car accident, relationship ending — all within a few months. After the protection work was done, the negative pattern stopped immediately.",
      rating: 5,
      service: SVC.protectionSpells,
      featured: false,
    },
    {
      _id: "test-thomas-r",
      name: "Thomas R.",
      location: "Canada",
      quote: "My financial situation transformed after the money spell. I was drowning in debt with no way out. Within a month of the ritual, I received an unexpected promotion and a bonus that covered my outstanding debts.",
      rating: 5,
      service: SVC.moneySpells,
      featured: false,
    },
    {
      _id: "test-fatima-h",
      name: "Fatima H.",
      location: "Dubai",
      quote: "The curse that followed my family for generations has finally been lifted. My grandmother warned me about it before she passed — the pattern of failed marriages and sudden illness. After the curse removal ritual, the darkness that hung over our family has lifted.",
      rating: 5,
      service: SVC.curseRemoval,
      featured: false,
    },
    {
      _id: "test-james-k",
      name: "James K.",
      location: "Australia",
      quote: "Love spell brought my partner back after six months apart. We had broken up over a misunderstanding that seemed impossible to resolve. After the spell was cast, she reached out wanting to talk. We are now engaged and planning our wedding.",
      rating: 5,
      service: SVC.loveSpells,
      featured: false,
    },
    {
      _id: "test-elizabeth-w",
      name: "Elizabeth W.",
      location: "South Africa",
      quote: "After the blessing ritual, my entire household felt the shift. My children became calmer, my husband's business picked up, and the constant arguments stopped. It was as if a dark cloud had been lifted from our home.",
      rating: 5,
      service: SVC.spiritBlessings,
      featured: false,
    },
    {
      _id: "test-thandi-m",
      name: "Thandi M.",
      location: "South Africa",
      quote: "My boyfriend of four years suddenly left for someone else. I was destroyed. After the return-lover spell, he came back apologizing, saying he could not stop thinking about me. We are now engaged.",
      rating: 5,
      service: SVC.loveSpells,
      featured: false,
    },
    {
      _id: "test-sarah-l",
      name: "Sarah L.",
      location: "United Kingdom",
      quote: "I had been single for six years and felt invisible to men. After the attraction spell, I met someone within two weeks who is everything I ever wanted. I still can not believe it.",
      rating: 4,
      service: SVC.loveSpells,
      featured: false,
    },
    {
      _id: "test-kwame-a",
      name: "Kwame A.",
      location: "Ghana",
      quote: `My business partner stole everything from me and the courts did nothing. After ${T} ${N}'s voodoo work, he came back begging to return what he took. Justice was served.`,
      rating: 5,
      service: SVC.voodooSpells,
      featured: false,
    },
    {
      _id: "test-patricia-r",
      name: "Patricia R.",
      location: "United States",
      quote: "I was being harassed by someone who would not stop. The protection voodoo spell created a wall around me that nothing could penetrate. The harassment stopped completely within a week.",
      rating: 5,
      service: SVC.voodooSpells,
      featured: false,
    },
    {
      _id: "test-janet-m",
      name: "Janet M.",
      location: "South Africa",
      quote: "Three generations of women in my family could never keep a husband. After the generational curse was broken, I met someone genuine and we have been happily married for two years now. The cycle is finally broken.",
      rating: 5,
      service: SVC.curseRemoval,
      featured: false,
    },
    {
      _id: "test-robert-c",
      name: "Robert C.",
      location: "United Kingdom",
      quote: "My ex told me she had cursed me and laughed about it. Within months, everything fell apart — my job, my health, my relationships. After the curse removal, my life turned around so fast it made my head spin. I am free now.",
      rating: 5,
      service: SVC.curseRemoval,
      featured: false,
    },
    {
      _id: "test-esther-a",
      name: "Esther A.",
      location: "Kenya",
      quote: "I had visited three other healers who all said I was cursed but none of them could break it. After working with the healer, the difference was night and day. The curse is gone. I can breathe again.",
      rating: 5,
      service: SVC.curseRemoval,
      featured: false,
    },
    {
      _id: "test-fatima-b",
      name: "Fatima B.",
      location: "Nigeria",
      quote: "I was buried in debt and could not see a way out. After the money spell, three separate payments I had given up on came through in the same week. I paid off my debts and have been financially free since.",
      rating: 5,
      service: SVC.moneySpells,
      featured: false,
    },
    {
      _id: "test-michael-t",
      name: "Michael T.",
      location: "Canada",
      quote: "Every business I tried failed. After the prosperity spell, I finally found one that took off. Revenue tripled in three months. I wish I had come sooner.",
      rating: 4,
      service: SVC.moneySpells,
      featured: false,
    },
    {
      _id: "test-joseph-k",
      name: "Joseph K.",
      location: "Uganda",
      quote: "My mother-in-law was known for sending spirits against people she hated. After the protection spell, everything she tried bounced back. My family is safe now.",
      rating: 5,
      service: SVC.protectionSpells,
      featured: false,
    },
    {
      _id: "test-linda-w",
      name: "Linda W.",
      location: "Australia",
      quote: "I had nightmares every single night for months. After the shielding ritual, they stopped immediately. I sleep peacefully for the first time in what feels like forever.",
      rating: 4,
      service: SVC.protectionSpells,
      featured: false,
    },
    {
      _id: "test-ngozi-o",
      name: "Ngozi O.",
      location: "Nigeria",
      quote: "I had been trying to get pregnant for five years. Doctors said nothing was wrong. After two months of traditional healing with the healer, I conceived. My daughter is now two years old and perfectly healthy.",
      rating: 5,
      service: SVC.traditionalHealing,
      featured: false,
    },
    {
      _id: "test-samuel-d",
      name: "Samuel D.",
      location: "Kenya",
      quote: "I was always sick — one thing after another. No doctor could find the cause. The healer identified an ancestral disturbance that had been affecting my family for three generations. After the healing, my health improved dramatically and has stayed strong.",
      rating: 5,
      service: SVC.traditionalHealing,
      featured: false,
    },
    {
      _id: "test-ruth-m",
      name: "Ruth M.",
      location: "Tanzania",
      quote: "The herbal remedies the healer prepared for me worked faster than any medicine I had tried. My chronic pain that had lasted for years began to ease within days. I am grateful beyond words.",
      rating: 4,
      service: SVC.traditionalHealing,
      featured: false,
    },
    {
      _id: "test-beatrice-k",
      name: "Beatrice K.",
      location: "Uganda",
      quote: "After the ancestral blessing, my entire family's fortune shifted. My son got a scholarship, my business picked up, and the constant arguing in our home stopped. The spirits truly smiled on us.",
      rating: 5,
      service: SVC.spiritBlessings,
      featured: false,
    },
    {
      _id: "test-emmanuel-n",
      name: "Emmanuel N.",
      location: "Ghana",
      quote: "I was about to start a new business and wanted spiritual backing. After the blessing, everything fell into place effortlessly — the funding, the location, the clients. It felt like the doors were already open and waiting for me.",
      rating: 5,
      service: SVC.spiritBlessings,
      featured: false,
    },
    {
      _id: "test-catherine-m",
      name: "Catherine M.",
      location: "United States",
      quote: "My home felt cold and unwelcoming since we moved in. After the house blessing, it finally felt like home. The energy completely changed. Even my children noticed without being told anything.",
      rating: 4,
      service: SVC.spiritBlessings,
      featured: false,
    },
  ]
  await run(
    testimonialsData.map((t) => ({
      createOrReplace: {
        _id: t._id,
        _type: "testimonial",
        name: t.name,
        location: t.location,
        quote: t.quote,
        rating: t.rating,
        service: { _type: "reference", _ref: t.service },
        featured: t.featured,
      },
    })),
  )

  console.log("7/7 — FAQ items...")
  const faqData = [
    {
      _id: "faq-g-1",
      question: "Do voodoo spells really work?",
      answer: [
        pt(
          "faq-g-1-a",
          "Yes, voodoo spells are real and effective when performed by a genuine, experienced practitioner with proper spiritual authority. Voodoo is not a parlor trick or a superstition — it is an ancient spiritual system with roots in West African Vodun, practiced for thousands of years. The effectiveness of a spell depends on the healer's lineage, experience, spiritual connection, and the specific circumstances of the client's situation. Spells cast by someone with inherited spiritual authority carry significantly more power. No legitimate healer will guarantee a specific outcome with absolute certainty, but a skilled practitioner can achieve remarkable results in the vast majority of cases.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-2",
      question: "How long does it take to see results?",
      answer: [
        pt(
          "faq-g-2-a",
          "Results vary depending on the type of spiritual work, the complexity of the situation, and the spiritual forces involved. Some clients report noticeable shifts within days — particularly with cleansing and protection work. Love spells and relationship work typically show results within one to three weeks. More complex situations, such as generational curse removal or long-standing spiritual attacks, may require multiple sessions and can take several weeks to fully resolve. During your initial consultation, you will receive an honest and realistic assessment of the expected timeline. Most clients begin to feel or observe changes within the first week after a ritual is performed.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-3",
      question: "What is the difference between voodoo and witchcraft?",
      answer: [
        pt(
          "faq-g-3-a",
          "Voodoo — more accurately Vodun — originates from West Africa and is a structured, theologically rich religion with a pantheon of spirits, priesthood, sacred rituals, and moral codes. Witchcraft is a broader term referring to the practice of magical or supernatural arts across many different cultures. A voodoo practitioner works within a specific ancestral and spiritual framework, invoking established spirits and following ancient protocols. A witch may work independently, drawing from various traditions. Both can be powerful, but voodoo carries the weight and authority of an unbroken lineage stretching back thousands of years.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-4",
      question: "Is voodoo evil or dangerous?",
      answer: [
        pt(
          "faq-g-4-a",
          "Voodoo itself is not evil or inherently dangerous. This misconception stems from centuries of colonial misrepresentation, Hollywood sensationalism, and cultural misunderstanding. Authentic Vodun is a spiritual practice centered on harmony, balance, healing, and communion with the divine. A legitimate healer uses voodoo for restoration, protection, and positive transformation. The danger lies not in the practice itself but in working with unqualified or unethical practitioners who lack proper training and spiritual authority.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-5",
      question: "Can you cast a spell without the other person knowing?",
      answer: [
        pt(
          "faq-g-5-a",
          "Yes, most spiritual work does not require the other person's knowledge or consent. Love spells, protection spells, binding rituals, and curse removal can all be performed remotely without the target being aware. Energy transcends physical boundaries and does not require the recipient's conscious participation. However, ethical considerations are important. A responsible healer will assess whether a particular spell is appropriate and will not perform work intended to cause genuine harm.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-6",
      question: "Is the initial consultation really free?",
      answer: [
        pt(
          "faq-g-6-a",
          "Yes, the initial consultation is completely free with no obligation and no hidden costs. During the consultation, you will describe your situation, receive a spiritual assessment, and learn what can be done. If spiritual work is recommended, you will be told the cost upfront with full transparency. You are entirely free to decline and walk away at any point. There is no pressure to proceed, no aggressive upselling, and no obligation of any kind.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-7",
      question: "Is everything strictly confidential?",
      answer: [
        pt(
          "faq-g-7-a",
          "Absolutely. Confidentiality is not merely a policy — it is a sacred obligation. Everything you share during a consultation and all information about any spiritual work performed on your behalf is held in the strictest confidence. No information is ever shared with third parties. This commitment to privacy is rooted in both professional ethics and spiritual law. Many clients are public figures, business owners, or individuals in sensitive positions, and their privacy has never been compromised.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-8",
      question: "Can you help people who are not in Uganda?",
      answer: [
        pt(
          "faq-g-8-a",
          "Yes, absolutely. Spiritual energy operates beyond physical boundaries — a ritual performed in Kampala can be just as powerful for someone in London, Dubai, Toronto, or Sydney. Distance healing has been part of traditional African spiritual practice for centuries. The healer has successfully worked with clients across Africa, Europe, North America, the Middle East, Asia, and Australia.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-9",
      question: "Do I need to be in the same location as the healer?",
      answer: [
        pt(
          "faq-g-9-a",
          "No, you do not need to be in the same location. Distance spiritual work is the norm, not the exception. The healer performs rituals, castings, and cleansings on your behalf from the sacred space in Uganda, and the spiritual energy reaches you wherever you are. You do not need to be present, awake, or performing any action at the time of the ritual.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-10",
      question: "How does love spell casting work?",
      answer: [
        pt(
          "faq-g-10-a",
          "Love spell casting works by directing spiritual energy toward influencing the emotions, thoughts, and spiritual connection between two people. The process begins with a thorough consultation to understand the specifics of your situation. Based on this assessment, the healer selects the appropriate ritual, invokes the relevant spirits, and performs the casting using traditional materials. The spiritual energy then works to reopen the channels of affection, dissolve negative influences, and draw the two people back into alignment. Love spells are most effective when there was a genuine connection to begin with. Results typically manifest within one to three weeks.",
        ),
      ],
      global: true,
      services: [SVC.loveSpells],
    },
    {
      _id: "faq-g-11",
      question: "What is a generational curse and how is it removed?",
      answer: [
        pt(
          "faq-g-11-a",
          "A generational curse is a spiritual affliction that passes down through a family bloodline, affecting multiple generations with recurring patterns of misfortune, illness, relationship failure, financial ruin, or spiritual oppression. Removing a generational curse requires a deep spiritual diagnosis to identify the origin and nature of the curse, followed by specific rituals designed to sever the spiritual chain and cleanse the bloodline. This often involves ancestral communication, sacrificial offerings, protective sealings, and repeated cleansing over multiple sessions.",
        ),
      ],
      global: true,
      services: [SVC.curseRemoval],
    },
    {
      _id: "faq-g-12",
      question: "How do I know if I have a curse on me?",
      answer: [
        pt(
          "faq-g-12-a",
          "Common signs include persistent bad luck that defies logical explanation, recurring health problems that doctors cannot diagnose, sudden and unexplained financial collapse, a string of failed relationships with no clear cause, vivid and disturbing nightmares, a persistent feeling of heaviness or oppression, and a sense that something invisible is working against you. When multiple signs appear together and persist despite your best efforts, it often indicates a spiritual dimension to the problem. The only way to know for certain is through a spiritual assessment by a genuine practitioner.",
        ),
      ],
      global: true,
      services: [SVC.curseRemoval],
    },
    {
      _id: "faq-g-13",
      question: "What is the success rate of your spells?",
      answer: [
        pt(
          "faq-g-13-a",
          "While no spiritual practitioner can ethically claim a one hundred percent success rate, the vast majority of clients experience meaningful, often dramatic results. The key factors that influence success include the accuracy of the spiritual diagnosis, the skill and authority of the healer, the complexity of the situation, and the client's openness to the process. The healer will always give you an honest assessment of the likelihood of success during your consultation.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-14",
      question: "Do you use black magic?",
      answer: [
        pt(
          "faq-g-14-a",
          "The terms 'black magic' and 'white magic' are Western constructs that do not accurately describe traditional African spiritual practice. In the healer's tradition, spiritual work is evaluated by its purpose and effect. The practice includes rituals for healing, protection, restoration, and positive transformation. The healer does not perform work intended to cause unjustified harm. However, protective and binding work is entirely appropriate when defending against spiritual attacks, removing curses, or stopping someone who is causing harm.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-15",
      question: "How much does it cost?",
      answer: [
        pt(
          "faq-g-15-a",
          "The cost of spiritual work varies depending on the type and complexity of the service required. Simple consultations are free. More involved work has different fee levels based on the materials required, the duration of the ritual, and the spiritual intensity involved. During your free consultation, you will receive a clear and transparent quote for any recommended work before you make any commitment. There are no hidden fees, no surprise charges, and no pressure to proceed.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-16",
      question: "How do I pay for services?",
      answer: [
        pt(
          "faq-g-16-a",
          "Payment can be made through several methods including bank transfer, mobile money, Western Union, MoneyGram, and other international remittance services. Payment is typically required before the spiritual work begins, as the materials and preparations must be arranged in advance. Full details and receipts are provided for every transaction. The healer operates with complete financial transparency.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-17",
      question: "Can spells be reversed if needed?",
      answer: [
        pt(
          "faq-g-17-a",
          "Yes, most spells and spiritual work can be reversed or undone if circumstances change. Reversal involves specific counter-rituals that neutralize or dissolve the spiritual energy that was originally cast. The process and complexity of reversal depend on the type of spell, how long it has been active, and the spiritual forces involved. It is important to communicate with the healer as soon as possible if you wish to reverse a spell.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-18",
      question: "What is traditional healing and how is it different from Western medicine?",
      answer: [
        pt(
          "faq-g-18-a",
          "Traditional healing is an ancient system of spiritual, herbal, and energetic practice that addresses the root spiritual causes of suffering, rather than merely treating physical symptoms. While Western medicine excels at diagnosing and treating physiological conditions, it does not address the spiritual dimension. Traditional healing operates on the understanding that many problems have spiritual roots that cannot be resolved through physical means alone. The two systems are complementary — many clients seek traditional healing after conventional approaches have failed.",
        ),
      ],
      global: true,
      services: [SVC.traditionalHealing],
    },
    {
      _id: "faq-g-19",
      question: "Are your services backed by any spiritual lineage or tradition?",
      answer: [
        pt(
          "faq-g-19-a",
          "Yes. This practice is rooted in an unbroken ancestral lineage of traditional healers from Uganda, East Africa. The spiritual authority is not self-appointed — it was inherited through bloodline and validated through years of rigorous training under elder practitioners. This lineage carries specific spiritual permissions, ancestral endorsements, and sacred obligations that cannot be obtained through books or short courses.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-g-20",
      question: "I am skeptical — should I still reach out?",
      answer: [
        pt(
          "faq-g-20-a",
          "Absolutely. Skepticism is natural, healthy, and entirely understandable. The healer welcomes skeptics because healthy skepticism indicates intelligence and discernment. You do not need to believe in order for the work to be effective — you simply need to be open enough to describe your situation honestly and allow the process to unfold. Many of the most dramatic success stories come from clients who were deeply skeptical at the outset. The free consultation carries no risk and no obligation.",
        ),
      ],
      global: true,
      services: [],
    },
    {
      _id: "faq-ls-1",
      question: "Do love spells really work?",
      answer: [
        pt(
          "faq-ls-1-a",
          "Yes, when performed by an experienced healer with genuine spiritual authority. Love spells are not magic tricks — they are a form of energy work that has been practiced for generations. The key is having a healer who can accurately read your situation and direct the right kind of spiritual force toward it.",
        ),
      ],
      global: false,
      services: [SVC.loveSpells],
    },
    {
      _id: "faq-ls-2",
      question: "How long before I see results from a love spell?",
      answer: [
        pt(
          "faq-ls-2-a",
          "Most clients begin to notice changes within 3 to 14 days. Full results typically manifest within one lunar cycle (about 28 days). Some complex situations — such as long separations or deep curses — may require additional work over a longer period.",
        ),
      ],
      global: false,
      services: [SVC.loveSpells],
    },
    {
      _id: "faq-ls-3",
      question: "Is a love spell the same as mind control?",
      answer: [
        pt(
          "faq-ls-3-a",
          "No. A love spell opens the heart and clears the spiritual blockages that prevent love from flowing. It does not force someone against their will — it awakens what is already there but has been buried by fear, interference, or negative energy. True love cannot be manufactured; it can only be uncovered and strengthened.",
        ),
      ],
      global: false,
      services: [SVC.loveSpells],
    },
    {
      _id: "faq-ls-4",
      question: "Can a love spell bring back an ex who has been gone for years?",
      answer: [
        pt(
          "faq-ls-4-a",
          "It is possible, depending on the spiritual connection between you. The longer the separation, the more stubborn the spiritual block, and the more powerful the work required. During the initial reading, the healer will assess whether the connection still exists and what is realistically achievable.",
        ),
      ],
      global: false,
      services: [SVC.loveSpells],
    },
    {
      _id: "faq-ls-5",
      question: "Will the person know a spell was cast on them?",
      answer: [
        pt(
          "faq-ls-5-a",
          "No. The person will simply feel drawn to you, think of you more often, or experience a change of heart. They will attribute their feelings to their own emotions — never to a spell. The work is invisible to the untrained eye.",
        ),
      ],
      global: false,
      services: [SVC.loveSpells],
    },
    {
      _id: "faq-vs-1",
      question: "Is voodoo dangerous?",
      answer: [
        pt(
          "faq-vs-1-a",
          "Voodoo is a powerful spiritual system and must be treated with respect. In the hands of an experienced practitioner, it is safe for the client. The danger lies in amateur attempts or working with someone who does not have proper initiation. That is why it is critical to work with someone who carries genuine lineage and authority.",
        ),
      ],
      global: false,
      services: [SVC.voodooSpells],
    },
    {
      _id: "faq-vs-2",
      question: "Can voodoo be used for revenge?",
      answer: [
        pt(
          "faq-vs-2-a",
          "Voodoo can be directed toward justice and retribution when someone has caused harm. The spirits judge whether the cause is just. If a person has genuinely wronged you, the spirits may act. If the cause is petty or malicious, the work may backfire. The healer always assesses this before proceeding.",
        ),
      ],
      global: false,
      services: [SVC.voodooSpells],
    },
    {
      _id: "faq-vs-3",
      question: "How is voodoo different from other spells?",
      answer: [
        pt(
          "faq-vs-3-a",
          "Voodoo invokes specific spirits — the Loa and ancestral forces — using a structured system of ritual, offerings, and invocation. It is more direct and forceful than general spellwork. The rituals involve specific materials and procedures that have been passed down through generations of initiated practitioners.",
        ),
      ],
      global: false,
      services: [SVC.voodooSpells],
    },
    {
      _id: "faq-vs-4",
      question: "Will I need to provide anything for the ritual?",
      answer: [
        pt(
          "faq-vs-4-a",
          "In some cases, the healer may ask for personal items — a photograph, a piece of clothing, a name written on paper — to connect the spell to the target. Most materials are provided by the healer. You will be told exactly what is needed during the consultation.",
        ),
      ],
      global: false,
      services: [SVC.voodooSpells],
    },
    {
      _id: "faq-vs-5",
      question: "Can voodoo spells backfire?",
      answer: [
        pt(
          "faq-vs-5-a",
          "When performed by a properly initiated practitioner with genuine spiritual authority, voodoo spells do not backfire. Problems arise only when untrained people attempt voodoo without understanding the system or the spirits they are calling upon. Working with an experienced healer ensures the rituals are conducted safely and correctly.",
        ),
      ],
      global: false,
      services: [SVC.voodooSpells],
    },
    {
      _id: "faq-vs-6",
      question: "How quickly do voodoo spells work?",
      answer: [
        pt(
          "faq-vs-6-a",
          "Simple voodoo workings can produce results within 24 to 72 hours. More complex rituals — especially those involving multiple targets or deep spiritual warfare — may take one to three lunar cycles. The healer will set realistic expectations during your consultation.",
        ),
      ],
      global: false,
      services: [SVC.voodooSpells],
    },
    {
      _id: "faq-cr-1",
      question: "How do I know if I am cursed?",
      answer: [
        pt(
          "faq-cr-1-a",
          "Common signs include a sudden and unexplained collapse of multiple areas of your life simultaneously, recurring nightmares of being attacked, a persistent feeling of heaviness or oppression, health problems that doctors cannot explain, and a sense that something invisible is actively working against you. If these symptoms appeared suddenly and persist despite your best efforts, a spiritual reading can confirm whether a curse is the cause.",
        ),
      ],
      global: false,
      services: [SVC.curseRemoval],
    },
    {
      _id: "faq-cr-2",
      question: "Can a curse be passed down through generations?",
      answer: [
        pt(
          "faq-cr-2-a",
          "Yes. Generational curses are among the most common and destructive types. They manifest as recurring patterns of misfortune within a family — every generation suffers the same types of failure, illness, or loss. These curses are usually placed on an ancestor and then descend through the bloodline until someone with spiritual authority breaks them permanently.",
        ),
      ],
      global: false,
      services: [SVC.curseRemoval],
    },
    {
      _id: "faq-cr-3",
      question: "Can a curse kill someone?",
      answer: [
        pt(
          "faq-cr-3-a",
          "Severe curses can cause serious illness, accelerate disease, and in extreme cases, contribute to death — especially when left untreated for years. This is why curse removal should never be delayed. The longer a curse sits, the deeper it roots and the more damage it causes.",
        ),
      ],
      global: false,
      services: [SVC.curseRemoval],
    },
    {
      _id: "faq-cr-4",
      question: "What happens after a curse is removed?",
      answer: [
        pt(
          "faq-cr-4-a",
          "Most clients experience an immediate sense of relief, lightness, and clarity. The oppressive symptoms begin to lift within days. Life starts to flow again — opportunities return, health improves, relationships mend. The healer also installs protection after the removal to prevent the curse from being re-attached or replaced.",
        ),
      ],
      global: false,
      services: [SVC.curseRemoval],
    },
    {
      _id: "faq-cr-5",
      question: "Can the person who cursed me just curse me again?",
      answer: [
        pt(
          "faq-cr-5-a",
          "Without protection, yes. That is why the healer always installs a spiritual shield after removing a curse. This shield makes it much harder for the same person to curse you again. If the enemy is persistent, the healer can also perform a reflecting spell that sends any future attacks back to the sender.",
        ),
      ],
      global: false,
      services: [SVC.curseRemoval],
    },
    {
      _id: "faq-cr-6",
      question: "How long does curse removal take?",
      answer: [
        pt(
          "faq-cr-6-a",
          "A simple recent curse can be removed in a single session. Layered curses or generational curses may require multiple sessions over one to four weeks. The healer will give you a realistic timeline after the initial reading. Rushing the process is dangerous — each layer must be removed carefully and completely.",
        ),
      ],
      global: false,
      services: [SVC.curseRemoval],
    },
    {
      _id: "faq-cr-7",
      question: "Why could other healers not remove my curse?",
      answer: [
        pt(
          "faq-cr-7-a",
          "Not all practitioners have the same level of spiritual authority. A curse placed by a powerful practitioner requires a healer with greater power to remove it. Additionally, some curses are layered or hidden — if a healer does not perform a thorough reading, they may remove one layer while leaving the deeper layers intact. Experience, lineage, and genuine spiritual power are essential for complete curse removal.",
        ),
      ],
      global: false,
      services: [SVC.curseRemoval],
    },
    {
      _id: "faq-ms-1",
      question: "Can a money spell make me rich overnight?",
      answer: [
        pt(
          "faq-ms-1-a",
          "Money spells remove blockages and align you with prosperity, but they do not create money from nothing. You should expect opportunities to open, payments to arrive, and financial flow to increase — often dramatically. Someone who takes action on the opportunities that appear will see the fastest and greatest results.",
        ),
      ],
      global: false,
      services: [SVC.moneySpells],
    },
    {
      _id: "faq-ms-2",
      question: "Why do I keep losing money no matter what I do?",
      answer: [
        pt(
          "faq-ms-2-a",
          "Chronic financial loss often has a spiritual root: a curse placed by an envious person, an ancestral debt that has not been settled, or a spiritual drain caused by someone feeding on your prosperity. A reading can identify the exact cause, and a money spell can remove it permanently.",
        ),
      ],
      global: false,
      services: [SVC.moneySpells],
    },
    {
      _id: "faq-ms-3",
      question: "Will the money spell affect my job or business?",
      answer: [
        pt(
          "faq-ms-3-a",
          "Yes, in a positive way. Many clients report receiving promotions, new clients, or unexpected business opportunities shortly after a money spell. The spell opens channels — it does not force specific outcomes. The form the prosperity takes depends on your life circumstances and the actions you take.",
        ),
      ],
      global: false,
      services: [SVC.moneySpells],
    },
    {
      _id: "faq-ms-4",
      question: "How long do money spell results last?",
      answer: [
        pt(
          "faq-ms-4-a",
          "A properly performed money spell removes the blockage permanently. However, if you are exposed to new spiritual attacks — from jealous people, for example — the blockages can return. Some clients choose to have regular spiritual maintenance to keep their channels clear.",
        ),
      ],
      global: false,
      services: [SVC.moneySpells],
    },
    {
      _id: "faq-ms-5",
      question: "Can a money spell help with gambling or lottery wins?",
      answer: [
        pt(
          "faq-ms-5-a",
          "A money spell can increase your luck and align you with fortunate outcomes, but gambling always involves risk. The spell improves the odds and opens lucky channels, but it cannot guarantee a specific result. The healer will always be honest about what is realistic.",
        ),
      ],
      global: false,
      services: [SVC.moneySpells],
    },
    {
      _id: "faq-ms-6",
      question: "Is the consultation confidential?",
      answer: [
        pt(
          "faq-ms-6-a",
          "Absolutely. Every consultation and every ritual is completely private. Your name, your situation, and the work performed are never shared with anyone. Discretion is a sacred principle in traditional healing.",
        ),
      ],
      global: false,
      services: [SVC.moneySpells],
    },
    {
      _id: "faq-ps-1",
      question: "How do I know if I am under spiritual attack?",
      answer: [
        pt(
          "faq-ps-1-a",
          "Common signs include a sudden string of bad luck, unexplained illness, recurring nightmares, a feeling of heaviness or being watched, relationship breakdowns that happen without cause, and financial problems that appear from nowhere. If these things are happening in a pattern, it is rarely coincidence. A spiritual reading can confirm whether you are under attack.",
        ),
      ],
      global: false,
      services: [SVC.protectionSpells],
    },
    {
      _id: "faq-ps-2",
      question: "Can protection spells protect my family too?",
      answer: [
        pt(
          "faq-ps-2-a",
          "Yes. Protection spells can be extended to cover your entire household, your children, and your business. Household protection is especially recommended if you suspect that someone has been sending negative energy into your home. The healer can create a perimeter shield that nothing hostile can cross.",
        ),
      ],
      global: false,
      services: [SVC.protectionSpells],
    },
    {
      _id: "faq-ps-3",
      question: "Is protection different from curse removal?",
      answer: [
        pt(
          "faq-ps-3-a",
          "Yes. Curse removal eliminates an existing curse that is already affecting you. Protection prevents future attacks from reaching you. If you are already cursed, you need removal first and protection afterward. If you are not yet attacked but feel vulnerable, protection alone may be sufficient.",
        ),
      ],
      global: false,
      services: [SVC.protectionSpells],
    },
    {
      _id: "faq-ps-4",
      question: "Do protection spells need to be renewed?",
      answer: [
        pt(
          "faq-ps-4-a",
          "Most protection spells are long-lasting, but if the threat level increases or a new enemy emerges, the shield may need reinforcement. The healer will let you know whether your protection is permanent or needs periodic renewal. Regular spiritual check-ups are recommended for those who live in environments with high spiritual conflict.",
        ),
      ],
      global: false,
      services: [SVC.protectionSpells],
    },
    {
      _id: "faq-ps-5",
      question: "Can someone bypass a protection spell?",
      answer: [
        pt(
          "faq-ps-5-a",
          "A properly constructed protection spell by a powerful healer is extremely difficult to breach. However, if the client weakens their own shield through fear, doubt, or exposure to corrupting influences, the protection can be compromised. Following the healer's guidance for maintaining your spiritual hygiene is essential to keeping the shield intact.",
        ),
      ],
      global: false,
      services: [SVC.protectionSpells],
    },
    {
      _id: "faq-ps-6",
      question: "Can I protect myself without a spell?",
      answer: [
        pt(
          "faq-ps-6-a",
          "There are basic spiritual hygiene practices — burning herbs, praying, visualizing light around yourself — that offer mild protection. However, these are not sufficient against a determined spiritual attack. For serious threats, a professionally cast protection spell is necessary. Think of it like washing your hands versus taking antibiotics: one is prevention, the other is treatment.",
        ),
      ],
      global: false,
      services: [SVC.protectionSpells],
    },
    {
      _id: "faq-th-1",
      question: "Is traditional healing safe?",
      answer: [
        pt(
          "faq-th-1-a",
          "Yes, when performed by an experienced and initiated healer. The herbs used are time-tested and carefully selected for each individual. The healer never uses toxic or harmful substances. Spiritual rituals are conducted with strict protocols that ensure safety for the client. The key is working with a genuine practitioner.",
        ),
      ],
      global: false,
      services: [SVC.traditionalHealing],
    },
    {
      _id: "faq-th-2",
      question: "Can I use traditional healing alongside Western medicine?",
      answer: [
        pt(
          "faq-th-2-a",
          "Absolutely. Traditional healing and Western medicine address different dimensions of the same problem. One treats the body; the other treats the spirit. Many clients use both simultaneously with excellent results. The healer will never advise you to stop taking prescribed medication or abandon medical treatment.",
        ),
      ],
      global: false,
      services: [SVC.traditionalHealing],
    },
    {
      _id: "faq-th-3",
      question: "How are the herbal remedies prepared?",
      answer: [
        pt(
          "faq-th-3-a",
          "Herbs are selected based on the spiritual reading and then prepared according to traditional methods — some are dried and brewed as teas, others are combined into powders or pastes, and some are used in spiritual baths. Every remedy is prepared specifically for the individual client; there are no pre-made generic mixtures.",
        ),
      ],
      global: false,
      services: [SVC.traditionalHealing],
    },
    {
      _id: "faq-th-4",
      question: "Does traditional healing work for mental health issues?",
      answer: [
        pt(
          "faq-th-4-a",
          "Traditional healing can be very effective for emotional and psychological disturbances, especially those with a spiritual root — such as ancestral disturbances, spiritual oppression, or energetic imbalances. However, the healer does not replace a psychiatrist or therapist. For severe mental health conditions, traditional healing should be used as a complement to professional psychological care.",
        ),
      ],
      global: false,
      services: [SVC.traditionalHealing],
    },
    {
      _id: "faq-th-5",
      question: "How long does traditional healing take?",
      answer: [
        pt(
          "faq-th-5-a",
          "It depends on the condition. Simple ailments may improve within days. Chronic conditions or deep ancestral issues may require several weeks or months of treatment. The healer will give you a realistic timeline during the initial consultation based on the spiritual reading.",
        ),
      ],
      global: false,
      services: [SVC.traditionalHealing],
    },
    {
      _id: "faq-th-6",
      question: "Can traditional healing help someone who is far away?",
      answer: [
        pt(
          "faq-th-6-a",
          "Yes. Spiritual work is not limited by physical distance. The healer can perform readings and rituals remotely, and herbal remedies can be dispatched to any location. Many clients are based in different countries and receive effective treatment through remote consultations and shipped remedies.",
        ),
      ],
      global: false,
      services: [SVC.traditionalHealing],
    },
    {
      _id: "faq-sb-1",
      question: "What is the difference between a blessing and a spell?",
      answer: [
        pt(
          "faq-sb-1-a",
          "A spell targets a specific outcome — returning a lover, attracting money, breaking a curse. A blessing is broader: it invites divine favour and alignment into your entire life. Blessings elevate your overall spiritual state, making good things flow more naturally toward you. Spells are precise; blessings are expansive. Both are powerful, and they work well together.",
        ),
      ],
      global: false,
      services: [SVC.spiritBlessings],
    },
    {
      _id: "faq-sb-2",
      question: "How often should I receive a spirit blessing?",
      answer: [
        pt(
          "faq-sb-2-a",
          "It depends on your life circumstances. Major blessings are recommended at key life transitions — new home, new business, marriage, birth. Some clients also request regular blessings every few months as spiritual maintenance to keep their lives aligned with divine favour. The healer will advise you on what is appropriate for your situation.",
        ),
      ],
      global: false,
      services: [SVC.spiritBlessings],
    },
    {
      _id: "faq-sb-3",
      question: "Can a blessing protect me from curses?",
      answer: [
        pt(
          "faq-sb-3-a",
          "A blessing strengthens your spiritual state, which makes you more resistant to negative forces. However, if you are already under a specific curse, you need curse removal first and then a blessing afterward. If you are not yet attacked, a blessing provides a layer of general protection that makes it harder for curses to take hold.",
        ),
      ],
      global: false,
      services: [SVC.spiritBlessings],
    },
    {
      _id: "faq-sb-4",
      question: "What offerings are used in a blessing ritual?",
      answer: [
        pt(
          "faq-sb-4-a",
          "Offerings vary depending on which spirits are being invoked. Common offerings include specific foods, drinks, herbs, candles, and symbolic items. The healer determines what each spirit requires and prepares everything on your behalf. You do not need to source anything yourself — all materials and offerings are handled by the healer.",
        ),
      ],
      global: false,
      services: [SVC.spiritBlessings],
    },
    {
      _id: "faq-sb-5",
      question: "Can I request a blessing for someone else?",
      answer: [
        pt(
          "faq-sb-5-a",
          "Yes. Many people request blessings for their children, spouses, parents, or friends. The spirits can extend their favour to anyone, as long as the request is genuine and the offering is made with sincerity. Parental blessings for children are among the most powerful and commonly requested rituals.",
        ),
      ],
      global: false,
      services: [SVC.spiritBlessings],
    },
    {
      _id: "faq-sb-6",
      question: "Will I feel the blessing working?",
      answer: [
        pt(
          "faq-sb-6-a",
          "Many clients feel an immediate sense of peace, warmth, or lightness during or after the ritual. Others notice the effects more gradually over the following days and weeks — things simply start going their way. Whether you feel it immediately or notice it over time, the blessing is working. The spirits do not perform empty rituals.",
        ),
      ],
      global: false,
      services: [SVC.spiritBlessings],
    },
  ]

  const faqMutations = faqData.map((f) => ({
    createOrReplace: {
      _id: f._id,
      _type: "faqItem",
      question: f.question,
      answer: f.answer,
      global: f.global,
      services: f.services.map((s, i) => ref(s, `${f._id}-svc-${i}`)),
    },
  }))
  await run(faqMutations.slice(0, 20))
  await run(faqMutations.slice(20))

  console.log("Patching service pages with testimonials & FAQ refs...")
  const serviceTestimonialMap: Record<string, string[]> = {
    [SVC.loveSpells]: ["test-grace-n", "test-thandi-m", "test-sarah-l", "test-james-k"],
    [SVC.voodooSpells]: ["test-kwame-a", "test-patricia-r"],
    [SVC.moneySpells]: ["test-david-o", "test-fatima-b", "test-michael-t", "test-thomas-r"],
    [SVC.protectionSpells]: ["test-amina-j", "test-joseph-k", "test-linda-w", "test-sarah-m"],
    [SVC.traditionalHealing]: ["test-ngozi-o", "test-samuel-d", "test-ruth-m"],
    [SVC.curseRemoval]: ["test-janet-m", "test-robert-c", "test-esther-a", "test-fatima-h"],
    [SVC.spiritBlessings]: ["test-beatrice-k", "test-emmanuel-n", "test-catherine-m", "test-elizabeth-w"],
  }

  const serviceFaqMap: Record<string, string[]> = {
    [SVC.loveSpells]: ["faq-ls-1", "faq-ls-2", "faq-ls-3", "faq-ls-4", "faq-ls-5"],
    [SVC.voodooSpells]: ["faq-vs-1", "faq-vs-2", "faq-vs-3", "faq-vs-4", "faq-vs-5", "faq-vs-6"],
    [SVC.moneySpells]: ["faq-ms-1", "faq-ms-2", "faq-ms-3", "faq-ms-4", "faq-ms-5", "faq-ms-6"],
    [SVC.protectionSpells]: ["faq-ps-1", "faq-ps-2", "faq-ps-3", "faq-ps-4", "faq-ps-5", "faq-ps-6"],
    [SVC.traditionalHealing]: ["faq-th-1", "faq-th-2", "faq-th-3", "faq-th-4", "faq-th-5", "faq-th-6"],
    [SVC.curseRemoval]: ["faq-cr-1", "faq-cr-2", "faq-cr-3", "faq-cr-4", "faq-cr-5", "faq-cr-6", "faq-cr-7"],
    [SVC.spiritBlessings]: ["faq-sb-1", "faq-sb-2", "faq-sb-3", "faq-sb-4", "faq-sb-5", "faq-sb-6"],
  }

  const patchMutations = Object.keys(SVC).map((key) => {
    const svcId = SVC[key as keyof typeof SVC]
    const testIds = serviceTestimonialMap[svcId] || []
    const faqIds = serviceFaqMap[svcId] || []
    return {
      patch: {
        id: svcId,
        set: {
          testimonials: testIds.map((id, i) => ref(id, `${svcId}-t-${i}`)),
          faqItems: faqIds.map((id, i) => ref(id, `${svcId}-f-${i}`)),
        },
      },
    }
  })
  await run(patchMutations)

  console.log("Done! Seed complete.")
}

main().catch((err) => {
  console.error("Seed failed:", err)
  process.exit(1)
})
