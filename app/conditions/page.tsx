import Link from "next/link";
import { getAllConditions } from "@/lib/conditions";

export const metadata = {
  title: "Conditions We Treat",
  description:
    "Conditions treated at IH Clinic: women's health, children's health. PCOD, infertility, tonsils, asthma, autism, and more. Tirupati.",
};

export default function ConditionsPage() {
  const conditions = getAllConditions();

  const women = conditions.filter((c) => c.category === "women");
  const children = conditions.filter((c) => c.category === "children");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
        Conditions we treat
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        Women&apos;s health and children&apos;s health—our focus at IH Clinic.
      </p>

      <section className="mt-10" aria-labelledby="women-heading">
        <h2 id="women-heading" className="text-xl font-semibold text-[var(--primary)]">
          Women&apos;s Health
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {women.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/conditions/${c.slug}`}
                className="text-[var(--foreground)] hover:text-[var(--primary)] hover:underline"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="children-heading">
        <h2 id="children-heading" className="text-xl font-semibold text-[var(--secondary)]">
          Children&apos;s Health
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {children.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/conditions/${c.slug}`}
                className="text-[var(--foreground)] hover:text-[var(--secondary)] hover:underline"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
