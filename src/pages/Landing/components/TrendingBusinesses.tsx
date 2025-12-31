import Section from "../../../ui/Section"
import Slider from "../../../ui/Slider/Slider"
import fire from "/icons/fire.svg"
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
        <img src={fire} alt="trending" />
      </div>
      <div className='relative'>
        <Slider businesses={businesses}/>       
      </div>
    </Section>
  )
}

export default TrendingBusinesses