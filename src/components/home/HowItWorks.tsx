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

        <div className="flex flex-col gap-0 md:flex-row md:items-center md:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-1">
              <div className="flex-1">
                <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-primary bg-deepnight font-[family-name:var(--font-heading)] text-lg text-gold-primary md:mb-2 md:h-14 md:w-14 md:text-2xl">
                    {step.number}
                  </div>
                  <div className="md:text-center">
                    <h3 className="font-[family-name:var(--font-heading)] text-base text-text-primary md:mb-2 md:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-secondary md:text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <>
                  <div className="ml-5 my-2 h-6 w-px bg-gold-dim md:hidden" />
                  <div className="hidden h-px w-12 self-center border-t-2 border-dashed border-gold-dim md:block" />
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
