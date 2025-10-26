import BalanceButtons from "@/entities/entities-extra-net-lk/balance/balance-buttons/balance-buttons"
import BalanceTable from "@/entities/entities-extra-net-lk/balance/balance-table/balance-table"
import BalaneTitle from "@/entities/entities-extra-net-lk/balance/balance-title/balance-title"


const BalancePage = () => {
   return (
      <>
         <BalaneTitle />
         <BalanceButtons />
         <BalanceTable />
      </>
   )
}

export default BalancePage