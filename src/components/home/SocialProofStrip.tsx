const snippets = [
  {
    stars: "★★★★★",
    text: "My husband came back after 3 weeks.",
    name: "Mary K.",
    location: "London",
  },
  {
    stars: "★★★★★",
    text: "Business contract came through in 8 days.",
    name: "David O.",
    location: "South Africa",
  },
  {
    stars: "★★★★★",
    text: "The negative energy is completely gone.",
    name: "Sarah L.",
    location: "Canada",
  },
  {
    stars: "★★★★★",
    text: "I feel like myself again for the first time.",
    name: "Grace N.",
    location: "Kenya",
  },
  {
    stars: "★★★★★",
    text: "Results within two weeks. I am not superstitious but I believe now.",
    name: "Thomas M.",
    location: "USA",
  },
  {
    stars: "★★★★★",
    text: "My family was falling apart. Now we are whole again.",
    name: "Rebecca T.",
    location: "Australia",
  },
];

const allSnippets = [...snippets, ...snippets];

export default function SocialProofStrip() {
  return (
    <section className="border-y border-gold-dim bg-surface py-3 md:py-4">
      <div className="animate-marquee flex min-w-max">
        {allSnippets.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap px-5 text-[0.6rem] text-text-secondary md:gap-3 md:px-8 md:text-xs"
          >
            <span className="text-gold-primary">{s.stars}</span>
            <span>&ldquo;{s.text}&rdquo;</span>
            <span className="font-medium text-text-primary">
              — {s.name}, {s.location}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
