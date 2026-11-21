import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ButtonLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <Link href={href} className={secondary ? "button-secondary" : "button-primary"}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
