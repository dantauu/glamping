import CardLikeSection from "@/features/features-home/card-like-sesction/card-like-section";
import BestSummer from "@/intities/intities-home/best-summer/best-summer";
import HeaderBack from "@/intities/intities-home/header-back/header-back";
import Header from "@/intities/intities-home/header/header";
import Relax from "@/intities/intities-home/relax/relax";
import RestKidsSection from "@/intities/intities-home/rest-kids-section/rest-kids-section";



export default function Home() {
  return (
    <div className="container">
      <Header />
      <HeaderBack />
      <CardLikeSection />
      <Relax />
      <RestKidsSection />
      <BestSummer />
    </div>
  )
}
