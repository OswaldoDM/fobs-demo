import locationIcon from "/icons/location-icon.svg";

interface Props {
  cardBg?: 'gray' | 'black' ;  
  section?: string;  
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

function BusinessCard({
  cardBg,
  section,
  businessName,
  pic,
  stars,
  location,
  typeLocation,
  status,
  type,
  rating,
  reviews,
  review,
  tags,
}: Props) {
    
  return (
    <div className={`flex-none w-full sm:w-[47.6%] md:w-[48%] overflow-hidden text-xs rounded-lg border border-secondary_gray animate-slideIn motion-reduce:animate-none
      ${section === 'recommended' ? 'lg:w-[32%]' : 'lg:w-[31.8%] xl:w-[23.8%] 2xl:w-[24%]'}
      ${cardBg === 'gray' ? 'bg-primary_gray' : 'bg-black text-primary_gray'}      
      `}>
      
      {/* CARD IMAGE */}
      <div className='relative h-[300px] md:h-[240px] overflow-hidden'>
        <img
          src={pic}
          alt={businessName}
          className='w-full h-full object-cover block'
        />
        <div className='bg-[#181818] rounded py-1 px-2 absolute top-1 left-1 text-white'>
          {typeLocation}
        </div>
      </div>            

      <div className="flex flex-col justify-between gap-3 py-3 px-2 2xl:min-h-[50%] 2xl:py-4">

        {/* BUSINESS NAME AND RATINGS */}
        <div className='flex justify-between'>
          <p className='font-bold text-base 2xl:text-lg max-w-[65%] min-h-[50px]'>{businessName}</p>
          <div className="flex flex-col items-end gap-1">
            <img src={stars} alt='stars' className='' />
            <p>{rating} ({reviews} reviews)</p>        
          </div>
        </div>

        {/* LOCATION */}
        <div className='flex items-center gap-2'>
          <img src={locationIcon} alt='location' className='w-[14px]' />
          <p>
            {location} · $ · {status}
          </p>
        </div>
        
        {/* TYPE OF BUSINESS */}
        <div className='flex items-center gap-2'>       
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={cardBg === 'gray' ? 'black' : '#F5F5F5'} d="M8.17333 13.3333V5C7.97889 4.68611 7.71778 4.43389 7.39 4.24333C7.06222 4.05278 6.70361 3.95778 6.31417 3.95833C5.89194 3.95833 5.51194 4.06333 5.17417 4.27333C4.83639 4.48333 4.57 4.76306 4.375 5.1125H3.54167C3.54167 3.69028 4.03194 2.48278 5.0125 1.49C5.99306 0.497222 7.1875 0.000555556 8.59583 0C10.0031 0 11.1953 0.496111 12.1725 1.48833C13.1497 2.48 13.6383 3.68806 13.6383 5.1125H12.805C12.6106 4.7625 12.3442 4.48278 12.0058 4.27333C11.6681 4.06333 11.2931 3.95833 10.8808 3.95833C10.4914 3.95833 10.1331 4.05333 9.80583 4.24333C9.47861 4.43333 9.21194 4.68556 9.00583 5V13.3333H8.17333ZM8.46417 4.05417H8.71917C8.99583 3.76917 9.32056 3.54306 9.69333 3.37583C10.0661 3.20861 10.4639 3.125 10.8867 3.125C11.1994 3.125 11.4928 3.17556 11.7667 3.27667C12.0406 3.37778 12.2914 3.52222 12.5192 3.71C12.2514 2.88 11.7597 2.19306 11.0442 1.64917C10.3303 1.10528 9.50972 0.833333 8.5825 0.833333C7.65528 0.833333 6.83417 1.10806 6.11917 1.6575C5.40417 2.20694 4.91806 2.9125 4.66083 3.77417C4.88861 3.58639 5.13944 3.43111 5.41333 3.30833C5.68722 3.18556 5.98083 3.12444 6.29417 3.125C6.7175 3.125 7.11528 3.20861 7.4875 3.37583C7.85972 3.54306 8.18556 3.76944 8.465 4.055M10.8975 13.3333V8.84667H15V13.3333H14.1667V9.68H11.7308V13.3333H10.8975ZM1.42667 13.3333V10.5667C1.24056 10.4978 1.08556 10.39 0.961666 10.2433C0.837778 10.0972 0.761944 9.9225 0.734167 9.71917L0 3.06083H0.12C0.332778 3.06083 0.515278 3.13194 0.6675 3.27417C0.819722 3.41639 0.909722 3.58833 0.9375 3.79L1.5175 8.84667H4.93583C5.31917 8.84667 5.63944 8.975 5.89667 9.23167C6.15389 9.48833 6.2825 9.80861 6.2825 10.1925V10.625H5.64083V13.3333H4.92V10.625H2.16333V13.3333H1.42667Z"/>
          </svg>          
          <p>{type}</p>
        </div>

        {/* REVIEW */}
        <div className='flex items-center gap-2'>          
          <svg  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 mb-2">
            <path stroke={cardBg === 'gray' ? 'black' : '#F5F5F5'} d="M8 15.5C9.48336 15.5 10.9334 15.0601 12.1668 14.236C13.4001 13.4119 14.3614 12.2406 14.9291 10.8701C15.4968 9.49968 15.6453 7.99168 15.3559 6.53683C15.0665 5.08197 14.3522 3.7456 13.3033 2.6967C12.2544 1.64781 10.918 0.933503 9.46318 0.644114C8.00832 0.354725 6.50032 0.50325 5.12987 1.07091C3.75943 1.63856 2.58809 2.59986 1.76398 3.83323C0.939867 5.0666 0.5 6.51664 0.5 8C0.5 9.24 0.8 10.4083 1.33333 11.4392L0.5 15.5L4.56083 14.6667C5.59083 15.1992 6.76083 15.5 8 15.5Z" />
          </svg>               
          <p className="max-w-[90%]">{review}</p>
        </div>

        {/* TAGS */}
        <div className='flex gap-2 flex-wrap'>
          {tags.map((tag, tagIndex) => (
            <div
              key={tagIndex}
              className={`border-[0.5px] ${cardBg === "gray" ? 'border-black' : 'border-primary_gray'} rounded-lg py-1 px-2`}
            >
              {tag}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default BusinessCard;
