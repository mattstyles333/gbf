import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fdf8f0",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "#0ea5e9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            style={{ width: "32px", height: "32px" }}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "0.5rem",
          }}
        >
          Great Bone Fishing
        </h1>
        <p style={{ color: "#475569", marginBottom: "1.5rem" }}>
          The page you&apos;re looking for doesn&apos;t exist. Try the{" "}
          <Link href="/" style={{ color: "#0ea5e9", fontWeight: 600 }}>
            homepage
          </Link>{" "}
          or{" "}
          <Link href="/book" style={{ color: "#0ea5e9", fontWeight: 600 }}>
            contact us
          </Link>
          .
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#0ea5e9",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.375rem",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
          }}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
