import AnalyticsTable from "@/features/features-extra-net-lk/analytics/analytics-table/analytics-table"
import Chart from "@/features/features-extra-net-lk/analytics/chart/chart"
import AnalyticsTitle from "@/intities/intities-extra-net-lk/analytics/analytics-title/analytics-title"
import style from './page.module.scss'
import AnalyticsIndicators from "@/intities/intities-extra-net-lk/analytics/analytics-indicators/analytics-indicators"
import AnalyticsReviews from "@/intities/intities-extra-net-lk/analytics/analytics-reviews/analytics-reviews"


const Analytics = () => {
   return (
      <div className="">
         <AnalyticsTitle />
         <div className={style.wrapper}>
            <Chart />
            <AnalyticsTable />
         </div>
         <AnalyticsIndicators />
         <AnalyticsReviews />
      </div>
   )
}

export default Analytics