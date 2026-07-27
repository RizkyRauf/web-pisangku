import { business } from "./data"

const dayMap: Record<string, string> = {
  Senin: "Monday",
  Selasa: "Tuesday",
  Rabu: "Wednesday",
  Kamis: "Thursday",
  Jumat: "Friday",
  Sabtu: "Saturday",
  Minggu: "Sunday",
}

const siteUrl = () =>
  process.env.NEXT_PUBLIC_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_DOMAIN}`
    : "https://pisangijohasanuddin.vercel.app"

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    description: business.description,
    image: `${siteUrl()}/images/menu_pisang_ijo.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Kavling-Komplek DKI.99 6, RT.5/RW.3, Cipedak, Kec. Jagakarsa",
      addressLocality: "Jakarta Selatan",
      addressRegion: "Jakarta",
      postalCode: "12630",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geoLat,
      longitude: business.geoLong,
    },
    telephone: business.phone,
    priceRange: "Rp",
    openingHoursSpecification: business.hours
      .filter((h) => h.time !== "Tutup")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayMap[h.day] || h.day}`,
        opens: h.time.split("–")[0].replace(".", ":").trim(),
        closes: (h.time.split("–")[1] || h.time).replace(".", ":").trim(),
      })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      contactType: "customer service",
      url: business.whatsapp,
    },
    sameAs: [business.instagram, business.tiktok, business.threads, business.googleMapsUrl].filter(
      Boolean
    ),
    url: siteUrl(),
  }
}

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: siteUrl(),
      },
    ],
  }
}
