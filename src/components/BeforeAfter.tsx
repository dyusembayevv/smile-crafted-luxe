import { useRef, useState, useCallback } from "react";

interface Props {
  before: string;
  after: string;
  label: string;
}

export function BeforeAfter({ before, after, label }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <figure className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div
        ref={ref}
        className="relative aspect-[10/7] w-full cursor-ew-resize select-none overflow-hidden"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img
          src={after}
          alt={`${label} — после лечения`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt={`${label} — до лечения`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: ref.current?.offsetWidth ?? "100%", maxWidth: "none" }}
          />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-foreground/70 px-3 py-1 text-xs font-semibold tracking-wide text-background">
          ДО
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground">
          ПОСЛЕ
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-background"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-primary shadow-soft">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6-6 6 6 6" />
              <path d="m15 6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
      <figcaption className="px-6 py-4 text-sm font-medium text-muted-foreground">
        {label}
      </figcaption>
    </figure>
  );
}
