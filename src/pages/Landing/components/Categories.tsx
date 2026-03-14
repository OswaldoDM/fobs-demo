import Section from "../../../ui/Section"

function Categories() {
  return (
    <Section className="pt-0 xl:pt-8 pb-20">
        <h4 className="text-center font-semibold mb-10">Categories</h4>
        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-y-6">
            <div className="flex flex-col items-center gap-4 p-10 bg-primary_gray xl:py-12 rounded border border-secondary_gray hover:border-gray-400 transition duration-200 cursor-pointer">
                <svg aria-hidden="true" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="black" d="M6 40V21.7C4.3 21.2333 2.87533 20.3 1.726 18.9C0.576666 17.5 0.00133333 15.8667 0 14V0H4V14H6V0H10V14H12V0H16V14C16 15.8667 15.4253 17.5 14.276 18.9C13.1267 20.3 11.7013 21.2333 10 21.7V40H6ZM26 40V24H20V10C20 7.23333 20.9753 4.87533 22.926 2.926C24.8767 0.976667 27.2347 0.00133333 30 0V40H26Z"/>
                </svg>
                <h5 className="text-[#1E1E1E]">Restaurants</h5>
            </div>
            <div className="flex flex-col items-center gap-4 p-10 bg-primary_gray rounded border border-secondary_gray hover:border-gray-400 transition duration-200 cursor-pointer">
                <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="black" d="M12 32C9.8 32 8.02 33.8 8.02 36C8.02 38.2 9.8 40 12 40C14.2 40 16 38.2 16 36C16 33.8 14.2 32 12 32ZM0 0V4H4L11.2 19.18L8.5 24.08C8.18 24.64 8 25.3 8 26C8 28.2 9.8 30 12 30H36V26H12.84C12.56 26 12.34 25.78 12.34 25.5L12.4 25.26L14.2 22H29.1C30.6 22 31.92 21.18 32.6 19.94L39.76 6.96C39.92 6.68 40 6.34 40 6C40 4.9 39.1 4 38 4H8.42L6.54 0H0ZM32 32C29.8 32 28.02 33.8 28.02 36C28.02 38.2 29.8 40 32 40C34.2 40 36 38.2 36 36C36 33.8 34.2 32 32 32Z"/>
                </svg>
                <h5 className="text-[#1E1E1E]">Shopping</h5>
            </div>
            <div className="flex flex-col items-center gap-4 p-10 bg-primary_gray rounded border border-secondary_gray hover:border-gray-400 transition duration-200 cursor-pointer">
                <svg aria-hidden="true" width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="black" d="M32 12H36V8H32V12ZM34 40C31.2333 40 28.8753 39.0247 26.926 37.074C24.9767 35.1233 24.0013 32.7653 24 30C23.9987 27.2347 24.974 24.8767 26.926 22.926C28.878 20.9753 31.236 20 34 20C36.764 20 39.1227 20.9753 41.076 22.926C43.0293 24.8767 44.004 27.2347 44 30C43.996 32.7653 43.0207 35.124 41.074 37.076C39.1273 39.028 36.7693 40.0027 34 40ZM44 20.25C42.7 18.85 41.1833 17.7913 39.45 17.074C37.7167 16.3567 35.9 15.9987 34 16C33.6333 16 33.2913 16.0087 32.974 16.026C32.6567 16.0433 32.332 16.0847 32 16.15V14L18 3.9V0H44V20.25ZM0 36V16L14 6L28 16V17.35C25.6 18.4833 23.6667 20.2087 22.2 22.526C20.7333 24.8433 20 27.3347 20 30C20 31.0333 20.1087 32.0587 20.326 33.076C20.5433 34.0933 20.8847 35.068 21.35 36H18V24H10V36H0Z"/>
                </svg>
                <h5 className="text-[#1E1E1E]">Home Services</h5>
            </div>
            <div className="flex flex-col items-center gap-4 p-10 bg-primary_gray rounded border border-secondary_gray hover:border-gray-400 transition duration-200 cursor-pointer">
                <svg aria-hidden="true" width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 40C31.4333 40 30.9587 39.808 30.576 39.424C30.1933 39.04 30.0013 38.5653 30 38C29.9987 37.4347 30.1907 36.96 30.576 36.576C30.9613 36.192 31.436 36 32 36H38V32H32C31.4333 32 30.9587 31.808 30.576 31.424C30.1933 31.04 30.0013 30.5653 30 30C29.9987 29.4347 30.1907 28.96 30.576 28.576C30.9613 28.192 31.436 28 32 28H38V24H32C31.4333 24 30.9587 23.808 30.576 23.424C30.1933 23.04 30.0013 22.5653 30 22C29.9987 21.4347 30.1907 20.96 30.576 20.576C30.9613 20.192 31.436 20 32 20H38V16H32C31.4333 16 30.9587 15.808 30.576 15.424C30.1933 15.04 30.0013 14.5653 30 14C29.9987 13.4347 30.1907 12.96 30.576 12.576C30.9613 12.192 31.436 12 32 12H38V8H32C31.4333 8 30.9587 7.808 30.576 7.424C30.1933 7.04 30.0013 6.56533 30 6C29.9987 5.43467 30.1907 4.96 30.576 4.576C30.9613 4.192 31.436 4 32 4H40C41.1 4 42.042 4.392 42.826 5.176C43.61 5.96 44.0013 6.90133 44 8V36C44 37.1 43.6087 38.042 42.826 38.826C42.0433 39.61 41.1013 40.0013 40 40H32ZM8 40L0 18L10 12V0H18V12L28 18L20 40H8Z" fill="black"/>
                </svg>
                <h5 className="text-[#1E1E1E]">Health & Beauty</h5>
            </div>
            <div className="flex flex-col items-center gap-4 p-10 bg-primary_gray rounded border border-secondary_gray hover:border-gray-400 transition duration-200 cursor-pointer">
                <svg aria-hidden="true" width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="black" d="M12.675 8.00625L10.2281 15H37.7719L35.325 8.00625C34.9031 6.80625 33.7687 6 32.4938 6H15.5062C14.2312 6 13.0969 6.80625 12.675 8.00625ZM3.7125 15.45L7.0125 6.02813C8.27813 2.41875 11.6812 0 15.5062 0H32.4938C36.3188 0 39.7219 2.41875 40.9875 6.02813L44.2875 15.45C46.4625 16.35 48 18.4969 48 21V39C48 40.6594 46.6594 42 45 42H42C40.3406 42 39 40.6594 39 39V36H9V39C9 40.6594 7.65938 42 6 42H3C1.34062 42 0 40.6594 0 39V21C0 18.4969 1.5375 16.35 3.7125 15.45ZM12 25.5C12 24.7044 11.6839 23.9413 11.1213 23.3787C10.5587 22.8161 9.79565 22.5 9 22.5C8.20435 22.5 7.44129 22.8161 6.87868 23.3787C6.31607 23.9413 6 24.7044 6 25.5C6 26.2956 6.31607 27.0587 6.87868 27.6213C7.44129 28.1839 8.20435 28.5 9 28.5C9.79565 28.5 10.5587 28.1839 11.1213 27.6213C11.6839 27.0587 12 26.2956 12 25.5ZM39 28.5C39.7957 28.5 40.5587 28.1839 41.1213 27.6213C41.6839 27.0587 42 26.2956 42 25.5C42 24.7044 41.6839 23.9413 41.1213 23.3787C40.5587 22.8161 39.7957 22.5 39 22.5C38.2043 22.5 37.4413 22.8161 36.8787 23.3787C36.3161 23.9413 36 24.7044 36 25.5C36 26.2956 36.3161 27.0587 36.8787 27.6213C37.4413 28.1839 38.2043 28.5 39 28.5Z"/>
                </svg>
                <h5 className="text-[#1E1E1E]">Auto Care</h5>
            </div>
            <div className="flex flex-col items-center gap-4 p-10 bg-primary_gray rounded border border-secondary_gray hover:border-gray-400 transition duration-200 cursor-pointer">
                <svg aria-hidden="true" width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-3">
                    <path fill="black" d="M13.86 20L18 16.8L22.04 19.924L20.476 14.892L24.77 11.57H19.66L18 6.46L16.34 11.568H11.23L15.422 14.89L13.86 20ZM0 28V19.616C1.17733 19.18 2.138 18.4547 2.882 17.44C3.62733 16.4267 4 15.28 4 14C4 12.72 3.62733 11.5733 2.882 10.56C2.13667 9.54667 1.176 8.82133 0 8.384V0H36V8.384C34.8227 8.82 33.862 9.54533 33.118 10.56C32.3727 11.5733 32 12.72 32 14C32 15.28 32.3727 16.4267 33.118 17.44C33.8633 18.4533 34.824 19.1787 36 19.616V28H0Z"/>
                </svg>
                <h5 className="text-[#1E1E1E]">Events</h5>
            </div>
            <div className="flex flex-col items-center gap-4 p-10 bg-primary_gray rounded border border-secondary_gray hover:border-gray-400 transition duration-200 cursor-pointer">
                <svg aria-hidden="true" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="black" d="M36 8H30V4C30 1.78 28.22 0 26 0H14C11.78 0 10 1.78 10 4V8H4C1.78 8 0 9.78 0 12V34C0 36.22 1.78 38 4 38H36C38.22 38 40 36.22 40 34V12C40 9.78 38.22 8 36 8ZM14 4H26V8H14V4ZM36 34H4V30H36V34ZM36 24H4V12H10V16H14V12H26V16H30V12H36V24Z"/>
                </svg>
                <h5 className="text-[#1E1E1E]">Travel</h5>
            </div>
            <div className="flex flex-col items-center gap-4 p-10 bg-primary_gray rounded border border-secondary_gray hover:border-gray-400 transition duration-200 cursor-pointer">
                <svg aria-hidden="true" width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                    <path d="M4 0C1.8 0 0 1.8 0 4C0 6.2 1.8 8 4 8C6.2 8 8 6.2 8 4C8 1.8 6.2 0 4 0ZM28 0C25.8 0 24 1.8 24 4C24 6.2 25.8 8 28 8C30.2 8 32 6.2 32 4C32 1.8 30.2 0 28 0ZM16 0C13.8 0 12 1.8 12 4C12 6.2 13.8 8 16 8C18.2 8 20 6.2 20 4C20 1.8 18.2 0 16 0Z" fill="black"/>
                </svg>
                <h5 className="text-[#1E1E1E]">More</h5>
            </div>
        </div>
    </Section>
  )
}

export default Categories