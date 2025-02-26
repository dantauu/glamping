import DataBlock from '@/shared/ui/extra-nel-lk-ui/blocks-img/data-block/data-block'
import ArrowBlockIcon from '@/shared/ui/extra-nel-lk-ui/blocks-img/arrow-block-icon/arrow-block-icon'
import SearchBlock from '@/shared/ui/extra-nel-lk-ui/blocks-img/search-block/search-block'
import style from './balance-buttons.module.scss'


const BalanceButtons = () => {
   return (
         <div className={style.wrapper}>
            <DataBlock />
            <ArrowBlockIcon text='Все операции' />
            <SearchBlock />
         </div>
   )
}

export default BalanceButtons