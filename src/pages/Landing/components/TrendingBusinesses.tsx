import Section from "../../../ui/Section"
import Slider from "../../../ui/Slider/Slider"
import trendBus1 from "/images/businesses/trendBus1.jpg"
import trendBus2 from "/images/businesses/trendBus2.jpg"
import trendBus3 from "/images/businesses/trendBus3.jpg"
import trendBus4 from "/images/businesses/trendBus4.jpg"
import article1 from "/images/articles/article1.jpg"
import article2 from "/images/articles/article2.jpg"
import article3 from "/images/articles/article3.jpg"
import article4 from "/images/articles/article4.jpg"
import half from "/images/stars/half.png"

const businesses = [
  { id:1, businessName: "Harbor Light Coffee Roasters", pic: trendBus1, stars: half,  location: 'Seattle, WA', typeLocation: 'Main Street', status: 'Open until 6:00 PM', type: 'Outside Seating', rating: 4.9, reviews: 512, review: "‘’Best latte in the city. Smooth, rich, and the staff make you feel like famil...’’", tags: ['Coffee & Cafe', 'Bakeries'] },
  { id:2, businessName: "Bloom Room Florals", pic: trendBus2, stars: half, location: 'Austin, TX', typeLocation: 'Main Street', status: 'Open until 5:00 PM', type: 'Wheelchair accessible', rating: 4.8, reviews: 287, review: "‘’They nailed my wedding bouquet, even better than the Pinterest board I showed the,...’’", tags: ['Florists', 'Event Planning'] },
  { id:3, businessName: "Ironwood Custom Furniture", pic: trendBus3, stars: half, location: 'Boston, MA', typeLocation: 'Main Street', status: 'Open until 7:00 PM', type: 'Parking available', rating: 4.7, reviews: 198, review: "‘’My dining table is a work of art. Solid, gorgeous, and worth every penny,....’’", tags: ['Home Decor', 'Furniture Stores'] },
  { id:4, businessName: "Mama Rosa’s Trattoria", pic: trendBus4, stars: half, location: 'Chicago, IL', typeLocation: 'Off Street', status: 'Open until 10:00 PM', type: 'Delivery', rating: 4.9, reviews: 764, review: "‘’The lasagna tastes just like my Nonna used to make, comfort food at its finest....’’", tags: ['Italian Restaurants', 'Pizza'] },
  { id:5, businessName: "Lorem Ipsum", pic: article1, stars: half, location: 'Chicago, IL', typeLocation: 'Off Street', status: 'Open until 10:00 PM', type: 'Outside Seating', rating: 4.9, reviews: 764, review: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tenetur ad...'", tags: ['Restaurants', 'Pizza'] },
  { id:6, businessName: "Lorem Ipsum", pic: article2, stars: half, location: 'Austin, TX', typeLocation: 'Off Street', status: 'Open until 10:00 PM', type: 'Outside Seating', rating: 4.9, reviews: 764, review: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tenetur ad...'", tags: ['Restaurants', 'Pizza'] },
  { id:7, businessName: "Lorem Ipsum", pic: article3, stars: half, location: 'Seattle, WA', typeLocation: 'Off Street', status: 'Open until 10:00 PM', type: 'Outside Seating', rating: 4.9, reviews: 764, review: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tenetur ad...'", tags: ['Restaurants', 'Pizza'] },
  { id:8, businessName: "Lorem Ipsum", pic: article4, stars: half, location: 'Boston, MA', typeLocation: 'Off Street', status: 'Open until 10:00 PM', type: 'Outside Seating', rating: 4.9, reviews: 764, review: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tenetur ad...'", tags: ['Restaurants', 'Pizza'] },
]

function TrendingBusinesses() {
  return (
    <Section bg='black' className='pt-10 pb-20'>
      <div className="flex gap-3 mb-16">
        <h4 className='font-semibold'>Trending Businesses</h4>
        <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.64 14.4721C18.5467 9.03206 11.0933 8.73873 12.8933 0.832062C13.0267 0.245395 12.4 -0.207938 11.8933 0.0987289C7.05333 2.95206 3.57333 8.67206 6.49333 16.1654C6.73333 16.7787 6.01333 17.3521 5.49333 16.9521C3.08 15.1254 2.82667 12.4987 3.04 10.6187C3.12 9.9254 2.21333 9.59206 1.82667 10.1654C0.92 11.5521 0 13.7921 0 17.1654C0.506667 24.6321 6.81333 26.9254 9.08 27.2187C12.32 27.6321 15.8267 27.0321 18.3467 24.7254C21.12 22.1521 22.1333 18.0454 20.64 14.4721ZM8.26667 21.1787C10.1867 20.7121 11.1733 19.3254 11.44 18.0987C11.88 16.1921 10.16 14.3254 11.32 11.3121C11.76 13.8054 15.68 15.3654 15.68 18.0854C15.7867 21.4587 12.1333 24.3521 8.26667 21.1787Z" fill="url(#paint0_linear_1344_3310)"/>
          <defs>
          <linearGradient id="paint0_linear_1344_3310" x1="10.6642" y1="0" x2="10.6642" y2="27.3398" gradientUnits="userSpaceOnUse">
          <stop offset="0.269231" stopColor="#E90C11"/>
          <stop offset="0.692308" stopColor="#E65B5E"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='relative'>
        <Slider businesses={businesses}/>       
      </div>
    </Section>
  )
}

export default TrendingBusinesses