const items = [
  "Pisang Ijo Khas Makassar",
  "Dadar Kacang Fla",
  "Homemade Setiap Hari",
  "Sejak 2022",
  "Jakarta Selatan",
  "Buka 10.00 – 21.00",
]

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-8 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:gap-10 sm:text-xs"
        >
          {item}
          <span className="h-1 w-1 rounded-full bg-[#C2A06C]/70" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-white/5 bg-ink py-4">
      <div className="animate-marquee flex w-max">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </section>
  )
}
