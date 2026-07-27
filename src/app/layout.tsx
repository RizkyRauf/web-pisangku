import type { Metadata, Viewport } from "next"
import { Outfit, Playfair_Display } from "next/font/google"
import "./globals.css"
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema"
import { business } from "@/lib/data"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN
  ? `https://${process.env.NEXT_PUBLIC_DOMAIN}`
  : "https://pisangijohasanuddin.com"

export const metadata: Metadata = {
  title: `${business.name} | ${business.tagline}`,
  description:
    "Pisang Ijo Hasanuddin — Pisang Ijo khas Makassar asli di Jakarta Selatan. Nikmati pisang ijo legit & dadar kacang fla homemade. Pesan via WhatsApp.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${business.name} | ${business.tagline}`,
    description:
      "Pisang Ijo khas Makassar asli di Jakarta Selatan. Pisang ijo legit & dadar kacang fla homemade.",
    type: "website",
    locale: "id_ID",
    siteName: business.name,
    url: siteUrl,
    images: [
      {
        url: "/public/vercel.svg",
        width: 1200,
        height: 900,
        alt: "Pisang Ijo Hasanuddin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.tagline}`,
    description:
      "Pisang Ijo khas Makassar asli di Jakarta Selatan. Pesan via WhatsApp.",
    images: ["/images/pisang.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo_fav.png",
    apple: "/images/logo_fav.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#166534",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = localBusinessSchema()
  const breadcrumbLd = breadcrumbSchema()

  return (
    <html lang="id" className={`${outfit.variable} ${playfair.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <meta
          name="google-site-verification"
          content="googleac25364782827d66"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  )
}
