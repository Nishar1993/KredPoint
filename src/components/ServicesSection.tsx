import {
  Briefcase,
  Building2,
  Car,
  FileText,
  Home,
  Info,
  ReceiptText,
  ShieldCheck,
  UtensilsCrossed,
  Wallet,
} from 'lucide-react';
import {
  BUSINESS_SOLUTIONS,
  LIVE_TAX_SOCIAL_SERVICES,
  LOAN_CHART_ROWS,
  type LoanChartRow,
  type ServiceInterestOption,
} from '../data/kredpointData';
import {DarkTealHeroCanvas} from './DarkTealHeroCanvas';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (service: ServiceInterestOption) => void;
}

function LoanIcon({name}: {name: LoanChartRow['iconName']}) {
  const iconClass = 'h-4 w-4 text-[#465F38] shrink-0';
  switch (name) {
    case 'wallet':
      return <Wallet className={iconClass} aria-hidden="true" />;
    case 'briefcase':
      return <Briefcase className={iconClass} aria-hidden="true" />;
    case 'home':
      return <Home className={iconClass} aria-hidden="true" />;
    case 'car':
      return <Car className={iconClass} aria-hidden="true" />;
  }
}

function BusinessIcon({name}: {name: 'file-text' | 'utensils' | 'building'}) {
  const iconClass = 'h-5 w-5 text-[#465F38] shrink-0';
  switch (name) {
    case 'file-text':
      return <FileText className={iconClass} aria-hidden="true" />;
    case 'utensils':
      return <UtensilsCrossed className={iconClass} aria-hidden="true" />;
    case 'building':
      return <Building2 className={iconClass} aria-hidden="true" />;
  }
}

function LiveServiceIcon({name}: {name: 'receipt' | 'shield'}) {
  const iconClass = 'h-5 w-5 text-[#465F38] shrink-0';
  switch (name) {
    case 'receipt':
      return <ReceiptText className={iconClass} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
  }
}

export function ServicesSection(_props: ServicesSectionProps) {
  return (
    <>
      {/* 1st: Tax Compliance & Gig Worker Social Security — Live Now */}
      <section
        id="services"
        className="relative overflow-hidden border-t border-white/10 bg-[#081E1E] py-16 sm:py-20"
      >
        <DarkTealHeroCanvas variant="plain" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#071B1A]/35"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-sans text-2xl font-bold tracking-tight text-[#FAF8F5] sm:text-3xl [text-wrap:balance]">
              Kredpoint - Product offerings
            </h2>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#7CE0CF] sm:text-3xl [text-wrap:balance]">
              1. Tax compliance and gig worker social security
            </h3>
          </div>

          {/* Concise boxed cards */}
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {LIVE_TAX_SOCIAL_SERVICES.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-2xl border border-white/15 bg-[#FAF8F5] p-6 shadow-lg shadow-black/15"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#64564A]/15 bg-[#E7EFE2]">
                    <LiveServiceIcon name={service.iconName} />
                  </div>
                  <span className="text-xs font-semibold text-[#465F38]">
                    {service.categoryLabel}
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-bold tracking-tight text-[#3D332B]">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#574A3F]">{service.oneLiner}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-[#C7DCDA]">
            Independent facilitation only; KREDPOINT is not affiliated with any government portal
            and does not guarantee official registration.
          </p>
        </div>
      </section>

      {/* 2nd: Loan Application and Facilitation Support — Simple Chart Layout */}
      <section
        id="loans"
        className="relative overflow-hidden border-t border-white/10 bg-[#081E1E] py-16 sm:py-20"
      >
        <DarkTealHeroCanvas variant="plain" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#071B1A]/35"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#7CE0CF] sm:text-3xl [text-wrap:balance]">
              2. Financial Services — Loans
            </h2>
            <p className="mt-1.5 text-lg font-semibold text-[#FAF8F5] sm:text-xl [text-wrap:balance]">
              Loan application and facilitation support
            </p>
          </div>

          {/* Concise Loan Boxes with Structured Comparison Rows */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {LOAN_CHART_ROWS.map((loan) => (
              <div
                key={loan.id}
                className="flex flex-col justify-between rounded-2xl border border-white/15 bg-[#FAF8F5] p-6 shadow-lg shadow-black/15"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#64564A]/15 bg-[#E7EFE2]">
                    <LoanIcon name={loan.iconName} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[#3D332B]">
                    {loan.shortTitle}
                  </h3>
                </div>

                <dl className="mt-5 space-y-2 border-t border-[#64564A]/12 pt-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-between gap-4 border-b border-[#64564A]/10 pb-2">
                    <dt className="font-medium text-[#64564A]">Primary Audience</dt>
                    <dd className="font-semibold text-right text-[#3D332B]">{loan.audience}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#64564A]/10 pb-2">
                    <dt className="font-medium text-[#64564A]">KREDPOINT Support</dt>
                    <dd className="font-semibold text-right text-[#3D332B]">{loan.kredpointRole}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="font-medium text-[#64564A]">Determined by Lender</dt>
                    <dd className="font-semibold text-right text-[#3D332B]">{loan.lenderDecision}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* Concise Lender Disclosure */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/15 bg-[#FAF8F5] px-5 py-4 shadow-md shadow-black/10">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#465F38]" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-[#574A3F] sm:text-sm">
              KREDPOINT does not provide loans directly. Eligibility, interest rates, terms,
              approval, and disbursal are determined solely by the relevant lender.
            </p>
          </div>
        </div>
      </section>

      {/* 3rd: Registration and Document Assistance — Concise Details */}
      <section
        id="business"
        className="relative overflow-hidden border-t border-white/10 bg-[#081E1E] py-16 sm:py-20"
      >
        <DarkTealHeroCanvas variant="plain" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#071B1A]/35"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-[#7CE0CF] sm:text-3xl [text-wrap:balance]">
                3. Business Solutions
              </h2>
              <p className="mt-1.5 text-lg font-semibold text-[#FAF8F5] sm:text-xl [text-wrap:balance]">
                Registration and document assistance
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {BUSINESS_SOLUTIONS.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-white/15 bg-[#FAF8F5] p-6 shadow-lg shadow-black/15"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#64564A]/15 bg-[#E7EFE2]">
                      <BusinessIcon name={item.iconName} />
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-bold tracking-tight text-[#3D332B]">
                    {item.title}
                  </h3>
                  {item.aka && (
                    <p className="mt-0.5 text-xs font-medium text-[#465F38]">{item.aka}</p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-[#574A3F]">{item.oneLiner}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
