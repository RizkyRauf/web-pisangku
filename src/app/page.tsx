import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import About from "@/components/About"
import Menu from "@/components/Menu"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Location from "@/components/Location"
import HowToOrder from "@/components/HowToOrder"
import Payment from "@/components/Payment"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <HowToOrder />
        <Payment />
        <Location />
      </main>
      <Footer />
    </>
  )
}
