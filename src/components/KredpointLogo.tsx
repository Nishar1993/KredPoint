interface KredpointLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

export function KredpointLogo({size = 'md'}: KredpointLogoProps) {
  return (
    <span className="inline-flex items-center rounded-xl bg-[#FAF8F5] px-3 py-1.5 shadow-sm ring-1 ring-white/20">
      <img
        src="/assets/aistudio/ChatGPT_Image_Nov_21__2026__04_16_11_PM_43519cc7.png"
        alt="KREDPOINT — Financial & Business Solutions Private Limited"
        referrerPolicy="no-referrer"
        className={`${size === 'sm' ? 'h-8' : 'h-10 sm:h-11'} w-auto shrink-0 object-contain mix-blend-multiply`}
      />
    </span>
  );
}
