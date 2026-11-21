import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">Building smarter solutions and empowering businesses through reliable, business-focused technology.</p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Explore</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link className="footer-link" href="/about">About Us</Link>
              <Link className="footer-link" href="/services">Services</Link>
              <Link className="footer-link" href="/solutions">Solutions</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Start a conversation</h3>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white">Discuss your project <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BJO Technology Solutions. All rights reserved.</p>
          <p>Independent technology solutions company.</p>
        </div>
      </div>
    </footer>
  );
}
