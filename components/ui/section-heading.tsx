export function SectionHeading({ eyebrow, title, body, light = false, align = "left" }: { eyebrow: string; title: string; body?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.04em] ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {body && <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>{body}</p>}
    </div>
  );
}
