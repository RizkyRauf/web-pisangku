import Image from "next/image"

const galleryImages = [
  { src: "/images/pisangijo1.jpg", alt: "Pisang Ijo Hasanuddin — foto 1 pisang ijo khas Makassar" },
  { src: "/images/pisangijo2.jpg", alt: "Pisang Ijo Hasanuddin — foto 2 pisang ijo khas Makassar" },
  { src: "/images/pisangijo3.jpg", alt: "Pisang Ijo Hasanuddin — foto 3 pisang ijo khas Makassar" },
  { src: "/images/pisangijo4.jpg", alt: "Pisang Ijo Hasanuddin — foto 4 pisang ijo khas Makassar" },
  { src: "/images/pisangijo5.png", alt: "Pisang Ijo Hasanuddin — foto 5 pisang ijo khas Makassar" },
  { src: "/images/pisangijo6.jpeg", alt: "Pisang Ijo Hasanuddin — foto 6 pisang ijo khas Makassar" },
]

export default function Gallery() {
  return (
    <section id="galeri" className="scroll-mt-16 bg-green-50/50 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Galeri</p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Dokumentasi Produk
          </h2>
        </div>

        <div className="mt-10 columns-2 gap-3 sm:columns-3 lg:columns-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative mb-3 overflow-hidden rounded-xl bg-gray-100 break-inside-avoid ${
                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
