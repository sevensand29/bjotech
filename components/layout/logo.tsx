import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" aria-label="BJO Technology Solutions — Home" className="inline-flex items-center gap-3">
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
        <rect width="42" height="42" rx="11" fill={inverse ? "#FFFFFF" : "#101B35"} />
        <path d="M10 12.5H21.2C24.8 12.5 27.2 14.5 27.2 17.4C27.2 19.3 26.2 20.8 24.5 21.6C26.7 22.3 28 24 28 26.2C28 29.4 25.4 31.5 21.4 31.5H10V12.5Z" stroke={inverse ? "#101B35" : "#2585E8"} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M16 12.5V31.5M16 21.5H23.7M16 27.8H21.7" stroke={inverse ? "#101B35" : "#FFFFFF"} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="leading-tight">
        <span className={`block text-[15px] font-bold tracking-[0.08em] ${inverse ? "text-white" : "text-navy"}`}>BJO</span>
        <span className={`block text-[9px] font-semibold tracking-[0.16em] ${inverse ? "text-slate-300" : "text-slate-500"}`}>TECHNOLOGY SOLUTIONS</span>
      </span>
    </Link>
  );
}
