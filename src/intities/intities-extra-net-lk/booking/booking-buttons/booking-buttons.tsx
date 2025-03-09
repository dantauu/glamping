import DataBlock from '@/shared/ui/extra-nel-lk-ui/blocks-img/data-block/data-block'
import style from './booking-buttons.module.scss'
import ArrowBlockIcon from '@/shared/ui/extra-nel-lk-ui/blocks-img/arrow-block-icon/arrow-block-icon'
import SearchBlock from '@/shared/ui/extra-nel-lk-ui/blocks-img/search-block/search-block'

const BookingButtons = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.bookingButtonsWrapper}>
            <DataBlock wrapperClass={style.wrapperButton} />
            <ArrowBlockIcon wrapperClassIcon={style.wrapperButton} text='Все брони' />
            <ArrowBlockIcon wrapperClassIcon={style.wrapperButtonStatus} classText={style.text} text='Все по статусу заказа' />
         </div>
         <div className="">
            <SearchBlock classWrapperSearch={style.wrapperSearch} />
         </div>
      </div>
   )
}

export default BookingButtons