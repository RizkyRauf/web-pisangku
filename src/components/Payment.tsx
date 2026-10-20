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
    <section id="pembayaran" className="scroll-mt-16 bg-white px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-green-50 via-white to-amber-50 shadow-sm">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Pembayaran
              </p>
              <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Bayar Praktis
                <br />
                <span className="text-primary">Cukup Scan QRIS</span>
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-gray-500">
                Nggak perlu bawa uang tunai. Scan kode QRIS di samping pakai e-wallet atau
                m-banking favoritmu, lalu konfirmasi pesanan lewat WhatsApp.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {b.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{b.title}</p>
                      <p className="text-sm text-gray-500">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl active:scale-95"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konfirmasi via WhatsApp
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 mx-auto max-w-xs rounded-[2rem] bg-primary/10 rotate-3" />
              <div className="relative w-full max-w-xs rounded-2xl border border-gray-100 bg-white p-4 shadow-xl shadow-primary/10">
                <div className="flex items-center justify-between px-1 pb-3">
                  <span className="font-heading text-sm font-bold text-gray-900">QRIS</span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                    Scan &amp; Bayar
                  </span>
                </div>
                <div className="overflow-hidden rounded-xl bg-gray-50">
                  <Image
                    src="/images/qris.jpeg"
                    alt="Kode QRIS Pisang Ijo Hasanuddin untuk pembayaran via e-wallet dan mobile banking"
                    width={874}
                    height={1215}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 80vw, 320px"
                  />
                </div>
                <p className="mt-3 text-center text-xs text-gray-400">
                  {business.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
