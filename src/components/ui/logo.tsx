export const LOGO_BRACES_PATH =
  "M6.5 3.25c-1.5 0-2 .6-2 1.75v1.5c0 .9-.5 1.5-1.5 1.5 1 0 1.5.6 1.5 1.5V11c0 1.15.5 1.75 2 1.75M9.5 3.25c1.5 0 2 .6 2 1.75v1.5c0 .9.5 1.5 1.5 1.5-1 0-1.5.6-1.5 1.5V11c0 1.15-.5 1.75-2 1.75";

// Inline brand mark: the braces follow the text color, the dot uses the highlight color.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="2 2 12 12" fill="none" aria-hidden="true" className={className}>
      <path
        d={LOGO_BRACES_PATH}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="1.4" className="fill-highlight" />
    </svg>
  );
}
