import type { Metadata } from "next";
import { Braces, Blocks, Workflow, CloudCog, Rocket, Check } from "lucide-react";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Software Development Services",
  description: "Custom software, web applications, business automation, cloud solutions and SaaS development services.",
};

const services = [
  {icon:Braces,title:"Custom Software Development",description:"Purpose-built software that reflects your processes, integrations and operational requirements—without unnecessary features or workarounds.",benefits:["Aligned with real workflows","Built for maintainability","Scalable architecture planning","Direct requirement collaboration"],deliverables:["Discovery and technical planning","Custom web or desktop applications","System integrations","Testing and deployment support"]},
  {icon:Blocks,title:"Web & Application Development",description:"Fast, responsive and accessible web experiences that help teams operate effectively and customers interact with confidence.",benefits:["Responsive across devices","Accessible interface design","Modern development standards","Clear, maintainable codebase"],deliverables:["Business websites","Customer and partner portals","Internal applications","Progressive web applications"]},
  {icon:Workflow,title:"Business Automation",description:"Automation solutions that connect tools and replace repetitive, manual work with reliable workflows that are easy to monitor.",benefits:["Reduced manual workload","Consistent operations","Better process visibility","Time saved across teams"],deliverables:["Workflow and approval systems","API and application integrations","Automated reporting","Notifications and task orchestration"]},
  {icon:CloudCog,title:"Cloud & IT Solutions",description:"Practical cloud and infrastructure guidance designed around security, reliability, cost awareness and the needs of your organization.",benefits:["Appropriate cloud architecture","Secure deployment practices","Operational visibility","Support for existing environments"],deliverables:["Cloud environment setup","Application deployment","Backup and recovery planning","Infrastructure and integration guidance"]},
  {icon:Rocket,title:"SaaS & Digital Products",description:"From early validation to a maintainable first release, we help turn software ideas into usable digital products.",benefits:["User-focused product design","Lean, iterative delivery","Flexible technical foundations","Clear roadmap planning"],deliverables:["SaaS platform architecture","Authentication and role systems","Billing and subscription foundations","Admin dashboards and analytics"]},
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
          <p className="eyebrow">Our services</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,5.4rem)] font-bold leading-[1] tracking-[-0.055em] text-navy">Solutions engineered for <span className="text-accent">real business needs.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Flexible software development capabilities for organizations that need a practical partner—from a focused application to a complete digital platform.</p>
        </div>
      </section>
      <section className="bg-white px-5 py-12 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1180px] space-y-6">
          {services.map(({icon:Icon,title,description,benefits,deliverables}, i) => (
            <article key={title} className="grid gap-8 rounded-[24px] border border-slate-200 p-7 sm:p-9 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <div className="flex items-center gap-4"><div className="icon-box"><Icon size={23}/></div><span className="text-xs font-bold text-slate-400">0{i+1}</span></div>
                <h2 className="mt-6 text-2xl font-bold tracking-[-0.025em] text-navy sm:text-3xl">{title}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
              </div>
              <div className="grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div><h3 className="text-xs font-bold uppercase tracking-[0.14em] text-navy">Key benefits</h3><ul className="mt-4 space-y-3">{benefits.map(b => <li key={b} className="flex gap-2 text-sm text-slate-600"><Check size={16} className="mt-0.5 shrink-0 text-accent"/> {b}</li>)}</ul></div>
                <div><h3 className="text-xs font-bold uppercase tracking-[0.14em] text-navy">Example deliverables</h3><ul className="mt-4 space-y-3">{deliverables.map(d => <li key={d} className="flex gap-2 text-sm text-slate-600"><span className="mt-2 size-1 shrink-0 rounded-full bg-accent"/> {d}</li>)}</ul></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
