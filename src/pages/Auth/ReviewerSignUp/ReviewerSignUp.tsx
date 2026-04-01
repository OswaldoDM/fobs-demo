import fobsImage from "/fobs-image.png";
import fobsWhite from "/fobs-white.png";
import Button from "@/ui/Button";

function ReviewerSignUp() {
   return (
      <section className="flex min-h-screen px-4 lg:px-0">

         <div className="bg-black hidden lg:block lg:w-[50%] ">
            <div className="h-[92%] flex justify-center items-center">
               <img src={fobsImage} alt="FOBS" />
            </div>
            <p className="text-white text-center">Built for locals, by locals</p>
         </div>

         <div className="flex justify-center items-center w-full mb-3 lg:w-[50%]">
            <div className=" min-w-[60%]">
               <div className="flex justify-between items-center mt-3 mb-6 xl:mb-3 2xl:mb-6">
                  <img src={fobsWhite} alt="FOBS" className="lg:hidden" />
                  <p className='text-xs text-right w-full'>
                     Already have an account? 
                     <span className="text-blue-800 cursor-pointer ml-1">
                        Sign In
                     </span>
                  </p>
               </div>
               <h4 className="font-semibold mb-3">Create a new account</h4>
               <p className="text-[#494949] mb-4 2xl:mb-6">Enter your details to sign up</p>

               <form className="flex flex-col gap-3 2xl:gap-4 font-roboto">                  
                  <label htmlFor="username">
                     Username<span className="text-red-600">*</span>
                  </label>
                  <input
                     type="text"
                     name="username"
                     id="username"
                     placeholder="Username"
                     className="border border-[#939393] rounded-[4px] py-2 px-4"
                     required
                     autoComplete="on"
                  />

                  <label htmlFor="username">
                     Email<span className="text-red-500">*</span>
                  </label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Email"
                     autoComplete="on"
                     className="border border-[#939393] rounded-[4px] py-2 px-4"
                  />

                  <label htmlFor="username">
                     Password<span className="text-red-500">*</span>
                  </label>
                  <input
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Password"
                     className="border border-[#939393] rounded-[4px] py-2 px-4"
                  />
                  <Button className="w-full font-roboto py-3">SIGN UP</Button>
                  <div className="flex items-center gap-2">
                     <input type="checkbox" name="terms" id="terms" className="w-4 h-4" />
                     <p className="text-sm">
                        I agree to FOBS <span className="text-blue-800 cursor-pointer">Terms of Service</span> and acknowledge FOBS <span className="text-blue-800 cursor-pointer">Privacy Policy</span>
                     </p>
                  </div>
               </form>
               <p className="font-bold text-center mt-3">OR</p>
               <div className="mt-3 flex flex-col gap-2">
                  <Button 
                     variant="secondary" 
                     className="flex justify-center items-center gap-2 font-roboto border border-black w-full hover:bg-black hover:text-white transition duration-200">
                     Continue with Google
                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M17.66 7.2C17.756 7.2 17.839 7.267 17.855 7.361C17.949 7.887 18 8.453 18 9C18.0028 11.2148 17.186 13.3524 15.707 15.001C15.6727 15.0391 15.6248 15.0622 15.5737 15.0656C15.5225 15.069 15.472 15.0522 15.433 15.019L12.988 12.949C12.9669 12.9309 12.9498 12.9087 12.9375 12.8838C12.9252 12.8588 12.9181 12.8317 12.9166 12.8039C12.9151 12.7762 12.9193 12.7484 12.9288 12.7223C12.9383 12.6962 12.953 12.6723 12.972 12.652C13.4643 12.116 13.8433 11.4861 14.086 10.8H9.2C9.14696 10.8 9.09609 10.7789 9.05858 10.7414C9.02107 10.7039 9 10.653 9 10.6V7.4C9 7.29 9.09 7.2 9.2 7.2H17.66ZM11.473 13.8C11.509 13.7819 11.5495 13.7745 11.5895 13.7788C11.6296 13.783 11.6676 13.7987 11.699 13.824L14.267 15.997C14.2899 16.0161 14.3082 16.0401 14.3204 16.0673C14.3326 16.0945 14.3384 16.1241 14.3375 16.1539C14.3365 16.1837 14.3287 16.2129 14.3148 16.2393C14.3009 16.2656 14.2811 16.2884 14.257 16.306C12.7268 17.4101 10.887 18.003 9 18C7.50013 18.0001 6.024 17.6254 4.70579 16.9099C3.38759 16.1944 2.2691 15.1608 1.452 13.903C1.42525 13.8614 1.41513 13.8112 1.42365 13.7625C1.43218 13.7138 1.45872 13.6701 1.498 13.64L4.043 11.678C4.0664 11.6605 4.09324 11.6482 4.12175 11.6418C4.15026 11.6354 4.17979 11.6352 4.20841 11.641C4.23703 11.6469 4.26409 11.6587 4.2878 11.6758C4.31152 11.6928 4.33135 11.7147 4.346 11.74C5.04601 12.9288 6.17445 13.8045 7.49975 14.1876C8.82506 14.5707 10.2467 14.432 11.473 13.8ZM3.68 9.926C3.68697 9.96266 3.68355 10.0005 3.67012 10.0353C3.65669 10.0702 3.63379 10.1005 3.604 10.123L0.869003 12.23C0.844866 12.2489 0.816619 12.262 0.786537 12.268C0.756454 12.274 0.725375 12.2729 0.695802 12.2647C0.666228 12.2566 0.638986 12.2416 0.616268 12.2209C0.59355 12.2003 0.575991 12.1746 0.565003 12.146C0.190471 11.1394 -0.000879698 10.074 3.04027e-06 9C3.04027e-06 7.848 0.217003 6.746 0.612003 5.733C0.623095 5.70508 0.640457 5.68008 0.662748 5.65994C0.685039 5.6398 0.711662 5.62505 0.740561 5.61683C0.769459 5.60862 0.799859 5.60716 0.829413 5.61256C0.858966 5.61797 0.886882 5.63009 0.911003 5.648L3.643 7.652C3.708 7.699 3.738 7.782 3.721 7.86C3.57414 8.53954 3.56088 9.24105 3.68 9.926ZM4.147 6.161C4.243 6.231 4.378 6.203 4.442 6.103C4.92967 5.33588 5.6031 4.70427 6.39988 4.26673C7.19665 3.82918 8.09099 3.59985 9 3.6C10.257 3.59958 11.4744 4.04017 12.44 4.845C12.479 4.87802 12.5289 4.8953 12.5799 4.89345C12.631 4.8916 12.6795 4.87076 12.716 4.835L14.982 2.568C15.001 2.54912 15.0159 2.52657 15.0259 2.50173C15.0359 2.47688 15.0407 2.45026 15.04 2.4235C15.0394 2.39673 15.0333 2.37038 15.0221 2.34605C15.0109 2.32172 14.9949 2.29993 14.975 2.282C13.3324 0.811355 11.2048 -0.00124217 9 2.02343e-06C7.51964 -0.000991092 6.06193 0.363602 4.75635 1.0614C3.45076 1.75921 2.3377 2.76862 1.516 4C1.48838 4.0423 1.47806 4.0936 1.48718 4.14329C1.49629 4.19298 1.52416 4.23727 1.565 4.267L4.147 6.161Z"/>
                     </svg>
                  </Button>
                  <Button 
                     variant="secondary" 
                     className="flex justify-center items-center gap-2 font-roboto border border-black w-full hover:bg-black hover:text-white transition duration-200">
                        Continue with Apple
                        <svg width="18" height="18" viewBox="0 0 16 18" fill="none" className="mb-1" xmlns="http://www.w3.org/2000/svg">
                           <path fill="currentColor" d="M12.6371 17.28C11.6571 18.23 10.5871 18.08 9.55708 17.63C8.46708 17.17 7.46708 17.15 6.31708 17.63C4.87708 18.25 4.11708 18.07 3.25708 17.28C-1.62292 12.25 -0.902922 4.59 4.63708 4.31C5.98708 4.38 6.92708 5.05 7.71708 5.11C8.89708 4.87 10.0271 4.18 11.2871 4.27C12.7971 4.39 13.9371 4.99 14.6871 6.07C11.5671 7.94 12.3071 12.05 15.1671 13.2C14.5971 14.7 13.8571 16.19 12.6271 17.29L12.6371 17.28ZM7.61708 4.25C7.46708 2.02 9.27708 0.18 11.3571 0C11.6471 2.58 9.01708 4.5 7.61708 4.25Z"/>
                        </svg>
                  </Button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ReviewerSignUp;