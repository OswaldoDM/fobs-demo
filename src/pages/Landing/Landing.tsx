import Categories from "./components/Categories";
import Hero from "./components/Hero";
import PopularReviews from "./components/PopularReviews";
import Recommended from "./components/Recommended";
import TrendingArticles from "./components/TrendingArticles";
import TrendingBusinesses from "./components/TrendingBusinesses";

function Landing() {
  return (
    <>
    <Hero />
    <Recommended />     
    <TrendingArticles />
    <TrendingBusinesses />
    <PopularReviews />
    <Categories />
    </>
    
  )
}

export default Landing;