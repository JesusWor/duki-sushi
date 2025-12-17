import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DUKI - Auténtico Sushi Culichi To Go",
  description:
    "Descubre el sabor único de nuestros rollos empanizados y especialidades japonesas con el toque picante de Culiacán. Servicio a domicilio y para llevar.",
  generator: "v0.app",
  keywords: ["sushi", "culichi", "culiacán", "rollos empanizados", "comida japonesa", "sushi a domicilio"],
  icons: {
    icon: [
      {
        url: "/images/duki-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/duki-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
