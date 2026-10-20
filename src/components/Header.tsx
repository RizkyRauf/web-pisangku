import Image from "next/image"
import { business } from "@/lib/data"

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Tentang", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Lokasi", href: "#lokasi" },
]

export default function Header() {
  return (
    <>
      <div className="hidden bg-ink text-xs text-white/60 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {business.phone}
            </a>
            <span className="text-white/20">/</span>
            <span className="text-white/40">{business.address.split(",")[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2A06C]" />
              Buka hari ini · {business.hours[0].time}
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="group flex items-center gap-3">
            <Image
              src="/images/logo_fav.png"
              alt={`Logo ${business.name}`}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover ring-1 ring-black/5"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-extrabold tracking-tight text-ink">
                {business.name}
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a7d74]">
                Khas Makassar
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-[#6b5f58] transition-colors hover:bg-gray-100 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary active:scale-95"
          >
            <span className="hidden sm:inline">Pesan Sekarang</span>
            <span className="sm:hidden">Pesan</span>
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </nav>
      </header>
    </>
  )
}
