import Slider from '../../../ui/Slider/Slider';
import Section from '../../../ui/Section';
import JohnnyO from '/images/avatars/JohnnyO.png';
import Cameron from '/images/avatars/Cameron.png';
import Jenny from '/images/avatars/Jenny.png';
import Kathryn from '/images/avatars/Kathryn.png';
import Ellies from '/images/avatars/Ellies.jpg';
import Sanchez from '/images/avatars/Sanchez.jpg';
import Willow from '/images/avatars/Willow.jpg';
import halfStars from '/images/stars/HalfStars.png';
import half from "/images/stars/half.png"
import trendBus1 from "/images/businesses/trendBus1.jpg"
import trendBus2 from "/images/businesses/trendBus2.jpg"
import trendBus3 from "/images/businesses/trendBus3.jpg"

const usersData = [
  {pic: JohnnyO, username: 'Johnny O.', reviews: 10, likes: '70k', articles: 70},
  {pic: Cameron, username: 'Cameron Williamson', reviews: 9, likes: '60k', articles: 50},
  {pic: Jenny, username: 'Jenny Wilson', reviews: 7, likes: '40k', articles: 20},
  {pic: Kathryn, username: 'Kathryn Murphy', reviews: 10, likes: '10k', articles: 10},
]

const businesses = [
  { id:1, businessName: "Ellie's Pie Barn", pic: Ellies, stars: halfStars,  location: 'Chicago, IL', typeLocation: 'Main Street', status: 'Closed until 8:00 AM', type: 'Outside Seating', rating: 4.9, reviews: 642, review: "‘’The peach pie here tastes exactly like the one my grandma used to bake. Crispy crust,...’’", tags: ['Bakery', 'Desert', 'Pies'] },
  { id:2, businessName: "Sanchez & Sons Auto Care", pic: Sanchez, stars: halfStars, location: 'Chicago, IL', typeLocation: 'Main Street', status: 'Closed until 8:00 AM', type: 'Certified Mechanic', rating: 4.5, reviews: 388, review: "‘’They’ve been taking care of my family’s cars for decades. Honest pricing and work you.....’’", tags: ['Auto Repair', 'Tires', 'Oil Change'] },
  { id:3, businessName: "Willow & Pine Books", pic: Willow, stars: halfStars, location: 'Chicago, IL', typeLocation: 'Off Street', status: 'Open Now', type: 'Book Store', rating: 4.8, reviews: 203, review: "‘’The owners know my taste so well, I leave with a stack of perfect reads every visit......’’", tags: ['Book Store', 'Gifts', 'Coffee Shop'] },
  { id:4, businessName: "Harbor Light Coffee Roasters", pic: trendBus1, stars: half,  location: 'Seattle, WA', typeLocation: 'Main Street', status: 'Open until 6:00 PM', type: 'Outside Seating', rating: 4.9, reviews: 512, review: "‘’Best latte in the city. Smooth, rich, and the staff make you feel like famil...’’", tags: ['Coffee & Cafe', 'Bakeries'] },
  { id:5, businessName: "Bloom Room Florals", pic: trendBus2, stars: half, location: 'Austin, TX', typeLocation: 'Main Street', status: 'Open until 5:00 PM', type: 'Wheelchair accessible', rating: 4.8, reviews: 287, review: "‘’They nailed my wedding bouquet, even better than the Pinterest board I showed the,...’’", tags: ['Florists', 'Event Planning'] },
  { id:6, businessName: "Ironwood Custom Furniture", pic: trendBus3, stars: half, location: 'Boston, MA', typeLocation: 'Main Street', status: 'Open until 7:00 PM', type: 'Parking available', rating: 4.7, reviews: 198, review: "‘’My dining table is a work of art. Solid, gorgeous, and worth every penny,....’’", tags: ['Home Decor', 'Furniture Stores'] },
]

function Recommended() {
  return (
    <Section>    
      <div className="flex flex-col gap-8 pb-12 md:pb-16 md:gap-16 xl:flex-row xl:gap-4">

        {/* POPULAR REVIEWERS */}
        <div className='md:min-w-[40%] lg:min-w-[32%] xl:min-w-[25%] 2xl:min-w-[22%] lg:px-6 xl:px-0'>      
          <h4 className="font-semibold mb-6 text-center xl:text-left">Popular Reviewers</h4>         
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1'>
            {usersData.map((user) => (
              <div key={user.username} className="flex gap-4 bg-primary_gray border border-secondary_gray rounded-lg p-4 xl:py-5">
                <div>
                  <img src={user.pic} alt={user.username} className="w-12 h-12 rounded-full mb-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{user.username}</p>
                  <div className='flex gap-2 items-center'>
                    <span className="text-xs">{user.reviews} Reviews</span>
                    <div className="flex items-center gap-1 text-xs">                      
                      <svg aria-hidden="true" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="black" strokeLinecap="round" strokeLinejoin="round" d="M6.66693 2.86102C5.5116 0.245021 2.82426 0.0123544 1.57293 1.15302C0.553596 2.06835 0.0642625 4.26302 0.994929 6.28302C2.60026 9.75635 6.66693 11.5804 6.66693 11.5804C6.66693 11.5804 10.7343 9.75635 12.3389 6.28302C13.2696 4.26302 12.7803 2.06835 11.7609 1.15302C10.5096 0.0123544 7.82226 0.245688 6.66693 2.86102Z"/>
                      </svg>
                      <span>{user.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">                      
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill='black' d="M12.6667 3.33333V12.6667H3.33333V3.33333H12.6667ZM12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2Z"/>
                        <path fill='black' d="M9.33329 11.3332H4.66663V9.99984H9.33329V11.3332ZM11.3333 8.6665H4.66663V7.33317H11.3333V8.6665ZM11.3333 5.99984H4.66663V4.6665H11.3333V5.99984Z"/>
                      </svg>
                      <span>{user.articles}</span>
                    </div>                
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* RECOMMENDED */}
        <div className='w-full'>
          <h4 className="font-semibold mb-6 md:text-center xl:text-right xl:pr-24">
            Recommended
          </h4>          
          <div className='relative'>
            <Slider businesses={businesses} section="recommended" cardBg='gray'/>       
          </div>
        </div>
      </div>
    </Section>   
  )
}

export default Recommended;