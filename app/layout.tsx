import "@livekit/components-styles";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://torqdesigns.com"),
  title: {
    default: "Torq Agents — AI Hotel Receptionist",
    template: "%s | Torq Agents",
  },
  description:
    "Enterprise-grade AI voice receptionist for hotels. Speaks Hindi & English. Handles bookings, FAQs, and guest queries — 24/7, zero wait time.",
  keywords: [
    "AI hotel receptionist",
    "voice AI hospitality",
    "hotel automation",
    "Sarvam AI",
    "multilingual AI agent",
    "front desk automation",
  ],
  authors: [{ name: "Torq Designs" }],
  creator: "Torq Designs",
  openGraph: {
    title: "Torq Agents — AI Hotel Receptionist",
    description:
      "Enterprise-grade AI voice receptionist. Speaks Hindi & English. Handles bookings and guest queries 24/7.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Torq Agents — AI Hotel Receptionist",
      },
    ],
    type: "website",
    locale: "en_IN",
    siteName: "Torq Agents",
  },
  twitter: {
    card: "summary_large_image",
    title: "Torq Agents — AI Hotel Receptionist",
    description:
      "Enterprise-grade AI voice receptionist. Speaks Hindi & English. 24/7 availability.",
    images: ["/logo.jpeg"],
    creator: "@torqdesigns",
  },
  icons: {
    icon: [
      { url: "/logo.jpeg", type: "image/jpeg" },
    ],
    apple: "/logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090805",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}