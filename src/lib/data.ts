interface MenuItem {
  name: string
  description: string
  price: string
  image: string
  alt: string
}

interface Testimonial {
  name: string
  text: string
  rating: number
  source: string
}

interface BusinessInfo {
  name: string
  tagline: string
  description: string
  story: string
  address: string
  phone: string
  whatsapp: string
  whatsappText: string
  email: string
  instagram: string
  tiktok: string
  threads: string
  googleMapsEmbed: string
  googleMapsUrl: string
  hours: { day: string; time: string }[]
  menu: MenuItem[]
  testimonials: Testimonial[]
  geoLat: string
  geoLong: string
}

export const business: BusinessInfo = {
  name: "Pisang Ijo Hasanuddin",
  tagline: "Pisang Ijo Khas Makassar Asli",
  description:
    "Nikmati pisang ijo khas Makassar dengan resep turun-temurun. Dibuat dari bahan-bahan premium pilihan.",
  story:
    "Pisang Ijo Hasanuddin menghadirkan cita rasa autentik pisang ijo khas Makassar di Jakarta Selatan. Dibuat dari bahan premium dengan resep turun-temurun, setiap sajian kami buat dengan penuh cinta. Nikmati pisang ijo legit dan dadar kacang fla homemade yang lembut — cocok untuk cemilan keluarga atau hadiah oleh-oleh khas Makassar.",
  address:
    "Jl. Kavling-Komplek DKI.99 6, RT.5/RW.3, Cipedak, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630",
  phone: "0812-4220-0089",
  whatsapp:
    "https://wa.me/6281242200089?text=Halo,%20saya%20mau%20pesan%20pisang%20ijo",
  whatsappText: "Halo, saya mau pesan pisang ijo",
  email: "{ /* TODO: email */ }",
  instagram: "https://www.instagram.com/pisangijo.hasanuddin/",
  tiktok: "https://www.tiktok.com/@pisangijo.hasanuddin",
  threads: "https://www.threads.net/@pisangijo.hasanuddin",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2998885350257!2d106.80856659999999!3d-6.3552124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efea08b93bf7%3A0x7e4217f4738d1377!2sPisang%20Ijo%20Hasanuddin!5e0!3m2!1sen!2sid!4v1785176370888!5m2!1sen!2sid",
  googleMapsUrl:
    "https://www.google.com/maps/place/Pisang+Ijo+Hasanuddin/@-6.3552124,106.8085666,1069m/",
  hours: [
    { day: "Senin", time: "10.00–21.00" },
    { day: "Selasa", time: "10.00–21.00" },
    { day: "Rabu", time: "10.00–21.00" },
    { day: "Kamis", time: "10.00–21.00" },
    { day: "Jumat", time: "10.00–21.00" },
    { day: "Sabtu", time: "10.00–21.00" },
    { day: "Minggu", time: "10.00–21.00" },
  ],
  geoLat: "-6.3552124",
  geoLong: "106.8085666",

  menu: [
    {
      name: "Pisang Ijo",
      description: "Pisang dibalut adonan legit, disiram dengan fla",
      price: "Rp20.000",
      image: "/images/menu_pisang_ijo.jpg",
      alt: "Pisang Ijo Hasanuddin — pisang dibalut adonan legit khas Makassar disiram fla",
    },
    {
      name: "Dadar Kacang Fla",
      description: "Kacang dan Wijen di balut adonan lembut, disiram dengan fla",
      price: "Rp20.000",
      image: "/images/menu_dadar.jpeg",
      alt: "Dadar kacang fla Pisang Ijo Hasanuddin — kacang dan wijen dibalut adonan lembut",
    },
  ],

  testimonials: [
    {
      name: "Rizma Halimatusadia",
      text: "Enak bangeet, beneran kayak es pisang ijo di resto dgn harga yg jauh lebih affordable, pertama beli waktu ada yg jual di blok m, ternyata tokonya di pd labu..",
      rating: 5,
      source: "Google Maps",
    },
    {
      name: "andika adriansyah",
      text: "asli enak banget es pisang ijo nya dan harga nya ok banget. istri gue beli pas lagi di jual di st palmerah.",
      rating: 5,
      source: "Google Maps",
    },
    {
      name: "Subhan Ashar",
      text: "rasanya enak, flanya enakkk apalagi di mix sama es batuuu. baissssss selesko",
      rating: 5,
      source: "Google Maps",
    },
  ],
}
