import Image from "next/image"
import { business } from "@/lib/data"

const benefits = [
  {
    title: "Semua e-wallet & m-banking",
    desc: "GoPay, OVO, DANA, ShopeePay, BCA, Mandiri, dan lainnya",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "Tanpa biaya tambahan",
    desc: "Harga tetap sama, nggak ada charge admin",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Aman & langsung terkonfirmasi",
    desc: "Cukup scan, lalu konfirmasi via WhatsApp",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function Payment() {
  return (
    <section id="pembayaran" className="reveal scroll-mt-16 bg-background px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-sand">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              06 — Pembayaran
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-4xl">
              Bayar praktis,
              <br />
              cukup scan QRIS
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-[#6b5f58]">
              Nggak perlu bawa uang tunai. Scan kode QRIS pakai e-wallet atau m-banking
              favoritmu, lalu konfirmasi pesanan lewat WhatsApp.
            </p>

            <div className="mt-8 divide-y divide-black/5 border-y border-black/5">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-primary">
                    {b.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{b.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#6b5f58]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-primary active:scale-95"
            >
              Konfirmasi via WhatsApp
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden bg-ink p-8 sm:p-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-primary-light/30 blur-[90px]" />
              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/20 blur-[90px]" />
            </div>

            <div className="relative w-full max-w-xs rounded-2xl bg-white p-4 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between px-1 pb-3">
                <span className="font-heading text-sm font-extrabold tracking-tight text-ink">QRIS</span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                  Scan &amp; Bayar
                </span>
              </div>
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
                <Image
                  src="/images/qris.jpeg"
                  alt="Kode QRIS Pisang Ijo Hasanuddin untuk pembayaran via e-wallet dan mobile banking"
                  width={874}
                  height={1215}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 80vw, 320px"
                />
              </div>
              <p className="mt-3 text-center text-[11px] font-medium text-[#8a7d74]">
                {business.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
