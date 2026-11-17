// Photo inside a .photo frame. The frame's background shows while it loads.
export default function Img({ src, alt, width = 1200, height = 800, priority = false }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )
}
