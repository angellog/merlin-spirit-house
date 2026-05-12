import { ImageResponse } from "next/og";

export const alt = "Merlin Spirit House — Traditional Spiritual Healer & Voodoo Spell Caster";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A12",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "3px solid #C9A84C",
            marginBottom: 40,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1.5"
            width="40"
            height="40"
          >
            <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
          </svg>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#C9A84C",
            letterSpacing: "-0.02em",
            fontFamily: "serif",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Merlin Spirit House
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#E8D5A3",
            fontStyle: "italic",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Ancient Power. Real Results.
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#6B6B7B",
            textAlign: "center",
          }}
        >
          Voodoo Spells · Love Spells · Traditional Healing · Curse Removal
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
