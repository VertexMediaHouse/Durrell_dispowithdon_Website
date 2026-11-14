// Fills a .ph / .ph2 placeholder frame with a photo. The gradient stays behind
// the image, so it still reads as a styled frame while the photo loads (or if
// it fails to load).
export default function Img({ src, alt, width = 1200, height = 800, priority = false }) {
  return (
    <img
      className="ph-img"
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
    />
  )
}
