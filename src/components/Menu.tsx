import Image from "next/image"
import { business } from "@/lib/data"

export default function Menu() {
  return (
    <section id="menu" className="reveal scroll-mt-16 bg-background px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              02 — Menu
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-4xl">
              Menu andalan kami
            </h2>
          </div>
          {/* <p className="max-w-xs text-sm leading-relaxed text-[#6b5f58] sm:text-right">
            Dibuat fresh setiap hari dengan bahan pilihan. Harga sama untuk semua varian.
          </p> */}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {business.menu.length > 0 ? (
            business.menu.map((item, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-[1.75rem] bg-ink"
              >
                <div className="relative aspect-[4/5] sm:aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                      {item.price}
                    </span>
                    <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-white/65">
                      {item.description}
                    </p>
                    <a
                      href={business.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-[#E8D6B8]"
                    >
                      Pesan
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className="col-span-full text-center italic text-[#8a7d74]">
              Menu belum tersedia
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
