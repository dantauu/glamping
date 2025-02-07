import CardLikeSection from "@/features/features-home/card-like-sesction/card-like-section";
import HeaderBack from "@/intities/intities-home/header-back/header-back";

import Header from "@/intities/intities-home/header/header";


export default function Home() {
  return (
    <div className="container">
      <Header />
      <HeaderBack />
      <CardLikeSection />
    </div>
  )
}
