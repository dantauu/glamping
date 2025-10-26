import NumberHomeCard from '@/entities/entities-extra-net-lk/number-home-card/number-home-card'
import style from './page.module.scss'
import Link from 'next/link'

const NumberHomePage = () => {
    return (
        <>
            <div className={style.titleWrapper}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Категории номеров/ домов (1)
                    </h1>
                </div>
                <Link href={'/add-number-object/add-information-number'}
                 className={style.buttonAdd}>
                    <div className={style.buttonIcon}>
                        <img src={'/assets/img/plus-white.svg'} alt="" />
                    </div>
                    <div className={style.button}>
                        <button className={style.buttonInner}>
                            Добавить номер
                        </button>
                    </div>
                </Link>
            </div>
            <div className={style.card}>
                <NumberHomeCard />
            </div>
        </>
    )
}

export default NumberHomePage