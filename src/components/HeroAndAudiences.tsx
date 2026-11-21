import {ArrowRight} from 'lucide-react';
import {AUDIENCE_GROUPS, type CustomerTypeOption} from '../data/kredpointData';
import {DarkTealHeroCanvas} from './DarkTealHeroCanvas';
import {ImageWithFallback} from './ImageWithFallback';

interface HeroAndAudiencesProps {
  onExploreServices: () => void;
  onContactWithAudience: (customerType?: CustomerTypeOption) => void;
}

export function HeroAndAudiences({
  onExploreServices,
  onContactWithAudience,
}: HeroAndAudiencesProps) {
  return (
    <>
      {/* Dark Teal-Green Animated Hero Band */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-[#0B2928]/30 bg-[#081E1E] pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-24"
      >
        <DarkTealHeroCanvas />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071B1A]/92 via-[#092423]/75 to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-brand text-xl font-extrabold tracking-wide text-[#7CE0CF] sm:text-2xl">
              About KREDPOINT
            </p>

            <h1 className="mt-3 text-[clamp(2.35rem,4.3vw,3.65rem)] font-bold leading-[1.08] tracking-tight text-[#FAF8F5] [text-wrap:balance]">
              Practical financial and business support, built on clarity.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#D7E8E5] sm:text-lg">
              KREDPOINT is a proposed financial and business solutions venture being developed to
              make everyday financial and compliance journeys easier to navigate. We plan to
              support individuals, gig workers and small businesses through guided documentation,
              application assistance and access to relevant service providers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onContactWithAudience()}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#FAF8F5] px-7 py-3 text-sm font-semibold text-[#0B2928] transition-colors duration-150 hover:bg-[#DDF5EE] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CE0CF] cursor-pointer"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 text-[#0F766E]" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-[#FAF8F5] backdrop-blur-xs transition-colors duration-150 hover:border-[#7CE0CF]/60 hover:bg-white/15 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CE0CF] cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plain Dark Teal-Green Animated Band: Target Audiences */}
      <section id="about" className="relative overflow-hidden bg-[#081E1E] py-16 sm:py-24">
        <DarkTealHeroCanvas variant="plain" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#071B1A]/35"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* 3 Main Customer Groups Showcase */}
          <div>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-[#7CE0CF]">Who We Plan to Serve</p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#FAF8F5] sm:text-3xl [text-wrap:balance]">
                  Dedicated support for three everyday customer groups
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#D7E8E5]">
                Select any customer group below to enquire about relevant planned assistance.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-3">
              {AUDIENCE_GROUPS.map((group) => (
                <article
                  key={group.id}
                  className={`flex flex-col overflow-hidden rounded-2xl border border-white/15 shadow-lg shadow-black/15 ${group.surfaceTint} transition-transform duration-150 hover:-translate-y-0.5`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#EAE3D7]">
                    <ImageWithFallback
                      src={group.imageSrc}
                      alt={group.imageAlt}
                      fallbackTitle={group.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold text-[#465F38]">{group.subtitle}</p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-[#3D332B]">
                      {group.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#574A3F]">
                      {group.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
