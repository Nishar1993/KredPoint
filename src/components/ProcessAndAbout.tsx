import {HOW_IT_WORKS_STEPS} from '../data/kredpointData';
import {DarkTealHeroCanvas} from './DarkTealHeroCanvas';

export function ProcessAndAbout() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-white/10 bg-[#081E1E] py-16 text-[#FAF8F5] sm:py-24"
    >
      <DarkTealHeroCanvas variant="plain" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#071B1A]/35"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#7CE0CF]">How It Works</p>
            <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-[#FAF8F5] sm:text-4xl [text-wrap:balance]">
              From enquiry to processing and partner forwarding
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed tracking-[0.01em] text-[#D7E8E5]">
            Share leads through an agent or our enquiry form—we handle processing updates and
            forward loan requests to a lending partner.
          </p>
        </div>

        {/* Horizontal timeline-inspired 4-step grid */}
        <div className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-7 right-12 left-12 hidden h-px bg-[#7CE0CF]/30 lg:block"
          />
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.stepNumber} className="relative flex flex-col">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#7CE0CF]/40 bg-[#0F3836]/85 font-display text-xl font-bold tabular-nums text-[#CCFBF1]">
                  {step.stepNumber}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-[#FAF8F5]">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed tracking-[0.01em] text-[#D7E8E5]/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 text-xs leading-relaxed tracking-[0.01em] text-[#C7DCDA]">
          Note: Processing timelines, eligibility criteria, and final outcomes vary by service,
          lender, or government portal and cannot be fixed or guaranteed in advance.
        </p>
      </div>
    </section>
  );
}
