import Recommended from "./components/Recommended";

function Landing() {
  return (
    <>
    <div className="flex flex-col items-center justify-center gap-4 py-44 lg:py-56 text-center px-3 lg:px-0">
      <h1>Built for locals, by locals</h1>
      <h5>Discover, review, and support family-owned businesses near you.</h5>      
    </div>
    <Recommended/>     

    {/* Trending Articles */}
    </>
    
  )
}

export default Landing;