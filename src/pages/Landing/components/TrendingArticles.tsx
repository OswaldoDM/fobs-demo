import Section from "../../../ui/Section";
import Slider from "../../../ui/Slider/Slider";
import kathryn from "/images/avatars/Kathryn.png";
import warren from "/images/avatars/warren.png";
import bessie from "/images/avatars/bessie.png";
import Jenny from '/images/avatars/Jenny.png';
import john from '/images/avatars/JohnnyO.png';
import robert from '/images/avatars/Robert.png';
import esther from "/images/avatars/Esther.jpg";
import annette from "/images/avatars/Jenny.png";
import half from "/images/stars/half.png";
import fiveStars from "/images/stars/FiveStars.png";
import article1 from "/images/articles/article1.jpg";
import article2 from "/images/articles/article2.jpg";
import article3 from "/images/articles/article3.jpg";
import article4 from "/images/articles/article4.jpg";
import article5 from "/images/articles/article5.jpg";
import article6 from "/images/articles/article6.jpg";
import article7 from "/images/articles/article7.jpg";
import article8 from "/images/articles/article8.jpg";

const articles = [
  {
    id: 1,
    author: "Kathryn Murphy",
    authorImg: kathryn,
    title: "The Cozy Spot That Feels Like Grandma’s Kitchen",
    likes: 482,
    description: '"Every bite tastes like it’s been passed..."',
    articleImg: article1,
    stars: fiveStars,
  },
  {
    id: 2,
    author: "Wade Warren",
    authorImg: warren,
    title: "From Grease to Greatness: Sanchez & Sons Auto Care",
    likes: 327,
    description: '"They didn’t just fix my car — they treated...."',
    articleImg: article2,
    stars: half,
  },
  {
    id: 3,
    author: "Bessie Cooper",
    authorImg: bessie,
    title: "A Bookshop That Hugs Your Soul",
    likes: 268,
    description: '"Willow & Pine Books is more than shelves..."',
    articleImg: article3,
    stars: fiveStars,
  },
  {
    id: 4,
    author: "Annette Black",
    authorImg: Jenny,
    title: "Where Sweat Meets Support",
    likes: 514,
    description: '"Every workout at Oak Street Family Gym co..."',
    articleImg: article4,
    stars: fiveStars,
  },
  {
    id: 5,
    author: "John Doe",
    authorImg: john,
    title: "Lorem Ipsum Dolor Sit Amet",
    likes: 482,
    description: '"Lorem ipsum, dolor sit amet consectetur...."',
    articleImg: article5,
    stars: fiveStars,
  },
  {
    id: 6,
    author: "Bruce Miles",
    authorImg: robert,
    title: "Lorem Ipsum Dolor Sit Amet",
    likes: 245,
    description: '"Lorem ipsum, dolor sit amet consectetur...."',
    articleImg: article6,
    stars: fiveStars,
  },
  {
    id: 7,
    author: "Dana Simpson",
    authorImg: esther,
    title: "Lorem Ipsum Dolor Sit Amet",
    likes: 587,
    description: '"Lorem ipsum, dolor sit amet consectetur...."',
    articleImg: article7,
    stars: fiveStars,
  },
  {
    id: 8,
    author: "Ana Falcone",
    authorImg: annette,
    title: "Lorem Ipsum Dolor Sit Amet",
    likes: 302,
    description: '"Lorem ipsum, dolor sit amet consectetur...."',
    articleImg: article8,
    stars: fiveStars,
  },  
];

function TrendingArticles() {  

  return (
    <Section bg='black' className='py-20'>
      <h4 className='font-semibold mb-10'>Trending Articles</h4>
      <div className='relative'>
        <Slider articles={articles}/>       
      </div>
    </Section>
  );
}

export default TrendingArticles;
