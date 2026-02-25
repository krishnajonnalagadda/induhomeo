import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/womens-health", label: "Women's Health" },
  { href: "/childrens-health", label: "Children's Health" },
  { href: "/conditions", label: "Conditions" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--border)] bg-[var(--glass-bg)]/80 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-[var(--primary)]">
              IH Clinic
            </p>
            <p className="text-xs text-[var(--muted-foreground)]">
              by Dr. Indu Rekha
            </p>
            <p className="mt-2 text-sm italic text-[var(--muted-foreground)]">
              Aude Sapere · Committed to Excellence
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Quick links
            </h3>
            <ul className="mt-2 space-y-1">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Contact
            </h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Yashoda Classics, Ground Floor, Air Bypass Rd, near Bashyam
              school, New Balaji Colony, Tirupati, AP 517502
            </p>
            <p className="mt-2 text-sm">
              <a
                href="https://share.google/Ewh01Oh06mOvdbxlf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                Google Maps
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href="tel:+919491457407"
                className="text-[var(--primary)] hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                +91 9491457407
              </a>
              {" · "}
              <a
                href="tel:08772242212"
                className="text-[var(--muted-foreground)] hover:underline"
              >
                0877-2242212
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a
                href="mailto:drindushomeopathy@gmail.com"
                className="text-[var(--muted-foreground)] hover:text-[var(--primary)]"
              >
                drindushomeopathy@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Reach us
            </h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Chat on WhatsApp for appointments and queries.
            </p>
            <div className="mt-3">
              <WhatsAppButton />
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-sm text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} IH Clinic by Dr. Indu Rekha. Women & child
          care in homeopathy.
        </div>
      </div>
    </footer>
  );
}
