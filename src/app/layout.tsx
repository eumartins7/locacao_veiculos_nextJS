import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";

// Imports do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martins Locações | Aluguel de Veículos em SJC",
  description:
    "Encontre o veículo ideal para sua necessidade em São José dos Campos. Locação sem burocracia com atendimento personalizado.",
  keywords: [
    "Aluguel de carros",
    "SJC",
    "Martins Locações",
    "Locação de veículos São José dos Campos",
  ],
  authors: [{ name: "Gabriel Henrique" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
