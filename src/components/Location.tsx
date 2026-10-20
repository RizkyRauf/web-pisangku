import { business } from "@/lib/data"

export default function Location() {
  return (
    <section id="lokasi" className="reveal scroll-mt-16 bg-sand px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              07 — Lokasi
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-4xl">
              Mampir ke Jagakarsa
            </h2>
          </div>
          {/* <p className="max-w-xs text-sm leading-relaxed text-[#6b5f58] sm:text-right">
            Buka setiap hari, dari jam 10.00 sampai 21.00 WIB.
          </p> */}
        </div>

        <div className="relative mt-10 h-[420px] overflow-hidden rounded-[2rem] border border-black/5 bg-gray-200 sm:h-[520px]">
          <iframe
            src={business.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pisang Ijo Hasanuddin"
          />

          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-black/5 bg-white/95 p-5 shadow-2xl shadow-black/10 backdrop-blur-md sm:inset-x-auto sm:left-5 sm:bottom-5 sm:max-w-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Alamat</p>
            <p className="mt-1.5 text-sm font-semibold leading-relaxed text-ink">
              {business.address}
            </p>

            <div className="mt-3 flex items-center gap-2 text-xs text-[#6b5f58]">
              <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Setiap hari · 10.00 – 21.00 WIB
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-primary"
              >
                Buka Maps
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2.5 text-xs font-bold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
