import { business } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary">{business.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{business.description}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.11 2.525c.636-.247 1.363-.416 2.427-.465C8.83 2.013 9.204 2 11.833 2h.482zm-.621 1.813h-.56c-2.404 0-2.732.01-3.696.053-.888.04-1.37.188-1.691.313a2.884 2.884 0 00-1.08.702 2.884 2.884 0 00-.702 1.08c-.125.321-.273.803-.313 1.691-.042.964-.052 1.292-.052 3.696v.56c0 2.404.01 2.732.052 3.696.04.888.188 1.37.313 1.691a2.884 2.884 0 00.702 1.08 2.884 2.884 0 001.08.702c.321.125.803.273 1.691.313.964.042 1.292.052 3.696.052h.56c2.404 0 2.732-.01 3.696-.052.888-.04 1.37-.188 1.691-.313a2.884 2.884 0 001.08-.702 2.884 2.884 0 00.702-1.08c.125-.321.273-.803.313-1.691.042-.964.052-1.292.052-3.696v-.56c0-2.404-.01-2.732-.052-3.696-.04-.888-.188-1.37-.313-1.691a2.884 2.884 0 00-.702-1.08 2.884 2.884 0 00-1.08-.702c-.321-.125-.803-.273-1.691-.313-.964-.042-1.292-.052-3.696-.052zm.088 3.268a4.919 4.919 0 110 9.838 4.919 4.919 0 010-9.838zm0 1.813a3.106 3.106 0 100 6.212 3.106 3.106 0 000-6.212zm4.868-2.944a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z" />
                </svg>
              </a>
              <a
                href={business.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href={business.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white"
                aria-label="Threads"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.25 2C10.36 2 8.74 2.5 7.4 3.5c-1.28.94-2.2 2.24-2.76 3.9-.56 1.67-.7 3.56-.43 5.68.26 2.06.91 3.87 1.95 5.41 1.04 1.55 2.33 2.72 3.89 3.5 1.56.79 3.23 1.18 5.02 1.18 1.8 0 3.47-.39 5.02-1.18 1.56-.78 2.85-1.95 3.89-3.5 1.04-1.55 1.69-3.36 1.95-5.41.27-2.12.13-4.01-.43-5.68-.56-1.66-1.48-2.96-2.76-3.9C15.76 2.5 14.14 2 12.25 2Zm.04 3.5c1.33 0 2.37.43 3.13 1.3.76.87 1.19 2.04 1.29 3.52v.02c-.68-.07-1.37-.11-2.07-.11-1.17 0-2.17.14-3.01.42-.84.28-1.44.61-1.8 1.01-.36.4-.54.79-.54 1.16 0 .43.15.78.46 1.05.3.27.72.49 1.24.66.53.17 1.14.29 1.84.36.69.07 1.34.18 1.95.33.6.15 1.2.38 1.78.69.56.31 1.03.72 1.39 1.21.36.49.55 1.11.55 1.84 0 .77-.2 1.45-.59 2.05-.39.6-.94 1.09-1.65 1.47-.71.38-1.53.63-2.46.75-.93.12-1.88.1-2.85-.07-.97-.17-1.82-.5-2.55-1-.73-.5-1.28-1.14-1.65-1.92s-.58-1.64-.58-2.58c0-.62.07-1.19.2-1.7.13-.51.3-.97.49-1.36l.02-.04c-.05.05-.13.12-.24.22-.11.1-.26.24-.46.42-.2.18-.41.35-.63.51-.22.16-.47.28-.74.36-.27.08-.52.1-.75.06-.23-.04-.4-.15-.52-.33-.12-.18-.16-.4-.12-.66.04-.26.17-.56.39-.9.22-.34.52-.65.9-.93.38-.28.81-.52 1.29-.72.48-.2.99-.35 1.53-.46.54-.11 1.07-.19 1.59-.23.52-.04.99-.06 1.41-.06.42 0 .78.01 1.08.03.3.02.53.04.69.06.16.02.25.03.29.03.1.02.2.04.31.06v-.86c0-1.12-.32-1.97-.96-2.56-.64-.58-1.52-.87-2.65-.87-.73 0-1.4.15-2.02.44-.62.29-1.08.61-1.39.95-.11.14-.18.25-.21.33-.03.08-.03.16.01.24.04.08.13.17.27.27l.3.23c.21.16.38.35.51.57.13.22.19.47.17.74-.02.27-.12.51-.31.72-.19.21-.44.36-.76.45-.32.09-.66.07-1.03-.06-.37-.13-.65-.34-.85-.63-.2-.29-.3-.63-.3-1.02 0-.62.22-1.27.66-1.97.44-.7 1.09-1.3 1.96-1.82.87-.52 1.95-.9 3.24-1.14.53-.1 1.1-.15 1.71-.15Zm0 7.87c-.66.04-1.3.13-1.93.27-.63.14-1.15.34-1.57.6-.42.26-.73.56-.93.9-.2.34-.3.7-.3 1.06 0 .51.19.96.57 1.35.38.39.88.68 1.5.87.62.19 1.26.27 1.92.24.66-.03 1.28-.16 1.86-.39.58-.23 1.06-.55 1.44-.96.38-.41.57-.88.57-1.41 0-.39-.14-.72-.42-.99-.28-.27-.67-.49-1.17-.66-.5-.17-1.08-.29-1.74-.37-.19-.02-.46-.04-.8-.05Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Menu</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-500">
              <li>
                <a href="#menu" className="hover:text-primary transition-colors">Varian Pisang Ijo</a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-primary transition-colors">Galeri</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-primary transition-colors">Testimoni</a>
              </li>
              <li>
                <a href="#pembayaran" className="hover:text-primary transition-colors">Pembayaran</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={business.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href={business.threads} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Threads
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Jam Buka</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-gray-500">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
