import { LOGO_BRACES_PATH } from "@/components/ui/logo";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0d10",
      }}
    >
      <svg width="150" height="150" viewBox="0 0 16 16" fill="none">
        <path
          d={LOGO_BRACES_PATH}
          stroke="#eceef2"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="8" r="1.4" fill="#4ade80" />
      </svg>
    </div>,
    size,
  );
}
