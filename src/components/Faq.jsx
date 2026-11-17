// items: [question, answer] pairs. The first one starts open.
export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <details key={q} open={i === 0}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}
