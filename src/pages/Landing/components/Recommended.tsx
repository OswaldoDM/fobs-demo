import JohnnyO from '/JohnnyO.png';
import Cameron from '/Cameron.png';
import Jenny from '/Jenny.png';
import Kathryn from '/Kathryn.png';
import heart from '/heart-icon.svg';
import article from '/articles-icon.svg';
import Ellies from '/Ellies.jpg';
import Sanchez from '/Sanchez.jpg';
import Willow from '/Willow.jpg';
import location from '/location-icon.svg';
import typeBusiness from '/type-icon.svg';
import review from '/review-icon.svg';
import halfStars from '/HalfStars.png';
import Section from '../../../ui/Section';

const usersData = [
  {pic: JohnnyO, username: 'Johnny O.', reviews: 10, likes: '70k', articles: 70},
  {pic: Cameron, username: 'Cameron Williamson', reviews: 9, likes: '60k', articles: 50},
  {pic: Jenny, username: 'Jenny Wilson', reviews: 7, likes: '40k', articles: 20},
  {pic: Kathryn, username: 'Kathryn Murphy', reviews: 10, likes: '10k', articles: 10},
]

const businessData = [
  { businessName: "Ellie's Pie Barn", pic: Ellies, stars: halfStars,  location: 'Chicago, IL', typeLocation: 'Main Street', status: 'Closed until 8:00 AM', type: 'Outside Seating', rating: 4.9, reviews: 642, review: "‘’The peach pie here tastes exactly like the one my grandma used to bake. Crispy crust,...’’", tags: ['Bakery', 'Desert', 'Pies'] },
  { businessName: "Sanchez & Sons Auto Care", pic: Sanchez, stars: halfStars, location: 'Chicago, IL', typeLocation: 'Main Street', status: 'Closed until 8:00 AM', type: 'Certified Mechanic', rating: 4.5, reviews: 388, review: "‘’They’ve been taking care of my family’s cars for decades. Honest pricing and work you.....’’", tags: ['Auto Repair', 'Tires', 'Oil Change'] },
  { businessName: "Willow & Pine Books", pic: Willow, stars: halfStars, location: 'Chicago, IL', typeLocation: 'Off Street', status: 'Open Now', type: 'Book Store', rating: 4.8, reviews: 203, review: "‘’The owners know my taste so well, I leave with a stack of perfect reads every visit......’’", tags: ['Book Store', 'Gifts', 'Coffee Shop'] }
]

function Recommended() {
  return (
    <Section>    
      <div className="flex flex-col gap-8 md:flex-row md:gap-4">
        <div className='md:min-w-[40%] lg:min-w-[35%] xl:min-w-[25%] 2xl:min-w-[20%]'>      
          <h4 className="font-semibold mb-6 text-center md:text-left">Popular Reviewers</h4>
          {usersData.map((user) => (
            <div key={user.username} className="flex gap-4 bg-[#F5F5F5] border border-[#C4C4C4] rounded-lg p-4 mb-4">
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

        <div className='w-full'>
          <h4 className="font-semibold mb-6 text-center md:text-center lg:text-right">
            Recommended
          </h4>        
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {businessData.map((business, index) => (
              <div key={index} className='text-xs rounded-lg bg-[#F5F5F5] border border-[#C4C4C4]'>
                <div className='mb-4 relative'>
                  <img src={business.pic} alt={business.businessName} className='w-full' />
                  <div className='bg-[#181818] rounded py-1 px-2 text-white absolute top-1 left-1'>
                    {business.typeLocation}
                  </div>
                </div>

                <div className='mb-1 px-2 flex justify-between items-center'>
                  <p className="font-bold text-base">{business.businessName}</p>
                  <img src={business.stars} alt="stars" className='w-16 h-4' />
                </div>
                
                <p className='text-right mb-4 pr-2'>{business.rating} ({business.reviews} reviews)</p>            

                <div className='mb-4 px-2 flex items-center gap-2'>
                  <img src={location} alt="location" className='w-[14px]' />
                  <p>{business.location} · $$ · {business.status}</p>
                </div>

                <div className='mb-4 px-2 flex items-center gap-2'>
                  <img src={typeBusiness} alt="type of business" className='w-[14px]' />
                  <p>{business.type}</p>
                </div>

                <div className='mb-4 px-2 flex items-center gap-2'>
                  <img src={review} alt="review" className='w-[14px]' />
                  <p>{business.review}</p>
                </div>

                <div className='flex gap-2 mb-4 px-2 flex-wrap'>
                  {business.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className='border border-black rounded-lg py-1 px-2'>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>   
  )
}

export default Recommended;