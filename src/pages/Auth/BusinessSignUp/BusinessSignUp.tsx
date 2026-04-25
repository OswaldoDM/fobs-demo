import fobsImage from "/fobs-image.png";
import Section from "@/ui/Section";


function BusinessSignUp() {
  return (
    <>
    <nav className="bg-black ">
      <div className="container mx-auto px-4 py-4 xl:px-0 font-roboto">
        <div className="flex items-center gap-3">
          <img src={fobsImage} alt="Fobs logo" className="w-12 h-12" />
          <p className="text-white text-sm font-semibold">Business</p>
        </div>
      </div>
    </nav>

    <Section>      
      <h1 className="pt-20">Business Sign Up</h1>
    </Section>
    </>
  )
}

export default BusinessSignUp;