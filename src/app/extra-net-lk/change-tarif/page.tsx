import ChangeTarif from "@/features/features-extra-net-lk/change-tarif/change-tarif"
import style from './page.module.scss'
import Link from "next/link"
import ButtonsNav from "@/shared/ui/extra-nel-lk-ui/buttons-nav/buttons-nav"


const ChangeTarifPage = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.title}>
            <h1 className={style.titleInner}>
               Выберите тарифы из списка или добавьте свои:
            </h1>
         </div>
         <ChangeTarif />
            <ButtonsNav 
               link="/extra-net-about-card-information/tarif" 
               linkSave="/extra-net-about-card-information/tarif" />
            <Link href={'/extra-net-lk/exclusive-tatif'} className={style.buttonTarif}>
               <div className={style.buttonImg}>
                  <img src={'/assets/img/plus-black.svg'} alt="" />
               </div>
               <div className={style.button}>
                  <button className={style.buttonInner}>
                     Добавить тариф
                  </button>
               </div>
            </Link>
      </div>
   )
}

export default ChangeTarifPage