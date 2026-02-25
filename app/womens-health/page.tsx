import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { getConditionsByCategory } from "@/lib/conditions";

export const metadata = {
  title: "Women's Health",
  description:
    "Women's health in homeopathy: PCOD, infertility, menstrual and hormonal issues, pregnancy, postpartum, thyroid. IH Clinic by Dr. Indu Rekha, Tirupati.",
};

export default function WomensHealthPage() {
  const conditions = getConditionsByCategory("women");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
        Women&apos;s Health
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        Individualised homeopathy for women at every stage of life.
      </p>
      <p className="mt-4 text-[var(--foreground)]">
        We focus on conditions that affect women: PCOD, infertility, menstrual
        and hormonal issues, pregnancy and postpartum support, thyroid,
        skin and hair (hormonal acne, hair fall), and general wellness. Our
        approach is gentle, evidence-aware, and tailored to you.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-[var(--foreground)]">
        Conditions we treat
      </h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {conditions.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/conditions/${c.slug}`}
              className="block rounded-lg border border-[var(--border)] bg-white/60 p-4 backdrop-blur-sm transition hover:border-[var(--primary)] hover:shadow"
            >
              <span className="font-medium text-[var(--foreground)]">
                {c.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-[var(--muted-foreground)]">
        <Link href="/conditions" className="text-[var(--primary)] hover:underline">
          View all conditions
        </Link>
      </p>
    </div>
  );
}
