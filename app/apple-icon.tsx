import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f7f4",
          borderRadius: 24,
          border: "3px solid #c9a9a6",
          fontSize: 72,
          fontWeight: 700,
          color: "#c9a9a6",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        IH
      </div>
    ),
    { ...size }
  );
}
