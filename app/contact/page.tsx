import { GlassCard } from "@/components/GlassCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Contact IH Clinic by Dr. Indu Rekha, Tirupati. WhatsApp, phone, email, address.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
        Contact us
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        Reach us on WhatsApp for appointments and queries.
      </p>

      <div className="mt-8 space-y-6">
        <GlassCard>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">
                WhatsApp (primary)
              </h3>
              <a
                href="tel:+919491457407"
                className="text-[var(--primary)] hover:underline"
              >
                +91 9491457407
              </a>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Chat for appointments and queries.
              </p>
              <div className="mt-3">
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/20 text-[var(--primary)]">
              <Phone size={20} aria-hidden />
            </span>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">
                Landline
              </h3>
              <a
                href="tel:08772242212"
                className="text-[var(--foreground)] hover:text-[var(--primary)]"
              >
                0877-2242212
              </a>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/20 text-[var(--primary)]">
              <Mail size={20} aria-hidden />
            </span>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">Email</h3>
              <a
                href="mailto:drindushomeopathy@gmail.com"
                className="text-[var(--foreground)] hover:text-[var(--primary)]"
              >
                drindushomeopathy@gmail.com
              </a>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--secondary)]/20 text-[var(--secondary)]">
              <MapPin size={20} aria-hidden />
            </span>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">
                Address
              </h3>
              <address className="mt-2 not-italic text-[var(--foreground)]">
                Yashoda Classics, Ground Floor
                <br />
                Air Bypass Rd, near Bashyam school
                <br />
                New Balaji Colony, Tirupati, Andhra Pradesh 517502
              </address>
              <p className="mt-3">
                <a
                  href="https://share.google/Ewh01Oh06mOvdbxlf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--primary)] hover:underline"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
