import like1 from "/images/likes/like1.png";
import like2 from "/images/likes/like2.png";
import like3 from "/images/likes/like3.png";

interface Props {    
    author: string;
    authorImg: string;
    title: string;
    likes: number;
    description: string;
    articleImg: string;
    stars: string;
    written: string;
}

function ReviewCard({ author, authorImg, title, likes, description, articleImg, stars, written }:Props) {  

  return (
    <div      
      className='flex-none w-full sm:w-[47.6%] md:w-[48%] lg:w-[31.8%] xl:w-[23.8%] 2xl:w-[24%] overflow-hidden animate-slideIn motion-reduce:animate-none border border-secondary_gray rounded-lg bg-primary_gray'
    >
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

      <div className='h-[300px] md:h-[240px] overflow-hidden'>
        <img
          src={articleImg}
          alt={title}
          className='w-full h-full object-cover block'
          loading='lazy'
        />
      </div>

      <div className='flex justify-between items-baseline p-2'>
        <div className='flex gap-2'>
          <svg
            aria-hidden="true"
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
            aria-hidden="true"
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
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="black" strokeWidth="1.4" strokeLinejoin="round" d="M8.19995 9.7002L0.699951 6.7002L17.2 0.700195L11.2 17.2002L8.19995 9.7002ZM8.19995 9.7002L11.95 5.9502"/>
          </svg>
        </div>
      </div>

      <div className='flex flex-col justify-between gap-2 py-3.5 px-2 min-h-[30%] md:min-h-[33%]'>
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
        <p className='text-sm font-semibold w-[95%]'>{description}</p>
        <div className='text-secondary_gray text-sm'>
          <p className="text-[#181818]">{written}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
