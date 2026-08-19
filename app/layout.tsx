import type { Metadata, Viewport } from "next";
import { bodoni, cormorant, manrope } from "./fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://carolina-photo-co.vercel.app"),
  title: "cg.photoy — Carolina García Fotografía | Bodas, XV Años, Marcas",
  description:
    "Fotógrafa profesional en Bogotá, Colombia. Especializada en cobertura de bodas, quinceañeras, fotografía de marca y books editoriales. Cotiza por WhatsApp.",
  verification: {
    google: "AQUÍ_PONES_EL_CÓDIGO_DE_VERIFICACIÓN_DE_GOOGLE",
  },
  keywords: [
    "fotógrafa Bogotá",
    "fotografía de bodas Colombia",
    "fotografía quinceañeras Bogotá",
    "fotógrafa de marca Colombia",
    "book fotográfico Bogotá",
    "cg.photoy",
    "Carolina García fotografía",
  ],
  authors: [{ name: "Carolina García", url: "https://www.instagram.com/cg.photoy/" }],
  creator: "Carolina García — cg.photoy",
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "cg.photoy — Carolina García Fotografía",
    description:
      "Fotografía profesional en Bogotá, Colombia. Bodas, quinceañeras, marcas y books editoriales.",
    siteName: "cg.photoy",
    images: [
      {
        url: "/fotos/modelo3.webp",
        width: 1200,
        height: 630,
        alt: "Portafolio fotográfico — cg.photoy Carolina García",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cg.photoy — Carolina García Fotografía",
    description: "Fotografía profesional. Bodas, quinceañeras, marcas y books en Colombia.",
    images: ["/fotos/modelo3.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${bodoni.variable} ${cormorant.variable} ${manrope.variable}`}
    >
      <body className="bg-ink text-ivory font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
