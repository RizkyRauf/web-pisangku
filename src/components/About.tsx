import Image from "next/image"
import { business } from "@/lib/data"

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-16 bg-gradient-to-b from-white to-green-50/50 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src="/images/pisang.jpeg"
              alt="Pisang Ijo Hasanuddin — pisang ijo khas Makassar asli buatan rumahan"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white p-4 shadow-lg hidden sm:block">
              <p className="font-heading text-2xl font-bold text-primary">12+</p>
              <p className="text-xs text-gray-500">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Tentang Kami</p>
            <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              100% Fresh
              <br />
              <span className="text-primary">Pisang Ijo Khas Makassar</span>
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">{business.story}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: "Resep Asli", desc: "Turun-temurun dari Makassar" },
                { title: "Bahan Premium", desc: "Pisang pilihan & topping fresh" },
                { title: "Higienis", desc: "Dapur bersih, proses terjaga" },
                { title: "Cocok Semua Umur", desc: "Dari anak-anak sampai dewasa" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
