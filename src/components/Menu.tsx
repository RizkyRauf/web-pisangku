import Image from "next/image"
import { business } from "@/lib/data"

export default function Menu() {
  return (
    <section id="menu" className="scroll-mt-16 bg-white px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Menu Kami</p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Varian Pisang Ijo
          </h2>
          <p className="mt-2 text-gray-500">Pilih varian favorit kamu</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {business.menu.length > 0 ? (
            business.menu.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">{item.price}</p>
                    <a
                      href={business.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      Pesan
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 italic">
              {/* TODO: isi data menu */}
              Menu belum tersedia
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
