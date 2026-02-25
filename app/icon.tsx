import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

type IconProps = {
  id?: Promise<string>;
};

function IconContent({ width }: { width: number }) {
  const fontSize = Math.round(width * 0.5);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f7f4",
        borderRadius: width >= 192 ? 24 : 6,
        border: "2px solid #c9a9a6",
        fontSize,
        fontWeight: 700,
        color: "#c9a9a6",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      IH
    </div>
  );
}

export async function generateImageMetadata() {
  return [
    { id: "32", size: { width: 32, height: 32 } },
    { id: "192", size: { width: 192, height: 192 } },
    { id: "512", size: { width: 512, height: 512 } },
  ];
}

export default async function Icon({ id }: IconProps) {
  const resolvedId = id ? await id : "32";
  const w = resolvedId === "512" ? 512 : resolvedId === "192" ? 192 : 32;
  return new ImageResponse(<IconContent width={w} />, {
    width: w,
    height: w,
  });
}
