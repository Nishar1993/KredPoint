import {useState} from 'react';
import {Mail, MapPin, Phone, X} from 'lucide-react';
import {
  CONTACT_PLACEHOLDERS,
  type CustomerTypeOption,
  type ServiceInterestOption,
} from '../data/kredpointData';
import {DarkTealHeroCanvas} from './DarkTealHeroCanvas';
import {KredpointLogo} from './KredpointLogo';

interface ContactAndFooterProps {
  preselectedCustomerType?: CustomerTypeOption;
  preselectedService?: ServiceInterestOption;
}

export function ContactAndFooter(_props: ContactAndFooterProps) {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      {/* Plain Dark Teal-Green Animated Band: Contact Placeholders */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-[#081E1E] py-16 sm:py-24"
      >
        <DarkTealHeroCanvas variant="plain" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#071B1A]/35"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            id="contact-details-card"
            className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12"
          >
            {/* Left Info */}
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold text-[#7CE0CF]">Contact &amp; Enquiry</p>
              <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-[#FAF8F5] [text-wrap:balance]">
                Share what you are looking to explore
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#D7E8E5]">
                As KREDPOINT is currently a proposed brand, contact channels and launch details
                are placeholders until confirmed.
              </p>
            </div>

            {/* Right Contact Placeholders Card */}
            <div className="lg:col-span-6">
              <div className="space-y-4 rounded-2xl border border-white/15 bg-[#FAF8F5] p-6 shadow-lg shadow-black/15 sm:p-7">
                <p className="text-xs font-bold tracking-wide text-[#465F38]">
                  CONTACT PLACEHOLDERS (PENDING CONFIRMATION)
                </p>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#465F38]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-[#64564A]">Email (placeholder)</p>
                    <p className="text-sm font-semibold text-[#3D332B]">
                      {CONTACT_PLACEHOLDERS.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#465F38]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-[#64564A]">Phone (placeholder)</p>
                    <p className="text-sm font-semibold tabular-nums text-[#3D332B]">
                      {CONTACT_PLACEHOLDERS.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#465F38]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-[#64564A]">Office address (placeholder)</p>
                    <p className="text-sm font-semibold text-[#3D332B]">
                      {CONTACT_PLACEHOLDERS.address}
                    </p>
                  </div>
                </div>

                <p className="border-t border-[#64564A]/12 pt-3 text-xs leading-relaxed text-[#64564A]">
                  {CONTACT_PLACEHOLDERS.availabilityNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Deep Teal-Charcoal Footer (#061515) */}
      <footer className="border-t border-white/10 bg-[#061515] py-12 text-[#D7E8E5] sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 border-b border-white/15 pb-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <KredpointLogo variant="light" size="md" />
              <p className="mt-3 max-w-sm text-sm leading-relaxed tracking-[0.01em] text-[#EAE3D7]/90">
                Proposed financial facilitation and business support brand for gig workers, small
                business owners, and salaried employees in India.
              </p>
            </div>

            <div className="md:col-span-4">
              <p className="text-xs font-semibold tracking-[0.01em] text-[#FAF8F5]">
                Contact Placeholders
              </p>
              <ul className="mt-3 space-y-1.5 text-sm tracking-[0.01em] text-[#EAE3D7]/85">
                <li>{CONTACT_PLACEHOLDERS.email}</li>
                <li className="tabular-nums">{CONTACT_PLACEHOLDERS.phone}</li>
                <li>{CONTACT_PLACEHOLDERS.address}</li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="text-xs font-semibold tracking-[0.01em] text-[#FAF8F5]">
                Explore &amp; Policies
              </p>
              <ul className="mt-3 space-y-1.5 text-sm tracking-[0.01em] text-[#EAE3D7]/85">
                <li>
                  <a href="#services" className="hover:text-white hover:underline underline-offset-4">
                    Tax &amp; Social Security
                  </a>
                </li>
                <li>
                  <a href="#loans" className="hover:text-white hover:underline underline-offset-4">
                    Loan Facilitation Chart
                  </a>
                </li>
                <li>
                  <a href="#business" className="hover:text-white hover:underline underline-offset-4">
                    Business Registrations
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalModal('privacy')}
                    className="hover:text-white hover:underline underline-offset-4 cursor-pointer"
                  >
                    Privacy Policy (Placeholder)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalModal('terms')}
                    className="hover:text-white hover:underline underline-offset-4 cursor-pointer"
                  >
                    Terms of Use (Placeholder)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Concise Mandatory Disclaimer */}
          <div className="mt-8 space-y-3 text-xs leading-relaxed tracking-[0.01em] text-[#EAE3D7]/80">
            <p>
              Disclaimer: KREDPOINT is a proposed brand and is not presented as an incorporated
              company, direct lender, or government-affiliated entity. All listed services are
              planned or subject to eligibility and confirmed availability. Relevant lenders make all
              credit, interest rate, approval, and disbursal decisions, and respective government
              authorities solely determine registrations, certificates, and licences.
            </p>
            <p className="text-[#EAE3D7]/65">
              © {new Date().getFullYear()} KREDPOINT · Proposed brand portfolio · Contact, fees,
              and partner details subject to confirmation.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy / Terms Placeholder Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3D332B]/55 p-4 backdrop-blur-xs"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-[#64564A]/20 bg-[#FAF8F5] p-6 shadow-xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 id="legal-modal-title" className="text-lg font-bold text-[#3D332B]">
                {legalModal === 'privacy'
                  ? 'Privacy Notice (Placeholder)'
                  : 'Terms of Use (Placeholder)'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Close dialog"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#574A3F] hover:bg-[#EAE3D7] hover:text-[#3D332B] cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#574A3F]">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    This Privacy Notice is a placeholder for KREDPOINT while service operations,
                    incorporation details, and data-handling procedures are being finalised.
                  </p>
                  <p>
                    Any contact channels shown on this portfolio website are placeholders until
                    official communication details are confirmed.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    These Terms of Use are a placeholder for KREDPOINT. Information presented on
                    this website is intended to describe financial facilitation and business support
                    services.
                  </p>
                  <p>
                    Nothing on this website constitutes a loan offer, financial guarantee, legal
                    advice, or official government registration issuance.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#3D332B] px-4 py-2 text-sm font-semibold text-[#FAF8F5] hover:bg-[#52463B] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
