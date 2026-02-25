"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/womens-health", label: "Women's Health" },
  { href: "/childrens-health", label: "Children's Health" },
  { href: "/conditions", label: "Conditions" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--glass-bg)] backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[var(--foreground)] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
        >
          <span className="text-[var(--primary)]">IH Clinic</span>
          <span className="block text-xs font-normal text-[var(--muted-foreground)]">
            by Dr. Indu Rekha
          </span>
        </Link>

        <nav
          role="navigation"
          aria-label="Main"
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              {label}
            </Link>
          ))}
          <WhatsAppButton className="hidden md:inline-flex" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <WhatsAppButton className="inline-flex" />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded p-2 text-[var(--foreground)] hover:bg-[var(--primary)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-[var(--border)] bg-[var(--glass-bg)] backdrop-blur-md md:hidden ${mobileOpen ? "block" : "hidden"}`}
        role="navigation"
        aria-label="Mobile"
      >
        <ul className="flex flex-col px-4 py-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
