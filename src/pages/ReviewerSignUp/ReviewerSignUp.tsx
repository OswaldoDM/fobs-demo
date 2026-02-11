import Button from "../../ui/Button";
import fobsImage from "/fobs-image.png";


function ReviewerSignUp() {
   return (
      <section className="flex h-screen">

         <div className="bg-black hidden lg:w-[50%] lg:flex lg:justify-center lg:items-center h-full">
            <div><img src={fobsImage} alt="FOBS" /></div>
         </div>

         <div className="w-full h-full lg:w-[50%]">
            <div className="px-4 lg:px-24 flex flex-col justify-center h-full">
               <h4 className="font-semibold mb-3">Create a new account</h4>
               <p className="text-[#494949] mb-3">Enter your details to sign up</p>
               <form className="flex flex-col gap-4">
                  <label htmlFor="username">
                     Username<span className="text-red-500">*</span>
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
                  <Button className="w-full">Sign Up</Button>
               </form>
            </div>
         </div>
      </section>
   )
}

export default ReviewerSignUp;