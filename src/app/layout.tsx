// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cerna & Asociados — Estudio Jurídico en Rancagua",
    template: "%s | Cerna & Asociados",
  },
  description:
    "Estudio jurídico en Rancagua especializado en derecho laboral, civil y corporativo. Defensa legal, asesoría y representación profesional.",
  keywords: [
    "abogados en Rancagua",
    "derecho laboral",
    "derecho civil",
    "estudio jurídico",
    "Cerna y Asociados",
  ],
  metadataBase: new URL("https://cernayasociados.cl"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://cernayasociados.cl/",
    title: "Cerna & Asociados — Estudio Jurídico en Rancagua",
    description:
      "Defensa y asesoría en derecho laboral, civil y corporativo.",
    siteName: "Cerna & Asociados",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
