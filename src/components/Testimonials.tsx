import { business } from "@/lib/data"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-accent-light" : "text-[#ded5c9]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="reveal scroll-mt-16 bg-background px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              04 — Testimoni
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-4xl">
              Kata pelanggan
            </h2>
          </div>
          {/* <p className="max-w-xs text-sm leading-relaxed text-[#6b5f58] sm:text-right">
            Cerita langsung dari mereka yang sudah mencoba.
          </p> */}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {business.testimonials.length > 0 ? (
            business.testimonials.map((t, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-[1.75rem] border border-black/[0.04] bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <StarRating rating={t.rating} />
                  <span className="font-heading text-4xl leading-none text-accent/20">&ldquo;</span>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#4a3d37]">
                  {t.text}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-black/5 pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a7d74]">{t.source}</p>
                  </div>
                </figcaption>
              </figure>
            ))
          ) : (
            <p className="col-span-full text-center italic text-[#8a7d74]">
              Belum ada testimoni
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
