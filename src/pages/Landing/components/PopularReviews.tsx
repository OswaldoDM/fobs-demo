import Section from "../../../ui/Section"
import Slider from "../../../ui/Slider/Slider";
import article1 from "/images/articles/article1.jpg";
import article3 from "/images/articles/article3.jpg";
import article4 from "/images/articles/article4.jpg";
import article5 from "/images/articles/article5.jpg";
import article6 from "/images/articles/article6.jpg";
import article7 from "/images/articles/article7.jpg";
import article8 from "/images/articles/article8.jpg";
import esther from "/images/avatars/Esther.jpg";
import ellies from "/images/avatars/Ellies.jpg";
import wade from "/images/avatars/warren.png";
import annette from "/images/avatars/Jenny.png";
import kathryn from "/images/avatars/Kathryn.png";
import jacob from "/images/avatars/Jacob.png";
import robert from "/images/avatars/Robert.png";
import savannah from "/images/avatars/Savannah.png";
import john from "/images/avatars/JohnnyO.png";
import fiveStars from "/images/stars/FiveStars.png";
import half from "/images/stars/half.png";

const reviews = [
  {
    id: 1,
    author: "Esther Howard",
    authorImg: esther,
    title: "Ellie’s Pie Barn",
    likes: 482,
    description: 'Best apple pie in the state — the crust alone deserves a medal.',
    articleImg: article5,
    stars: fiveStars,
    written: 'Yesterday'
  },
  {
    id: 2,
    author: "Jacob Jones",
    authorImg: jacob,
    title: "Sanchez & Sons Auto Care",
    likes: 153,
    description: 'They fixed my car in half the time and even gave me a ride home — true lifesavers',
    articleImg: article6,
    stars: half,
    written: '1 day ago'
  },
  {
    id: 3,
    author: "Robert Fox",
    authorImg: robert,
    title: "Willow & Pine Books",
    likes: 98,
    description: 'Every book is handpicked, and the staff always remembers my name.',
    articleImg: article7,
    stars: fiveStars,
    written: '5 hours ago'
  },
  {
    id: 4,
    author: "Savannah Nguyen",
    authorImg: savannah,
    title: "Oak Street Family Gym",
    likes: 167,
    description: 'Clean, welcoming, and every trainer makes you feel like part of the family',
    articleImg: article8,
    stars: fiveStars,
    written: '3 days ago'
  },  
  {
    id: 5,
    author: "Kathryn Murphy",
    authorImg: kathryn,
    title: "Lorem Ipsum Dolor",
    likes: 100,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tenetur ad.',
    articleImg: article1,
    stars: fiveStars,
    written: '7 days ago'
  },  
  {
    id: 6,
    author: "Annette Black",
    authorImg: annette,
    title: "Lorem Ipsum Dolor",
    likes: 85,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tenetur ad.',
    articleImg: article3,
    stars: fiveStars,
    written: '3 hours ago'
  },  
  {
    id: 7,
    author: "Wade Warren",
    authorImg: wade,
    title: "Lorem Ipsum Dolor",
    likes: 352,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tenetur ad.',
    articleImg: article4,
    stars: fiveStars,
    written: '2 days ago'
  },  
  {
    id: 8,
    author: "John Doe",
    authorImg: john,
    title: "Lorem Ipsum Dolor",
    likes: 185,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus tenetur ad.',
    articleImg: ellies,
    stars: fiveStars,
    written: '4 days ago'
  },  
];


function PopularReviews() {
  return (
    <Section className='py-20'>
        <h4 className='font-semibold mb-10'>Popular Reviews</h4>
        <div className='relative'>
            <Slider reviews={reviews}/>       
        </div>
    </Section>
  )
}

export default PopularReviews