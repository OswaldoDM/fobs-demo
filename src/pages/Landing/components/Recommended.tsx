import Slider from '../../../ui/Slider/Slider';
import Section from '../../../ui/Section';
import JohnnyO from '/JohnnyO.png';
import Cameron from '/Cameron.png';
import Jenny from '/Jenny.png';
import Kathryn from '/Kathryn.png';
import heart from '/heart-icon.svg';
import article from '/articles-icon.svg';
import Ellies from '/Ellies.jpg';
import Sanchez from '/Sanchez.jpg';
import Willow from '/Willow.jpg';
import halfStars from '/HalfStars.png';
import half from "/half.png"
import trendBus1 from "/trendBus1.jpg"
import trendBus2 from "/trendBus2.jpg"
import trendBus3 from "/trendBus3.jpg"

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
                      <img src={heart} alt="likes icon" className='w-[14px] h-[14px]' />
                      <span>{user.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <img src={article} alt="articles icon" className='w-4 h-4' />
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