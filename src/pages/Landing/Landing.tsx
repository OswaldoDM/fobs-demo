import Modal from "../../ui/Modal";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import PopularReviews from "./components/PopularReviews";
import Recommended from "./components/Recommended";
import TrendingArticles from "./components/TrendingArticles";
import TrendingBusinesses from "./components/TrendingBusinesses";
import { useModalStore } from "../../store/useModalStore";

function Landing() {
  const isOpen = useModalStore((state) => state.isOpen);

  return (
    <>
    <Hero />
    <Recommended />     
    <TrendingArticles />
    <TrendingBusinesses />
    <PopularReviews />
    <Categories />
    {isOpen && <Modal />}
    </>
    
  )
}

export default Landing;