import { useNavigate } from "react-router";
import { useModalStore } from "../store/useModalStore";

function Modal() {
   const closeModal = useModalStore((state) => state.closeModal);
   const navigate = useNavigate();

   const handleSelect = (role: "reviewer" | "business") => {
     closeModal();
     navigate(role === "reviewer" ? "/reviewer-sign-up" : "/business-sign-up");
   };

   return (
      <div
         className="fixed inset-0 flex flex-col justify-center items-center bg-black/50 z-10 cursor-pointer"
         onClick={closeModal}
      >
         <div
            className="flex flex-col gap-8 bg-white rounded-lg pt-12 pb-10 px-10 cursor-default min-w-[522px]"
            onClick={(e) => e.stopPropagation()}
         >
            <div className="flex justify-between items-center">
               <h5 className="font-medium">Select your role to continue</h5>
               <svg onClick={closeModal} className="cursor-pointer" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="black" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
               </svg>
            </div>
            <div className="flex justify-between items-center border border-l-4 border-[#ABABAB] rounded-[4px] p-4">
               <div>
                  <p className="font-bold">I am a Reviewer</p>
                  <p>Review & discover local gems</p>
               </div>
               <input
                  type="checkbox"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#7A7A7A] 
                  cursor-pointer transition-all duration-200 checked:bg-blue-500 checked:border-blue-500
                  checked:ring-2 checked:ring-blue-500 checked:ring-offset-2"
                  onClick={() => handleSelect("reviewer")}
               />
            </div>
            <div className="flex justify-between items-center border border-l-4 border-[#ABABAB] rounded-[4px] p-4">
               <div>
                  <p className="font-bold">I am a Business Owner</p>
                  <p>Showcase and grow your business</p>
               </div>
               <input
                  type="checkbox"
                  className="appearance-none w-6 h-6 rounded-full border-2 border-[#7A7A7A] 
                  cursor-pointer transition-all duration-200 checked:bg-blue-500 checked:border-blue-500
                  checked:ring-2 checked:ring-blue-500 checked:ring-offset-2"
                  onClick={() => handleSelect("business")}
               />
            </div>
         </div>
      </div>
   )
}

export default Modal