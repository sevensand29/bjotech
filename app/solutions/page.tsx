import type { Metadata } from "next";
import { BarChart3, Boxes, Database, RefreshCw, Workflow, Rocket } from "lucide-react";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Business Technology Solutions",
  description: "Explore custom business management, workflow automation, dashboard, data management and SaaS solutions.",
};

const solutions = [
  {icon:Boxes,kicker:"Operations",title:"Business management systems",description:"Bring projects, customers, inventory, finance or team activity into a coordinated system designed for the way your organization works.",scope:["Role-based workspaces","Operational reporting","Document and record management","Workflow and approval tracking"]},
  {icon:Workflow,kicker:"Efficiency",title:"Workflow automation",description:"Automate repeatable processes and connect the systems your team already uses, reducing delays and manual data entry.",scope:["Process mapping and rules","Application integrations","Event-based notifications","Audit-friendly task tracking"]},
  {icon:BarChart3,kicker:"Insight",title:"Custom dashboards",description:"Give decision-makers focused views of performance, operations and trends through clear, maintainable dashboards.",scope:["Executive KPI views","Operational monitoring","Data visualization","Export and scheduled reporting"]},
  {icon:Database,kicker:"Data",title:"Data management systems",description:"Create a reliable foundation for collecting, organizing and accessing the business data that supports daily decisions.",scope:["Structured data models","Search and filtering","Data validation and migration","Access and retention controls"]},
  {icon:RefreshCw,kicker:"Transformation",title:"Digital transformation solutions",description:"Modernize selected processes, improve paper-based or disconnected activities and introduce software incrementally.",scope:["Technology and process assessment","Modern web interfaces","Legacy system integration","Phased implementation roadmap"]},
  {icon:Rocket,kicker:"Products",title:"SaaS platforms",description:"Move a validated product concept toward a secure, scalable platform with the features needed for your first real users.",scope:["User and account management","Subscription foundations","Feature and content administration","Usage reporting and analytics"]},
];

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
          <p className="eyebrow">Business solutions</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,5.4rem)] font-bold leading-[1] tracking-[-0.055em] text-navy">Technology built around <span className="text-accent">better ways of working.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">The following are examples of solution patterns we can tailor to an organization’s operations. They are solution concepts—not pre-existing commercial products.</p>
        </div>
      </section>
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-5 md:grid-cols-2">
            {solutions.map(({icon:Icon,kicker,title,description,scope}) => (
              <article key={title} className="rounded-[24px] border border-slate-200 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_50px_rgba(16,27,53,.08)] sm:p-9">
                <div className="flex items-center justify-between"><div className="icon-box"><Icon size={23}/></div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{kicker}</span></div>
                <h2 className="mt-7 text-2xl font-bold text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                <div className="mt-6 border-t border-slate-100 pt-5"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Possible scope</p><div className="flex flex-wrap gap-2">{scope.map(s => <span key={s} className="rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-600">{s}</span>)}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
