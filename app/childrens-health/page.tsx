import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { getConditionsByCategory } from "@/lib/conditions";

export const metadata = {
  title: "Children's Health",
  description:
    "Children's health in homeopathy: recurrent infections, tonsils, asthma, eczema, autism, ADHD. IH Clinic by Dr. Indu Rekha, Tirupati.",
};

export default function ChildrensHealthPage() {
  const conditions = getConditionsByCategory("children");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
        Children&apos;s Health
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        Gentle homeopathy for your child—from infancy to adolescence.
      </p>
      <p className="mt-4 text-[var(--foreground)]">
        We treat recurrent colds and coughs, tonsillitis, adenoids, asthma and
        allergies, eczema, digestive issues, and developmental and behavioural
        concerns including autism (ASD) and ADHD. Our aim is to support the
        body naturally and reduce dependence on repeated antibiotics or
        unnecessary interventions where possible.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-[var(--foreground)]">
        Conditions we treat
      </h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {conditions.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/conditions/${c.slug}`}
              className="block rounded-lg border border-[var(--border)] bg-white/60 p-4 backdrop-blur-sm transition hover:border-[var(--secondary)] hover:shadow"
            >
              <span className="font-medium text-[var(--foreground)]">
                {c.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-[var(--muted-foreground)]">
        <Link href="/conditions" className="text-[var(--secondary)] hover:underline">
          View all conditions
        </Link>
      </p>
    </div>
  );
}
