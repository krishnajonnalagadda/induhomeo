import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/GlassCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Heart, Baby } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="relative aspect-[21/9] w-full bg-[var(--primary)]/10 sm:aspect-[3/1]">
          <Image
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80"
            alt="Woman and child – gentle care at IH Clinic"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            unoptimized={false}
          />
          <div className="absolute inset-0 bg-[var(--foreground)]/20" aria-hidden />
        </div>
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Women & child care in homeopathy
          </h1>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] sm:text-xl">
            By Dr. Indu Rekha · Tirupati
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--foreground)]">
            IH Clinic focuses on women&apos;s health and children&apos;s health with
            gentle, individualised homeopathic care. From PCOD and fertility to
            recurrent infections and developmental support—we&apos;re here for you
            and your family.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[var(--muted-foreground)]">
            21 years of experience · Constitutional approach · Aude Sapere
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton />
            <Link
              href="/conditions"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--primary)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--primary)] hover:bg-[var(--primary)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              View conditions we treat
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16" aria-labelledby="focus-heading">
        <h2 id="focus-heading" className="sr-only">
          Our focus
        </h2>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          <Link href="/womens-health" className="group block">
            <GlassCard as="article" className="h-full transition hover:shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/20 text-[var(--primary)]">
                  <Heart size={24} aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                  Women&apos;s Health
                </h3>
              </div>
              <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                PCOD, infertility, menstrual and hormonal issues, pregnancy
                support, postpartum care, thyroid, skin and hair—individualised
                homeopathy for women at every stage.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--primary)] group-hover:underline">
                Learn more →
              </span>
            </GlassCard>
          </Link>
          <Link href="/childrens-health" className="group block">
            <GlassCard as="article" className="h-full transition hover:shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)]/20 text-[var(--secondary)]">
                  <Baby size={24} aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--secondary)]">
                  Children&apos;s Health
                </h3>
              </div>
              <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                Recurrent infections, tonsils, asthma, allergies, eczema,
                developmental support including autism and ADHD—gentle care for
                your child.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--secondary)] group-hover:underline">
                Learn more →
              </span>
            </GlassCard>
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-white/50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm italic text-[var(--muted-foreground)]">
            Aude Sapere · Committed to Excellence
          </p>
          <p className="mt-2 text-base text-[var(--foreground)]">
            Trusted by families in Tirupati for focused, gentle homeopathic care.
          </p>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            <Link href="/about" className="text-[var(--primary)] hover:underline">
              About Dr. Indu Rekha
            </Link>
            {" · "}
            <Link href="/contact" className="text-[var(--primary)] hover:underline">
              Contact & location
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
