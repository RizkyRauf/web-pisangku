import { business } from "@/lib/data"

export default function Header() {
  return (
    <>
      <div className="hidden bg-primary text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5">
          <div className="flex items-center gap-4 text-xs">
            <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {business.phone}
            </a>
            <span className="text-white/30">|</span>
            <span>{business.address.split(",")[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Buka — {business.hours[0].time}
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="font-heading text-xl font-bold text-primary tracking-tight">
            {business.name}
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {[
              { label: "Beranda", href: "#" },
              { label: "Menu", href: "#menu" },
              { label: "Tentang", href: "#tentang" },
              { label: "Testimoni", href: "#testimoni" },
              { label: "Lokasi", href: "#lokasi" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
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
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-95"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan Sekarang
          </a>
        </nav>
      </header>
    </>
  )
}
