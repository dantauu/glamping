import Blog from "@/features/features-home/blog/blog";
import CardLikeSection from "@/features/features-home/card-like-sesction/card-like-section";
import PopularSection from "@/features/features-home/popular-section/popular-section";
import Question from "@/features/features-home/question/question";
import Advantages from "@/intities/intities-home/advantages/advantages";
import BestProposal from "@/intities/intities-home/best-proposal/best-proposal";
import HeaderBack from "@/intities/intities-home/header-back/header-back";
import Header from "@/intities/intities-home/header/header";
import Relax from "@/intities/intities-home/relax/relax";
import RestKidsSection from "@/intities/intities-home/rest-kids-section/rest-kids-section";
import RomanceSection from "@/intities/intities-home/romance-sesction/romance-section";
import SngCountry from "@/intities/intities-home/sng-country/sng-country";



export default function Home() {
  return (
    <div className="container">
      <Header />
      <HeaderBack />
      <CardLikeSection />
      <Relax />
      <RestKidsSection />
      <BestProposal />
      <RomanceSection />
      <PopularSection />
      <SngCountry />
      <Advantages />
      <Blog />
      <Question />
    </div>
  )
}
