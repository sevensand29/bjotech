import type { Metadata } from "next";
import { MessageSquareText, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss a custom software, web application, business automation or SaaS project with BJO Technology Solutions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-24">
          <p className="eyebrow">Contact BJO</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,5.4rem)] font-bold leading-[1] tracking-[-0.055em] text-navy">Let&apos;s discuss what&apos;s <span className="text-accent">possible.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Share a little about your organization, the challenge you face or the solution you have in mind.</p>
        </div>
      </section>
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.38fr_.62fr]">
          <aside>
            <div className="rounded-[24px] bg-navy p-7 text-white sm:p-9">
              <div className="grid size-11 place-items-center rounded-xl bg-accent/15 text-accent"><MessageSquareText size={21}/></div>
              <h2 className="mt-6 text-2xl font-bold">Project conversation</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">Good projects begin with clear context. Tell us about the desired outcome, current process or technical challenge.</p>
              <div className="mt-8 border-t border-white/10 pt-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">What to include</p><ul className="mt-4 space-y-3 text-sm text-slate-300"><li>• Your business or organization</li><li>• The process or problem to improve</li><li>• Any preferred timing</li><li>• Questions you would like answered</li></ul></div>
            </div>
            <div className="mt-5 flex gap-3 rounded-2xl border border-slate-200 p-5"><ShieldCheck className="shrink-0 text-accent" size={20}/><p className="text-xs leading-5 text-slate-500">Please avoid sending confidential passwords or sensitive account information through this form.</p></div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
