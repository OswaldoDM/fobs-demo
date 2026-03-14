import Button from "../../ui/Button";
import fobsImage from "/fobs-image.png";

function ReviewerSignUp() {
   return (
      <section className="flex min-h-screen">

         <div className="bg-black hidden lg:block lg:w-[50%] ">
            <div className="h-[92%] flex justify-center items-center">
               <img src={fobsImage} alt="FOBS" />
            </div>
            <p className="text-white text-center">Built for locals, by locals</p>
         </div>

         <div className="flex justify-center items-center lg:w-[50%]">
            <div className=" min-w-[60%]">
               <p className='text-xs text-right mb-6'>
                  Already have an account? 
                  <span className="text-blue-700 cursor-pointer ml-1">
                     Sign In
                  </span>
               </p>
               <h4 className="font-semibold mb-3">Create a new account</h4>
               <p className="text-[#494949] mb-6">Enter your details to sign up</p>
               <form className="flex flex-col gap-4 font-roboto">
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
               </form>
            </div>
         </div>
      </section>
   )
}

export default ReviewerSignUp;