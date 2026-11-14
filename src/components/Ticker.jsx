// Scrolling ticker. Each phrase is split into per-character spans so hover
// fills one letter at a time (.tick-c in index.css); the diamond separator
// keeps its own orange. The phrase list is duplicated because the marquee
// keyframe translates -50%, so the second copy covers the gap on wrap.
function Chars({ text }) {
  return [...text].map((c, i) => (
    <span key={i} className="tick-c" style={{ '--d': `${i * 18}ms` }}>
      {c === ' ' ? ' ' : c}
    </span>
  ))
}

export default function Ticker({ items, className = 'tick', gap, diamond, style }) {
  return (
    <div className={className} style={style}>
      {[...items, ...items].map((text, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap }}>
          {/* The per-char spans would be read out letter by letter, so the
              phrase is exposed once via aria-label and the chars are hidden. */}
          <span className="tick-w" aria-label={text}>
            <span aria-hidden="true" style={{ display: 'inline-flex' }}>
              <Chars text={text} />
            </span>
          </span>
          <span style={{ color: '#FF792E', fontSize: diamond }}>◆</span>
        </span>
      ))}
    </div>
  )
}
