import Image from "next/image"
import { business } from "@/lib/data"

const steps = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Pilih menu",
    desc: "Lihat varian pisang ijo & dadar kacang fla",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Chat WhatsApp",
    desc: "Tekan tombol pesan, langsung terhubung",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Sebutkan pesanan",
    desc: "Infokan menu & jumlah pesanan kamu",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Siap dinikmati",
    desc: "Konfirmasi & tunggu pesanan siap",
  },
]

export default function HowToOrder() {
  return (
    <section className="reveal bg-sand px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            05 — Cara Pesan
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-4xl">
            Pesan dalam 4 langkah
          </h2>
          <p className="mt-3 max-w-md leading-relaxed text-[#6b5f58]">
            Proses cepat, tinggal chat WhatsApp. Nggak perlu install aplikasi tambahan.
          </p>

          <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {steps.map((step, i) => (
              <div key={step.title} className="border-t border-black/10 pt-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-primary">
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#b3a79e]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#6b5f58]">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-primary active:scale-95"
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
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-7 py-3.5 text-base font-semibold text-ink transition-all hover:border-primary hover:text-primary active:scale-95"
            >
              DM Instagram
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-3 rounded-[2.5rem] bg-[#E7DECC]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl shadow-black/10">
            <div className="flex items-center gap-3 bg-primary px-5 py-4">
              <Image
                src="/images/logo_fav.png"
                alt={`Logo ${business.name}`}
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-white">{business.name}</p>
                <p className="flex items-center gap-1.5 text-[10px] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C2A06C]" />
                  Online
                </p>
              </div>
            </div>

            <div className="space-y-3 p-5">
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-sand px-3.5 py-2.5 text-xs leading-relaxed text-[#4a3d37]">
                  Halo, mau pesan pisang ijo dong
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-xs leading-relaxed text-white">
                  Hai! Silakan pilih menu yang kamu mau ya
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-sand px-3.5 py-2.5 text-xs leading-relaxed text-[#4a3d37]">
                  Pisang Ijo 2 porsi & Dadar Kacang 1 porsi
                </div>
              </div>
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-primary/10 px-3.5 py-2.5 text-xs">
                  <span className="font-semibold text-primary">Typing...</span>
                </div>
              </div>
            </div>

            <div className="border-t border-black/5 p-4">
              <div className="flex items-center gap-2 rounded-full bg-sand px-4 py-2.5">
                <span className="text-xs text-[#8a7d74]">Ketik pesan...</span>
                <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
