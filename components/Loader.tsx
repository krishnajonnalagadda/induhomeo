"use client";

import { Puff } from "react-loading-icons";

export function Loader() {
  return (
    <div
      className="flex min-h-[200px] flex-col items-center justify-center gap-4"
      role="status"
      aria-label="Loading"
    >
      <Puff
        stroke="var(--primary)"
        strokeOpacity={0.25}
        speed={0.75}
        className="h-12 w-12"
      />
      <span className="text-sm text-[var(--muted-foreground)]">
        Loading…
      </span>
    </div>
  );
}
