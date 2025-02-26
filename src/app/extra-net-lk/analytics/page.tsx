import AnalyticsTable from "@/features/features-extra-net-lk/analytics/analytics-table/analytics-table"
import Chart from "@/features/features-extra-net-lk/analytics/chart/chart"
import AnalyticsTitle from "@/intities/intities-extra-net-lk/analytics/analytics-title/analytics-title"
import style from './page.module.scss'


const Analytics = () => {
   return (
      <div className="">
         <AnalyticsTitle />
         <div className={style.wrapper}>
            <Chart />
            <AnalyticsTable />
         </div>
      </div>
   )
}

export default Analytics