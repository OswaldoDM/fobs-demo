import { Link } from "react-router";
import like1 from "/like1.png";
import like2 from "/like2.png";
import like3 from "/like3.png";
import share from "/share.svg";

interface Props {    
    author: string;
    authorImg: string;
    title: string;
    likes: number;
    description: string;
    articleImg: string;
    stars: string;
}

function ArticleCard({ author, authorImg, title, likes, description, articleImg, stars }:Props) {  

  return (
    <div      
      className='flex-none w-full sm:w-[47.6%] md:w-[48%] lg:w-[31.8%] xl:w-[23.8%] 2xl:w-[24%] overflow-hidden animate-slideIn motion-reduce:animate-none border border-secondary_gray rounded-lg'
    >
      {/* AUTHOR */}
      <div className='flex justify-between items-center p-2'>
        <div className='flex gap-3'>
          <img
            src={authorImg}
            alt={author}
            className='w-8 h-8 rounded-full'
          />
          <div>
            <p className='text-sm'>{author}</p>
            <img src={stars} alt='article reviews' />
          </div>
        </div>

        <div className='flex gap-[2px]'>
          <span className='w-1 h-1 bg-white rounded-full text-transparent'>
            .
          </span>
          <span className='w-1 h-1 bg-white rounded-full text-transparent'>
            .
          </span>
          <span className='w-1 h-1 bg-white rounded-full text-transparent'>
            .
          </span>
        </div>        
      </div>

      {/* IMAGE */}
      <div className='h-[300px] md:h-[240px] overflow-hidden'>
        <img
          src={articleImg}
          alt={title}
          className='w-full h-full object-cover block'
          loading='lazy'
        />
      </div>

      {/* BUTTONS */}
      <div className='flex justify-between items-baseline p-2'>
        <div className='flex gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z'
            />
          </svg>
        </div>
        <div>
          <img src={share} alt='share' className='w-5 h-5 mt-1 mr-[2px]' />
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className='flex flex-col justify-between gap-2 py-3 px-2 min-h-[30%] md:min-h-[33%]'>
        <div className='flex gap-2'>
          <div className='flex'>
            <img src={like3} alt='likes' className='w-4 h-4 rounded-full' />
            <img
              src={like2}
              alt='likes'
              className='w-4 h-4 rounded-full relative left-[-15%]'
            />
            <img
              src={like1}
              alt='likes'
              className='w-4 h-4 rounded-full relative left-[-25%]'
            />
          </div>
          <p className='text-sm relative left-[-4%]'>{likes} Likes</p>
        </div>
        <p className='2xl:text-lg font-semibold [text-shadow:_0_1px_2px_rgba(0,0,0,0.1)]'>
          {title}
        </p>
        <p className='text-sm'>{description}</p>
        <div className='text-secondary_gray text-sm'>
          <Link to='/'>READ STORY</Link>
        </div>
      </div>

    </div>
  );
}

export default ArticleCard;
