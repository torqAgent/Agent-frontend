import "@livekit/components-styles";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Hotel Receptionist — Powered by Sarvam AI",
  description:
    "Talk to an AI hotel receptionist in Hindi or English. Book rooms, ask questions, get help — instantly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}