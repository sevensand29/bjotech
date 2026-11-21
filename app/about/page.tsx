import type { Metadata } from "next";
import { Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BJO Technology Solutions, an independent technology company founded by Bryan and Josephine.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
          <p className="eyebrow">About BJO</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,5.4rem)] font-bold leading-[1] tracking-[-0.055em] text-navy">Technology with Purpose. <span className="text-accent">Solutions with Impact.</span></h1>
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1fr_.8fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Our story</p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] text-navy">A founder-led company building with clarity and care.</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>BJO Technology Solutions is an independent software and technology company founded by Bryan and Josephine. The name represents the combination of their vision: practical innovation, technical expertise and a shared commitment to creating useful solutions.</p>
              <p>We partner directly with small and medium-sized businesses, startups and growing organizations that need software shaped around their real operations. As a founder-led startup, every engagement receives personal attention, informed decision-making and clear communication.</p>
              <p>We are not built around a large delivery team or standardized handoffs. Instead, BJO provides direct founder collaboration, careful technical planning and reliable implementation—giving clients the right level of focus for their project.</p>
            </div>
            <div className="mt-8"><ButtonLink href="/contact">Work With BJO</ButtonLink></div>
          </div>
          <div className="rounded-[24px] bg-navy p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">What guides us</p>
            <div className="mt-8 space-y-7">
              {[{icon:Target,t:"Business focus",d:"Every technical decision starts with a clear business objective."},{icon:Lightbulb,t:"Practical innovation",d:"We use technology to solve meaningful problems, not create unnecessary complexity."},{icon:ShieldCheck,t:"Reliable software",d:"Maintainability, security and dependable user experiences remain essential."},{icon:Users,t:"Direct collaboration",d:"Clients work closely with the founder throughout discovery, delivery and follow-up."}].map(({icon:Icon,t,d}) => <div key={t} className="flex gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent"><Icon size={20}/></div><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{d}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F9FC] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-3">
            {[['Our purpose','Make useful technology accessible to organizations that need better ways to operate, serve customers and grow.'],['Our commitment','Communicate honestly, plan carefully and remain accountable for the quality of every solution.'],['Our direction','Build durable partnerships and expand thoughtfully, with the needs of our clients always leading our work.']].map(([title,text]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7"><h2 className="text-xl font-bold text-navy">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
