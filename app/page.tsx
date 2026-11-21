import Link from "next/link";
import { ArrowRight, Blocks, Braces, CloudCog, Database, Gauge, Layers3, Lightbulb, Workflow, ShieldCheck, Headphones } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTA } from "@/components/sections/cta";

const services = [
	{
		icon: Braces,
		title: "Custom Software",
		text: "Purpose-built systems designed around your operations, users and growth plans.",
	},
	{
		icon: Blocks,
		title: "Web & Applications",
		text: "Responsive, accessible applications that deliver dependable digital experiences.",
	},
	{
		icon: Workflow,
		title: "Business Automation",
		text: "Streamlined workflows that reduce repetitive work and connect your business tools.",
	},
	{
		icon: CloudCog,
		title: "Cloud & IT Solutions",
		text: "Practical cloud architecture, integrations and technology guidance for growing teams.",
	},
];

const solutions = [
	{
		icon: Gauge,
		label: "Operations",
		title: "Business management systems",
		text: "Centralize day-to-day processes, reporting and team workflows in one clear system.",
	},
	{
		icon: Workflow,
		label: "Efficiency",
		title: "Workflow automation",
		text: "Replace manual handoffs with reliable, trackable and configurable digital processes.",
	},
	{
		icon: Database,
		label: "Insight",
		title: "Data & dashboards",
		text: "Turn operational data into useful dashboards and informed decision-making tools.",
	},
];

export default function Home() {
	return (
		<>
			<section className="hero-grid relative overflow-hidden bg-navy text-white">
				<div className="hero-orb" />
				<div className="mx-auto grid min-h-[680px] max-w-[1180px] items-center gap-12 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
					<div className="relative z-10 max-w-3xl">
						<div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
							<span className="size-2 rounded-full bg-accent" /> Independent software & technology solutions
						</div>
						<h1 className="text-[clamp(3rem,7vw,5.6rem)] font-bold leading-[0.98] tracking-[-0.055em]">
							Technology That Moves{" "}
							<span className="text-gradient">Your Business Forward.</span>
						</h1>
						<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
							We design and develop modern software solutions that help businesses streamline operations, improve efficiency and unlock new opportunities through technology.
						</p>
						<div className="mt-9 flex flex-col gap-3 sm:flex-row">
							<ButtonLink href="/contact">Let&apos;s Build Something Together</ButtonLink>
							<ButtonLink href="/services" secondary>
								Explore Our Services
							</ButtonLink>
						</div>
					</div>
					<div className="relative hidden min-h-[490px] lg:block" aria-label="Software system visualization">
						<div className="dashboard-card absolute right-0 top-12 w-[420px]">
							<div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
								<div className="flex gap-1.5">
									<span className="dot" />
									<span className="dot" />
									<span className="dot" />
								</div>
								<span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">System Overview</span>
							</div>
							<div className="p-5">
								<div className="mb-5 grid grid-cols-3 gap-3">
									{["Operations", "Efficiency", "Growth"].map((item, i) => (
										<div key={item} className="rounded-xl border border-white/8 bg-white/[0.035] p-3">
											<p className="text-[9px] text-slate-400">{item}</p>
											<p className="mt-2 text-lg font-bold">
												{["98", "42", "24"][i]}
												<span className="text-accent">{i === 2 ? "%" : ""}</span>
											</p>
										</div>
									))}
								</div>
								<div className="rounded-xl border border-white/8 bg-white/[0.035] p-4">
									<div className="mb-4 flex items-center justify-between">
										<span className="text-xs font-semibold">Connected workflows</span>
										<span className="text-[10px] text-accent">LIVE</span>
									</div>
									<div className="chart-bars">
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
										<span />
									</div>
								</div>
							</div>
						</div>
						<div className="floating-chip absolute bottom-16 left-0">
							<div className="grid size-9 place-items-center rounded-lg bg-accent/15 text-accent">
								<Layers3 size={18} />
							</div>
							<div>
								<p className="text-[10px] text-slate-400">Technology stack</p>
								<p className="mt-0.5 text-xs font-bold">Integrated systems</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-b border-slate-100 bg-white py-7">
				<div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400 lg:justify-between lg:px-8">
					<span>Modern Web</span>
					<span>Custom Software</span>
					<span>Cloud Architecture</span>
					<span>Workflow Automation</span>
					<span>Data Systems</span>
					<span>SaaS Platforms</span>
				</div>
			</section>

			<section className="bg-[#F7F9FC] px-5 py-20 lg:px-8 lg:py-28">
				<div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
					<SectionHeading
						eyebrow="Who we are"
						title="Focused expertise. Direct collaboration."
						body="BJO Technology Solutions is an independent technology company founded by Bryan and Josephine. We work closely with organizations to understand their goals and build software that addresses real business needs."
					/>
					<div className="grid gap-4 sm:grid-cols-2">
						{[
							{ icon: Lightbulb, t: "Practical innovation", d: "Technology choices grounded in real outcomes—not novelty." },
							{ icon: ShieldCheck, t: "Reliable delivery", d: "Clear communication and careful attention to quality at every stage." },
							{ icon: Braces, t: "Technical expertise", d: "Maintainable solutions built with modern, proven technologies." },
							{ icon: Headphones, t: "Direct collaboration", d: "Work directly with the founder for focus, context and continuity." },
						].map(({ icon: Icon, t, d }) => (
							<div key={t} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(16,27,53,.05)]">
								<Icon className="text-accent" size={22} />
								<h3 className="mt-5 font-bold text-navy">{t}</h3>
								<p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
				<div className="mx-auto max-w-[1180px]">
					<SectionHeading
						eyebrow="What we build"
						title="Technology designed around the work."
						body="From focused digital tools to complete business systems, our services turn complex requirements into practical, scalable solutions."
					/>
					<div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
						{services.map(({ icon: Icon, title, text }) => (
							<article key={title} className="service-card group">
								<div className="icon-box">
									<Icon size={23} />
								</div>
								<h3 className="mt-7 text-xl font-bold text-navy">{title}</h3>
								<p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
								<Link href="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent">
									Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
								</Link>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="bg-navy px-5 py-20 text-white lg:px-8 lg:py-28">
				<div className="mx-auto max-w-[1180px]">
					<SectionHeading
						eyebrow="Featured solutions"
						title="Tools that make work flow better."
						body="Explore the types of business technology solutions we can shape around your organization."
						light
					/>
					<div className="mt-12 grid gap-5 lg:grid-cols-3">
						{solutions.map(({ icon: Icon, label, title, text }) => (
							<article key={title} className="solution-card">
								<div className="flex items-center justify-between">
									<div className="icon-box-dark">
										<Icon size={21} />
									</div>
									<span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</span>
								</div>
								<h3 className="mt-8 text-xl font-bold">{title}</h3>
								<p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
							</article>
						))}
					</div>
					<Link href="/solutions" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-accent">
						Explore all solutions <ArrowRight size={16} />
					</Link>
				</div>
			</section>

			<section className="bg-[#F7F9FC] px-5 py-20 lg:px-8 lg:py-28">
				<div className="mx-auto max-w-[1180px]">
					<SectionHeading
						eyebrow="Our approach"
						title="Clear thinking from idea to implementation."
						body="A structured process keeps decisions aligned, risks visible and the finished solution connected to your goals."
						align="center"
					/>
					<div className="mt-12 grid gap-4 md:grid-cols-4">
						{[
							["01", "Discover", "Understand the problem, users and desired outcome."],
							["02", "Design", "Shape the experience, architecture and delivery plan."],
							["03", "Develop", "Build in focused iterations with continuous quality checks."],
							["04", "Improve", "Launch carefully, learn from use and plan what comes next."],
						].map(([n, t, d]) => (
							<div key={n} className="approach-step">
								<span className="text-xs font-bold text-accent">{n}</span>
								<h3 className="mt-5 font-bold text-navy">{t}</h3>
								<p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<CTA />
		</>
	);
}
