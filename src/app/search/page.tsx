import Header from "@/intities/intities-home/header/header"
import style from './search.module.scss'
import HeaderSearchInfo from "@/features/features-search/header-search-info/header-search-info"
import NavSearch from "@/features/features-search/nav-search/nav-search"
import Buttons from "@/intities/intities-search/buttons/buttons"
import ReviewsCard from "@/shared/ui/reviews-card/reviews-card"
// import Map from "@/features/features-search/map/map"

const Search = () => {
    return (
        <div className="container">
            <Header />
            <div className={style.border}></div>
            <NavSearch />
            <HeaderSearchInfo />
            <Buttons />
            <ReviewsCard />
            {/* <Map /> */}
        </div>
    )
}

export default Search