import { notFound } from "next/navigation";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import {
  getConditionBySlug,
  getConditionSlugs,
} from "@/lib/conditions";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getConditionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return { title: "Condition" };
  return {
    title: condition.title,
    description: condition.metaDescription,
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--muted-foreground)]">
        <Link href="/conditions" className="hover:text-[var(--primary)]">
          Conditions
        </Link>
        <span className="mx-2">/</span>
        <span>{condition.title}</span>
      </nav>
      <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
        {condition.title}
      </h1>
      <p className="mt-2 text-sm text-[var(--muted-foreground)]">
        {condition.category === "women" ? "Women's Health" : "Children's Health"}
      </p>
      <p className="mt-4 text-lg text-[var(--foreground)]">{condition.summary}</p>

      <GlassCard className="mt-8">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          What is it?
        </h2>
        <p className="mt-4 text-[var(--foreground)]">{condition.whatIsIt}</p>
      </GlassCard>

      <GlassCard className="mt-6">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          How we help
        </h2>
        <p className="mt-4 text-[var(--foreground)]">{condition.howWeHelp}</p>
      </GlassCard>

      <GlassCard className="mt-6">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          When to consult
        </h2>
        <p className="mt-4 text-[var(--foreground)]">{condition.whenToConsult}</p>
      </GlassCard>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
        >
          Contact us
        </Link>
        <Link
          href={condition.category === "women" ? "/womens-health" : "/childrens-health"}
          className="inline-flex items-center rounded-full border-2 border-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary)] hover:bg-[var(--primary)]/10"
        >
          More {condition.category === "women" ? "Women's" : "Children's"} Health
        </Link>
      </div>
    </div>
  );
}
