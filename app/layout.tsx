import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World Starter",
  description: "Leere Next.js Starter-Seite ohne dynamische Inhalte."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
