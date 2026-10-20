import Image from "next/image"
import { business } from "@/lib/data"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-14 sm:pb-24 sm:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-light/25 blur-[130px]" />
        <div className="absolute -bottom-56 -right-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2A06C]" />
            {business.tagline}
          </span>

          <h1 className="mt-6 text-[2.85rem] font-extrabold leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-[4.4rem]">
            Pisang Ijo
            <br />
            <span className="bg-gradient-to-r from-[#F7EEDF] via-[#E4CFAB] to-[#C2A06C] bg-clip-text text-transparent">
              Hasanuddin
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            {business.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E8D6B8] px-7 py-3.5 text-base font-bold text-ink transition-all hover:bg-[#F4E9D8] active:scale-95"
            >
              Pesan via WhatsApp
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
            >
              Lihat Menu
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-7">
            {[
              { value: "2022", label: "Berdiri sejak" },
              { value: "3", label: "Varian menu" },
              { value: "10–21", label: "Buka setiap hari" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-extrabold tracking-tight text-white">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/40">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <Image
              src="/images/menu_pisang_ijo.jpg"
              alt="Pisang Ijo Hasanuddin — pisang ijo khas Makassar asli di Jakarta Selatan"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              preload
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

            <div className="absolute right-4 top-4 rounded-2xl border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                Homemade
              </p>
              <p className="text-[11px] text-white/60">Fresh setiap hari</p>
            </div>

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-white/50">Mulai dari</p>
                <p className="text-lg font-extrabold tracking-tight text-white">Rp20.000</p>
              </div>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink transition-transform hover:scale-105"
              >
                Pesan
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
