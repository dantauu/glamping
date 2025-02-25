import TarifMain from "@/features/features-extra-net-lk/exclusive-tatif/tarif-main/tarif-main"
import style from "./page.module.scss"
import TarifDiscount from "@/features/features-extra-net-lk/exclusive-tatif/tarif-discount/tarif-discount"
import TarifCondition from "@/features/features-extra-net-lk/exclusive-tatif/tarif-condition/tarif-condition"
import Link from "next/link"
import ButtonsNav from "@/shared/ui/extra-nel-lk-ui/buttons-nav/buttons-nav"


const ExclusiveTarif = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.titleWrapper}>
            <div className={style.title}>
               <h1 className={style.titleInner}>
                  Свой тариф
               </h1>
            </div>
            <div className={style.mainTitle}>
               <h2 className={style.mainTitleInner}>
                  Взять за основу тариф:
               </h2>
            </div>
         </div>
         <div className={style.components}>
               <TarifMain />
               <div className={style.discount}>
                  <TarifDiscount />
               </div>
               <TarifCondition />
            </div>
            <ButtonsNav 
               link="/extra-net-lk/change-tarif"
               linkSave="" />
      </div>
   )
}

export default ExclusiveTarif