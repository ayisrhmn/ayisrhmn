import { STACK_LAYERS } from "./constants";

// Technologies shown in the hero stack diagram.
export const TECH_ITEMS = STACK_LAYERS.flatMap((layer) => layer.items);

// CSS-safe identifier for a technology name, e.g. "Next.js" -> "next-js".
export const techKey = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Treats naming variants as the same technology, e.g. "React.js" and "React", "Golang" and "Go".
const normalize = (name: string) => {
  const value = name.toLowerCase().replace(/\.js$/, "");
  return value === "golang" ? "go" : value;
};

// True when a technology appears in an entry's labels or is named in its description.
export function usesTech(item: string, labels: string[], text: string) {
  const escaped = item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (
    labels.some((label) => normalize(label) === normalize(item)) ||
    new RegExp(`\\b${escaped}\\b`).test(text)
  );
}

// Space-separated tech keys for a `data-techs` attribute.
export const techKeysFor = (labels: string[], text: string) =>
  TECH_ITEMS.filter((item) => usesTech(item, labels, text))
    .map(techKey)
    .join(" ");
