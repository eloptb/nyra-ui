import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nyra UI — Genero Enterprise Design System",
  description: "Composants React basés sur la charte graphique Genero Enterprise.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
