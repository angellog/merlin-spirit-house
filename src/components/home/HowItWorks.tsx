const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";
const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";

const steps = [
  {
    number: "01",
    title: "Contact",
    desc: "Reach out via WhatsApp or the contact form. Describe your situation.",
    icon: "📱",
  },
  {
    number: "02",
    title: "Consultation",
    desc: `${CLIENT_TITLE} assesses your situation personally. Free initial consultation.`,
    icon: "🔮",
  },
  {
    number: "03",
    title: "Ritual Work",
    desc: "The spiritual work is performed. You receive updates throughout.",
    icon: "🕯",
  },
  {
    number: "04",
    title: "Transformation",
    desc: `Results manifest. ${CLIENT_TITLE} remains available for follow-up support.`,
    icon: "✨",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-elevated px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl text-gold-light md:mb-4 md:text-4xl">
            How the Process Works
          </h2>
          <p className="text-sm text-text-secondary md:text-base">
            Private, Confidential, and Handled Personally by {CLIENT_TITLE}{" "}
            {CLIENT_NAME}
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-1 flex-col">
              <div className="flex items-center gap-6 md:flex-col md:items-center md:gap-0">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold-primary bg-deepnight font-[family-name:var(--font-heading)] text-xl text-gold-primary md:mb-4 md:h-16 md:w-16 md:text-2xl shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                  {step.number}
                </div>
                <div className="md:text-center">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-text-primary md:mb-2 md:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <>
                  {/* Mobile Vertical Line */}
                  <div className="absolute left-7 top-14 h-8 w-px bg-gold-dim md:hidden" />
                  {/* Desktop Horizontal Line */}
                  <div className="hidden absolute left-[calc(50%+32px)] top-8 w-[calc(100%-64px)] border-t-2 border-dashed border-gold-dim md:block" />
                </>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-text-primary md:mt-12 md:text-base">
          Most clients begin feeling a shift within 7–21 days.
        </p>
      </div>
    </section>
  );
}
