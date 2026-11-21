"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";

const links = [
  ["About", "/about"], ["Services", "/services"], ["Solutions", "/solutions"], ["Contact", "/contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-5 lg:px-8" aria-label="Primary navigation">
        <Logo inverse />
        <div className="hidden items-center gap-8 md:flex">
          {links.slice(0, 3).map(([label, href]) => (
            <Link key={href} href={href} className={`nav-link ${pathname === href ? "active" : ""}`}>{label}</Link>
          ))}
          <Link href="/contact" className="button-primary !min-h-11 !px-5">Let&apos;s Talk</Link>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-xl border border-white/15 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-navy px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-2">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5">{label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
