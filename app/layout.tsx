import "@livekit/components-styles";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Hotel Receptionist — Powered by Sarvam AI",
  description:
    "Talk to an AI hotel receptionist in Hindi or English. Book rooms, ask questions, get help — instantly.",
  openGraph: {
    title: "AI Hotel Receptionist — Powered by Sarvam AI",
    description:
      "Talk to an AI hotel receptionist in Hindi or English. Book rooms, ask questions, get help — instantly.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Torq Agents — AI Hotel Receptionist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Hotel Receptionist — Powered by Sarvam AI",
    description:
      "Talk to an AI hotel receptionist in Hindi or English. Book rooms, ask questions, get help — instantly.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}