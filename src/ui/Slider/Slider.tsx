import { useEffect, useState } from "react";
import BusinessCard from "../Cards/BusinessCard";
import ArticleCard from "../Cards/ArticleCard";
import ReviewCard from "../Cards/ReviewCard";

interface Article {
    id: number;
    author: string;
    authorImg: string;
    title: string;
    likes: number;
    description: string;
    articleImg: string;
    stars: string;
}

interface Review {
    id: number;
    author: string;
    authorImg: string;
    title: string;
    likes: number;
    description: string;
    articleImg: string;
    stars: string;
    written: string;
}

interface Business {
  id: number;
  businessName: string;
  pic: string;
  stars: string;
  location: string;
  typeLocation: string;
  status: string;
  type: string;
  rating: number;
  reviews: number;
  review: string;
  tags: string[];
}

interface Props {  
  articles?: Article[];
  businesses?: Business[]; 
  reviews?: Review[]; 
}

function Slider({articles, businesses, reviews}:Props) {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = articles?.length ?? businesses?.length ?? reviews?.length ?? 0;  

  useEffect(() => {
    const handleResize = () => {
      let newVisible = 4;
      if (window.innerWidth < 640) {
        newVisible = 1;
      } else if (window.innerWidth < 1024) {
        newVisible = 2;
      } else if (window.innerWidth < 1360) {
        newVisible = 3;
      }
      setVisibleCards(newVisible);
      setCurrentIndex((prev) => Math.min(prev, totalCards - newVisible));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function nextSlide() {
    if (currentIndex < totalCards - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }
  return (
    <>
      {/* Navigation buttons */}
      <div className='absolute top-[-8%] left-[90%] md:left-[94%] lg:top-[-10%] xl:left-[97%] transform -translate-x-1/2 flex gap-2 z-10'>
        <button
          className={`w-[26px] h-[26px] cursor-pointer border ${reviews ? 'border-black' : 'border-primary_gray'} rounded-full flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
          aria-label='Previous slide'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='size-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5 8.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <button
          className={`w-[26px] h-[26px] cursor-pointer border ${reviews ? 'border-black' : 'border-white'} rounded-full flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300`}
          onClick={nextSlide}
          disabled={currentIndex >= totalCards - visibleCards}
          aria-label='Next slide'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='size-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>

      {/* Slider container */}
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-out motion-reduce:transition-none sm:gap-4'
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {articles
            ? articles.map((item) => <ArticleCard key={item.id} {...item} />)
            : businesses
            ? businesses.map((item) => <BusinessCard key={item.id} {...item} background="black" cardType='slider'/>)
            : reviews
            ? reviews.map((item) => <ReviewCard key={item.id} {...item} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Slider;
