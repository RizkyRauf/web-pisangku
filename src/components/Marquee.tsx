const categories = [
  "Pisang Ijo Original",
  "Es Pisang Ijo",
  "Pisang Ijo Coklat",
  "Pisang Ijo Durian",
  "Pisang Ijo Keju",
  "Pisang Ijo Original",
  "Es Pisang Ijo",
  "Pisang Ijo Coklat",
  "Pisang Ijo Durian",
  "Pisang Ijo Keju",
]

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-gray-100 bg-white py-4">
      <div className="animate-marquee flex gap-12 whitespace-nowrap">
        {[...categories, ...categories].map((cat, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-medium text-gray-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {cat}
          </span>
        ))}
      </div>
    </section>
  )
}
