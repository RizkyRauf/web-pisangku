import Image from "next/image"
import { business } from "@/lib/data"

const galleryImages = [
  { src: "/images/pisangijo1.jpg", alt: "Pisang Ijo Hasanuddin — foto 1 pisang ijo khas Makassar" },
  { src: "/images/pisangijo2.jpg", alt: "Pisang Ijo Hasanuddin — foto 2 pisang ijo khas Makassar" },
  { src: "/images/pisangijo3.jpg", alt: "Pisang Ijo Hasanuddin — foto 3 pisang ijo khas Makassar" },
  { src: "/images/pisangijo4.jpg", alt: "Pisang Ijo Hasanuddin — foto 4 pisang ijo khas Makassar" },
  { src: "/images/pisangijo5.png", alt: "Pisang Ijo Hasanuddin — foto 5 pisang ijo khas Makassar" },
  { src: "/images/pisangijo6.jpeg", alt: "Pisang Ijo Hasanuddin — foto 6 pisang ijo khas Makassar" },
]

const spans = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
]

export default function Gallery() {
  return (
    <section id="galeri" className="reveal scroll-mt-16 bg-sand px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              03 — Galeri
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tighter text-ink sm:text-4xl">
              Cicipi pakai mata dulu
            </h2>
          </div>
          {/* <p className="max-w-xs text-sm leading-relaxed text-[#6b5f58] sm:text-right">
            Potret asli pisang ijo dan dadar kacang fla buatan dapur kami.
          </p> */}
        </div>

        <div className="mt-10 grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[165px] md:grid-cols-4 lg:auto-rows-[185px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-gray-200 ${spans[i]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </div>
          ))}

          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group col-span-2 row-span-1 flex flex-col justify-between rounded-2xl bg-ink p-5 transition-colors hover:bg-primary sm:p-6"
          >
            <svg className="h-6 w-6 text-[#C2A06C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-white">Lihat keseharian kami</p>
                <p className="mt-0.5 text-xs text-white/50">@pisangijo.hasanuddin</p>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:translate-x-0.5">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
