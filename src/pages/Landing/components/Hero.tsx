
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 py-44 lg:py-56 text-center px-3 lg:px-0">
      <h1>Built for locals, by locals</h1>
      <h5>Discover, review, and support family-owned businesses near you.</h5>
      <div className='mt-4 w-[95%] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px]'>
        <div
          className='w-full rounded-[40px] py-4 px-6 lg:py-5 flex items-center border border-secondary_gray 
          transition-all duration-200 bg-primary_gray shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
        >
          <svg
            aria-hidden="true"
            className='mr-2 lg:w-6 lg:h-6'
            width='18px'
            height='18px'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            color='#000'
          >
            <path
              d='M17 17L21 21'
              stroke='#000'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z'
              stroke='#000'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <input
            className='w-full h-full lg:py-1 lg:text-xl 2xl:text-2xl font-poppins bg-primary_gray focus:outline-none placeholder:text-sm placeholder:font-poppins placeholder:text-[#939393] md:placeholder:text-base lg:placeholder:text-xl 2xl:placeholder:text-2xl'
            type='text'
            placeholder='Search businesses or categories'
          />
        </div>
      </div>      
    </div>
  )
}

export default Hero;