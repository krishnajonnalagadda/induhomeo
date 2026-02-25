import Image from "next/image";
import { GlassCard } from "@/components/GlassCard";

export const metadata = {
  title: "About",
  description:
    "Dr. Indu Rekha Jonnalagadda, 21 years in constitutional homeopathy. IH Clinic, Tirupati—women & child care. Aude Sapere.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
        About IH Clinic
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        by Dr. Indu Rekha
      </p>

      <GlassCard className="mt-8">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          Founder
        </h2>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-lg bg-[var(--primary)]/10 sm:h-64 sm:w-56">
            <Image
              src="/images/dr-indu-rekha.jpg"
              alt="Dr. Indu Rekha Jonnalagadda, Founder, IH Clinic"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 224px"
              priority
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-[var(--foreground)]">
              Dr. Indu Rekha Jonnalagadda
            </p>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              B.H.M.S, M-D (Hom) · 21 years of experience in homeopathy
            </p>
            <p className="mt-4 text-[var(--foreground)]">
              Dr. Indu Rekha chose homeopathy after being inspired by Dr.
              Radhakrishna Jonnalagadda, a renowned homeopath in Karnataka,
              Tumkur district. She was moved by the gentle cures and the
              happiness of his patients, and that experience led her to make
              homeopathy her chosen system of care.
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="mt-6">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          Our approach
        </h2>
        <p className="mt-4 text-[var(--foreground)]">
          IH Clinic emphasises holistic, personalised, and gentle cure. We
          follow the constitutional approach—treating the root cause of
          ailments and the patient as a whole, not just isolated symptoms.
          Detailed case-taking at the physical, mental, and emotional levels
          helps us understand each person uniquely, leading to an
          individualised, patient-centered plan of care.
        </p>
      </GlassCard>

      <GlassCard className="mt-6">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          Our focus
        </h2>
        <p className="mt-4 text-[var(--foreground)]">
          We mainly focus on women&apos;s health and pediatric care. Other
          fields are also included irrespective of gender, so you can approach
          us for a wide range of conditions while knowing that our core
          expertise lies in women and children.
        </p>
      </GlassCard>

      <GlassCard className="mt-6">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          How we treat
        </h2>
        <p className="mt-4 text-[var(--foreground)]">
          We treat patients gently, with the aim of complete cure and without
          side effects. Our medicines and approach are chosen to support the
          body&apos;s own healing capacity.
        </p>
      </GlassCard>

      <GlassCard className="mt-6">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          Our vision
        </h2>
        <p className="mt-4 text-[var(--foreground)]">
          Our vision is to bring awareness to people about the effectiveness of
          homeopathic medicines in this modern era, here in Tirupati. We also
          aim to counter the biased statement that homeopathy is slow and
          time-taking—with the right approach and individualised care, many
          conditions respond well and steadily.
        </p>
      </GlassCard>

      <GlassCard className="mt-6">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          Aude Sapere
        </h2>
        <p className="mt-4 text-[var(--foreground)]">
          &quot;Dare to be wise&quot;—we believe in empowering you with
          understanding and care that respects your body and your choices.
          Committed to excellence in every consultation.
        </p>
      </GlassCard>
    </div>
  );
}
