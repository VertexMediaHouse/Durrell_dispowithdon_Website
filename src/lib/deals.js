import { img } from './images'

// Spread = ARV - asking - repairs, computed in DealCard.
export const deals = [
  { slug: 'oakwood-craftsman', name: 'Oakwood Craftsman', city: 'Columbus, OH', type: 'Single-family', status: 'Available', beds: 3, baths: 2, sqft: 1420, asking: 148500, arv: 235000, repairs: 38000, img: img.craftsman, alt: 'Front of the Oakwood Craftsman, a single-family home in Columbus, Ohio' },
  { slug: 'linden-street-duplex', name: 'Linden Street Duplex', city: 'Columbus, OH', type: 'Multifamily', status: 'New', beds: 4, baths: 2, sqft: 2140, asking: 192000, arv: 285000, repairs: 41000, img: img.duplex, alt: 'Brick exterior of the Linden Street Duplex' },
  { slug: 'penrose-court-condo', name: 'Penrose Court Condo', city: 'Charlotte, NC', type: 'Condo', status: 'Available', beds: 2, baths: 2, sqft: 980, asking: 96500, arv: 148000, repairs: 12000, img: img.condo, alt: 'Penrose Court condo building exterior' },
  { slug: 'maple-ridge-ranch', name: 'Maple Ridge Ranch', city: 'Indianapolis, IN', type: 'Single-family', status: 'Available', beds: 3, baths: 1.5, sqft: 1260, asking: 121000, arv: 189000, repairs: 27500, img: img.ranch, alt: 'Maple Ridge Ranch, a single-story home with a front lawn' },
  { slug: 'hillcrest-townhomes', name: 'Hillcrest Townhomes', city: 'Atlanta, GA', type: 'Multifamily', status: 'Pending', beds: 8, baths: 8, sqft: 4800, asking: 412000, arv: 610000, repairs: 64000, img: img.townhomes, alt: 'Row of attached townhomes at Hillcrest' },
  { slug: 'westbrook-modern', name: 'Westbrook Modern', city: 'Memphis, TN', type: 'Single-family', status: 'New', beds: 4, baths: 3, sqft: 2050, asking: 214900, arv: 305000, repairs: 22000, img: img.modern, alt: 'Westbrook Modern, a contemporary single-family home in Memphis, Tennessee' },
]

export const money = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

export const spread = (d) => d.arv - d.asking - d.repairs
