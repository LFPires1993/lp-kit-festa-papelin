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
  title: "Kit Festa Completo!",
  description:
    "Encomende seu kit festa completo com bolo, 50 docinhos e decoração em papelaria personalizada. Escolha entre 22 temas infantis e celebre sem preocupação.",
  keywords: [
    "bolo de aniversário",
    "festa",
    "kit festa completo",
    "festinha",
    "aniversário",
    "kit festa infantil",
    "festa infantil",
    "decoração festa infantil",
    "decoração",
    "kit festa personalizado",
    "bolo de aniversário",
    "docinhos para festa",
    "decoração de festa infantil",
    "papelaria personalizada para festa",
    "topo de bolo personalizado",
    "festa infantil temática",
    "kit festa com bolo e docinhos",
    "Cake Mania",
    "PapelIn",
    "Bluey",
    "Patrulha Canina",
    "Homem-Aranha",
    "Vingadores",
    "Toy Story",
    "Stitch",
    "Baby Shark",
    "Hello Kitty",
    "Harry Potter",
    "Mickey",
    "Fazendinha",
    "Safari",
    "Dinossauros",
  ],
  openGraph: {
    title: "Kit Festa Completo | Cake Mania + PapelIn",
    description:
      "Bolo, docinhos e papelaria personalizada para uma festinha completa. Escolha seu tema favorito.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
