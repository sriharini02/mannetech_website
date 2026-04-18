import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B2545",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          fontSize: 38,
          fontWeight: 700,
          color: "#FBF6EB",
          position: "relative",
        }}
      >
        H
        <div
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#F4B942",
          }}
        />
      </div>
    ),
    size
  );
}
