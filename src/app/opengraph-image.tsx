import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";

export const alt = `${DATA.name} — Full-stack Developer in Kathmandu, Nepal`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #1e293b 0%, transparent 45%), radial-gradient(circle at 85% 80%, #172554 0%, transparent 45%)",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 2,
            color: "#94a3b8",
            marginBottom: 28,
          }}
        >
          abiralale.com.np
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>
          {DATA.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#cbd5e1",
            marginTop: 28,
            maxWidth: 960,
            lineHeight: 1.3,
          }}
        >
          Founder at Ctrl Bits. Building things in
          Kathmandu, Nepal.
        </div>
      </div>
    ),
    { ...size }
  );
}
