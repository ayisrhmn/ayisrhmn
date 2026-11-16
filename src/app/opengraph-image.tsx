import { APP_NAME } from "@/cfgs/seo.cfg";
import { LOGO_BRACES_PATH } from "@/components/ui/logo";
import { HERO, STACK_LAYERS } from "@/lib/constants";
import { ImageResponse } from "next/og";

export const alt = `${APP_NAME} — ${HERO.headline.join(" ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetches the display font at build time; the image falls back to the default font on failure.
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap",
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const displayFont = await loadDisplayFont();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        padding: "72px",
        background: "#0b0d10",
        color: "#eceef2",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <svg width="72" height="72" viewBox="2 2 12 12" fill="none">
          <path
            d={LOGO_BRACES_PATH}
            stroke="#eceef2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="8" r="1.4" fill="#4ade80" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <div style={{ fontSize: 26, letterSpacing: 2, color: "#a3abba" }}>
            {HERO.name.toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
              fontFamily: displayFont ? "Space Grotesk" : undefined,
              fontSize: 124,
              fontWeight: 700,
              lineHeight: 0.94,
              letterSpacing: -5,
            }}
          >
            <span>{HERO.headline[0]}</span>
            <div style={{ display: "flex" }}>
              <span>{HERO.headline[1]}</span>
              <span style={{ color: "#4ade80" }}>.</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignSelf: "center",
          width: 460,
          border: "1px solid #363d4b",
          background: "#11141a",
        }}
      >
        <div style={{ display: "flex", width: 28, background: "#4ade80" }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {STACK_LAYERS.map((layer, index) => (
            <div
              key={layer.title}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "26px 28px",
                borderTop: index === 0 ? "none" : "1px dashed #363d4b",
              }}
            >
              <div style={{ fontSize: 18, letterSpacing: 2, color: "#4ade80" }}>
                {`0${index + 1} ${layer.title.toUpperCase()}`}
              </div>
              <div style={{ marginTop: 10, fontSize: 24 }}>
                {layer.items.slice(0, 3).join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: displayFont
        ? [{ name: "Space Grotesk", data: displayFont, weight: 700, style: "normal" }]
        : undefined,
    },
  );
}
