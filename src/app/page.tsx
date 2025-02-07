import CardLikeSection from "@/features/card-like-sesction/card-like-section";
import HeaderBack from "@/intities/header-back/header-back";
import Header from "@/intities/header/header";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <HeaderBack />
      <CardLikeSection />
    </div>
  )
}
