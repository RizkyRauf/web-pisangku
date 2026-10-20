import Image from "next/image"
import { business } from "@/lib/data"

const highlights = [
  { title: "Resep asli", desc: "Turun-temurun dari Makassar" },
  { title: "Bahan premium", desc: "Pisang pilihan & topping fresh" },
  { title: "Higienis", desc: "Dapur bersih, proses terjaga" },
  { title: "Cocok semua umur", desc: "Dari anak-anak sampai dewasa" },
]

export default function About() {
  return (
    <section id="tentang" className="reveal scroll-mt-16 bg-sand px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100">
            <Image
              src="/images/kajen.jpeg"
              alt="Pisang Ijo Hasanuddin — pisang ijo khas Makassar asli buatan rumahan"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-xl shadow-black/5 sm:-right-5">
            <p className="text-2xl font-extrabold tracking-tight text-primary">2022</p>
            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8a7d74]">
              Berdiri sejak
            </p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            01 — Tentang
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-4xl lg:text-[2.9rem]">
            Bukan sekadar dessert.
            <br />
            <span className="text-primary-light">Ini resep keluarga.</span>
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-[#5a4d46]">{business.story}</p>

          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="border-t border-black/10 pt-4">
                <p className="text-sm font-bold text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#6b5f58]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
