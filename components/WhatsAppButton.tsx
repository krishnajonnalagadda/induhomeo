"use client";

const WHATSAPP_URL = "https://wa.me/919491457407";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function WhatsAppButton({ className = "", children }: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${className}`}
      aria-label="Chat on WhatsApp"
    >
      {children ?? "Chat on WhatsApp"}
    </a>
  );
}
