import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Maquiflex | Conheça a Empresa",
  description:
    "Conheça a Maquiflex — fabricante brasileira de máquinas envasadoras horizontais para embalagens flexíveis. Engenharia própria em Monte Alto/SP.",
  keywords: [
    "Maquiflex",
    "máquinas envasadoras",
    "HFFS",
    "embalagens flexíveis",
    "form fill seal",
    "pouch",
    "Monte Alto",
  ],
  icons: {
    icon: "/logos/symbol-white.svg",
    apple: "/logos/symbol-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
