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
  cardBg?: 'gray' | 'black';
  section?: string; 
}

function Slider({articles, businesses, reviews, cardBg, section}:Props) {
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // +1 to include the placeholder card with dashed border at the end
  const totalCards = (articles?.length ?? businesses?.length ?? reviews?.length ?? 0) + 1;  

  useEffect(() => {
    const handleResize = () => {
      let newVisible = 4;
      if (section === 'recommended' && window.innerWidth > 1360 ) {
        newVisible = 3;
      } else if (window.innerWidth < 640) {
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
      <div className={`absolute top-[-8%] left-[90%] md:left-[94%] xl:left-[97%] transform -translate-x-1/2 flex gap-2 z-10
        ${section === 'recommended' ? 'lg:top-[-11%] xl:left-[96%]' : 'lg:top-[-10%] xl:left-[97%]'}`}>
        <button
          className={`w-[26px] h-[26px] cursor-pointer border rounded-full flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 
          ${section === 'recommended' || reviews ? 'border-black' : 'border-primary_gray'}`}
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
          className={`w-[26px] h-[26px] cursor-pointer border rounded-full flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
          ${section === 'recommended' || reviews ? 'border-black' : 'border-white'} `}
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
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`, }}
        >          
          {articles && articles.length > 0 && (
            <>
              {articles.map((item) => <ArticleCard key={item.id} {...item} />)}              
              <div className='flex-none w-full sm:w-[47.6%] md:w-[48%] lg:w-[31.8%] xl:w-[23.8%] 2xl:w-[24%] overflow-hidden animate-slideIn motion-reduce:animate-none border-2 border-dashed border-secondary_gray rounded-lg min-h-[400px] md:min-h-[450px] flex items-center justify-center'>                
                <svg width="66" height="82" viewBox="0 0 66 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M65.3333 71.8258V24.5L40.8333 0H8.16667C3.675 0 0.0408343 3.675 0.0408343 8.16667L0 73.5C0 77.9917 3.63417 81.6667 8.12583 81.6667H57.1667C59.0042 81.6667 60.6375 81.0542 62.0258 80.0333L43.9367 61.9442C40.67 64.0675 36.8317 65.3333 32.6667 65.3333C21.3967 65.3333 12.25 56.1867 12.25 44.9167C12.25 33.6467 21.3967 24.5 32.6667 24.5C43.9367 24.5 53.0833 33.6467 53.0833 44.9167C53.0833 49.0817 51.8175 52.92 49.6942 56.1458L65.3333 71.8258ZM20.4167 44.9167C20.4167 51.695 25.8883 57.1667 32.6667 57.1667C39.445 57.1667 44.9167 51.695 44.9167 44.9167C44.9167 38.1383 39.445 32.6667 32.6667 32.6667C25.8883 32.6667 20.4167 38.1383 20.4167 44.9167Z" fill="#D3D3D3"/>
                </svg>
              </div>
            </>
          )}
          {businesses && businesses.length > 0 && (
            <>
              {businesses.map((item) => <BusinessCard key={item.id} {...item} cardBg={cardBg} section={section}/>)}              
              <div className={`flex-none w-full sm:w-[47.6%] md:w-[48%] overflow-hidden border-2 border-dashed border-secondary_gray rounded-lg min-h-[400px] md:min-h-[450px] flex items-center justify-center animate-slideIn motion-reduce:animate-none
                ${section === 'recommended' ? 'lg:w-[32%]' : 'lg:w-[31.8%] xl:w-[23.8%] 2xl:w-[24%]'}`}>
                {section === 'recommended' ? (
                  <svg width="66" height="82" viewBox="0 0 66 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_201_8)">
                    <path d="M65.3333 71.8258V24.5L40.8333 0H8.16667C3.675 0 0.0408343 3.675 0.0408343 8.16667L0 73.5C0 77.9917 3.63417 81.6667 8.12583 81.6667H57.1667C59.0042 81.6667 60.6375 81.0542 62.0258 80.0333L43.9367 61.9442C40.67 64.0675 36.8317 65.3333 32.6667 65.3333C21.3967 65.3333 12.25 56.1867 12.25 44.9167C12.25 33.6467 21.3967 24.5 32.6667 24.5C43.9367 24.5 53.0833 33.6467 53.0833 44.9167C53.0833 49.0817 51.8175 52.92 49.6942 56.1458L65.3333 71.8258ZM20.4167 44.9167C20.4167 51.695 25.8883 57.1667 32.6667 57.1667C39.445 57.1667 44.9167 51.695 44.9167 44.9167C44.9167 38.1383 39.445 32.6667 32.6667 32.6667C25.8883 32.6667 20.4167 38.1383 20.4167 44.9167Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_201_8">
                    <rect width="66" height="82" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg width="66" height="82" viewBox="0 0 66 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.3333 71.8258V24.5L40.8333 0H8.16667C3.675 0 0.0408343 3.675 0.0408343 8.16667L0 73.5C0 77.9917 3.63417 81.6667 8.12583 81.6667H57.1667C59.0042 81.6667 60.6375 81.0542 62.0258 80.0333L43.9367 61.9442C40.67 64.0675 36.8317 65.3333 32.6667 65.3333C21.3967 65.3333 12.25 56.1867 12.25 44.9167C12.25 33.6467 21.3967 24.5 32.6667 24.5C43.9367 24.5 53.0833 33.6467 53.0833 44.9167C53.0833 49.0817 51.8175 52.92 49.6942 56.1458L65.3333 71.8258ZM20.4167 44.9167C20.4167 51.695 25.8883 57.1667 32.6667 57.1667C39.445 57.1667 44.9167 51.695 44.9167 44.9167C44.9167 38.1383 39.445 32.6667 32.6667 32.6667C25.8883 32.6667 20.4167 38.1383 20.4167 44.9167Z" fill="#D3D3D3"/>
                  </svg>
                )}
              </div>
            </>
          )}
          {reviews && reviews.length > 0 && (
            <>
              {reviews.map((item) => <ReviewCard key={item.id} {...item} />)}              
              <div className='flex-none w-full sm:w-[47.6%] md:w-[48%] lg:w-[31.8%] xl:w-[23.8%] 2xl:w-[24%] overflow-hidden animate-slideIn motion-reduce:animate-none border-2 border-dashed border-secondary_gray rounded-lg bg-primary_gray min-h-[400px] md:min-h-[450px] flex items-center justify-center'>
                <svg width="66" height="82" viewBox="0 0 66 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_201_8)">
                    <path d="M65.3333 71.8258V24.5L40.8333 0H8.16667C3.675 0 0.0408343 3.675 0.0408343 8.16667L0 73.5C0 77.9917 3.63417 81.6667 8.12583 81.6667H57.1667C59.0042 81.6667 60.6375 81.0542 62.0258 80.0333L43.9367 61.9442C40.67 64.0675 36.8317 65.3333 32.6667 65.3333C21.3967 65.3333 12.25 56.1867 12.25 44.9167C12.25 33.6467 21.3967 24.5 32.6667 24.5C43.9367 24.5 53.0833 33.6467 53.0833 44.9167C53.0833 49.0817 51.8175 52.92 49.6942 56.1458L65.3333 71.8258ZM20.4167 44.9167C20.4167 51.695 25.8883 57.1667 32.6667 57.1667C39.445 57.1667 44.9167 51.695 44.9167 44.9167C44.9167 38.1383 39.445 32.6667 32.6667 32.6667C25.8883 32.6667 20.4167 38.1383 20.4167 44.9167Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_201_8">
                    <rect width="66" height="82" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
              </div>
            </>
          )}
        </div>        
      </div>
    </>
  );
}

export default Slider;
