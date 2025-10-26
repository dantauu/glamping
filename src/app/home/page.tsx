import Blog from "@/features/features-home/blog/blog";
import CardLikeSection from "@/features/features-home/card-like-sesction/card-like-section";
import PopularSection from "@/features/features-home/popular-section/popular-section";
import Question from "@/features/features-home/question/question";
import Advantages from "@/entities/entities-home/advantages/advantages";
import BestProposal from "@/entities/entities-home/best-proposal/best-proposal";
import Footer from "@/entities/entities-home/footer/footer";
import HeaderBack from "@/entities/entities-home/header-back/header-back";
import Header from "@/entities/entities-home/header/header";
import Relax from "@/entities/entities-home/relax/relax";
import RestKidsSection from "@/entities/entities-home/rest-kids-section/rest-kids-section";
import RomanceSection from "@/entities/entities-home/romance-sesction/romance-section";
import SngCountry from "@/entities/entities-home/sng-country/sng-country";



export default function Home() {
  return (
		<>
			<div className='container'>
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
			<Footer />
		</>
	)
}
