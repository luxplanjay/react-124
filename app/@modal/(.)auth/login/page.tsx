"use client";

import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h1>Login Modal</h1>
        <button onClick={() => router.back()}>Close</button>
      </div>
    </div>
  );
}
