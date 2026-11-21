import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import {DarkTealHeroCanvas} from './DarkTealHeroCanvas';
import {KredpointLogo} from './KredpointLogo';

interface NavbarProps {
  onNavigateToContact: () => void;
}

const NAV_LINKS = [
  {label: 'Tax & Social', href: '#services'},
  {label: 'Loans', href: '#loans'},
  {label: 'Registrations', href: '#business'},
  {label: 'How It Works', href: '#how-it-works'},
  {label: 'About', href: '#about'},
];

export function Navbar({onNavigateToContact}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#081E1E]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <DarkTealHeroCanvas variant="plain" />
        <div className="absolute inset-0 bg-[#071B1A]/40" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Custom KREDPOINT logo */}
        <a
          href="#top"
          aria-label="KREDPOINT Home"
          className="whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7CE0CF]"
        >
          <KredpointLogo variant="dark" size="md" />
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#D7E8E5] transition-colors duration-150 hover:text-[#7CE0CF] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7CE0CF]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onNavigateToContact}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#FAF8F5] px-5 py-2.5 text-sm font-semibold text-[#0B2928] transition-colors duration-150 hover:bg-[#DDF5EE] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CE0CF] cursor-pointer"
          >
            Contact Us
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-[#FAF8F5] transition-colors duration-150 hover:bg-white/15 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CE0CF] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="relative z-10 border-t border-white/10 bg-[#081E1E]/95 px-4 py-4 backdrop-blur-sm lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMobileLinkClick}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[#FAF8F5] transition-colors duration-150 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToContact();
              }}
              className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#FAF8F5] px-4 py-2.5 text-sm font-semibold text-[#0B2928] transition-colors duration-150 hover:bg-[#DDF5EE] cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
