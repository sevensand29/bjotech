import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="cta-panel mx-auto max-w-[1180px] overflow-hidden rounded-[28px] px-6 py-12 sm:px-12 sm:py-14">
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Start a project</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.04em] text-navy">Let&apos;s turn a business challenge into a practical solution.</h2>
          </div>
          <Link href="/contact" className="button-primary shrink-0">Let&apos;s Build Something Together <ArrowRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}
