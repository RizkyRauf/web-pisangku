import Image from "next/image"
import { business } from "@/lib/data"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-amber-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
        <svg className="absolute right-0 top-1/4 h-64 w-64 text-primary/5" viewBox="0 0 200 200" fill="none">
          <path d="M100 0C100 0 160 20 180 60C200 100 200 160 180 180C160 200 150 200 100 200C50 200 0 180 0 140C0 100 20 50 60 25C80 12 100 0 100 0Z" fill="currentColor" />
        </svg>
        <svg className="absolute left-0 bottom-1/3 h-48 w-48 text-accent/5 rotate-45" viewBox="0 0 200 200" fill="none">
          <rect width="200" height="200" rx="40" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {business.tagline}
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              {business.name}
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg">
              {business.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25 active:scale-95"
              >
                Pesan via WhatsApp
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 transition-all hover:border-primary hover:text-primary active:scale-95"
              >
                Lihat Menu
              </a>
            </div>


          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rotate-6" />
              <div className="absolute inset-4 rounded-[1.5rem] bg-gradient-to-br from-primary/15 via-white to-accent/10 -rotate-3" />
              <div className="relative flex h-full w-full items-center justify-center rounded-[1.5rem] bg-white shadow-2xl shadow-primary/10 border border-gray-100 overflow-hidden">
                <Image
                  src="/images/menu_pisang_ijo.jpg"
                  alt="Pisang Ijo Hasanuddin — pisang ijo khas Makassar asli di Jakarta Selatan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  preload
                  loading="eager"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg border border-gray-100 hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">
                🍌 Pisang Pilihan
              </p>
              <p className="text-xs text-gray-400">Premium grade</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
