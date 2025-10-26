import TarifCard from '@/entities/entities-extra-net-lk/tarif-card/tarif-card'
import style from './page.module.scss'
import Link from 'next/link'


const TarifPage = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.titleWrapper}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Тарифы (2)
                    </h1>
                </div>
                <Link href={'/extra-net-lk/change-tarif'} className={style.buttonWrapper}>
                    <div className={style.buttonImg}>
                        <img src={'/assets/img/plus-white.svg'} alt="" />
                    </div>
                    <div className={style.buton}>
                        <button className={style.buttonInner}>
                            Добавить/ изменить тариф
                        </button>
                    </div>
                </Link>
            </div>
            <TarifCard />
        </div>
    )
}

export default TarifPage