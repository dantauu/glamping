import Link from 'next/link'
import style from './thanks-mobile.module.scss'

const ThanksMobile = () => {
    return (
        <div className={style.welcomeWrapperBack}>
            <div className={style.welcomeBlockWrapper}>
               <div className={style.backImg}>
                  <img src={'/assets/img/back-register.png'} alt="" />
               </div>
            <div className={style.welcomeBlock}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Благодарим за регистрацию!
                    </h1>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Пока мы проверяем ваши данные, вы можете зарегистрировать объект размещения и подключить менеджер каналов в личном кабинете.
                    </p>
                </div>
                <div className={style.wrapperButtons}>
                    <Link href={'/extra-net-lk/my-object'} className={style.buttonLk}>
                        <button className={style.buttonInnerLk}>
                            Перейти в Личный кабинет
                        </button>
                    </Link>
                </div>
                <Link href={'/extra-net'} className={style.krest}>
                  <img src={'/assets/img/krest.svg'} alt="" />
               </Link>
            </div>
            </div>
        </div>
    )
}

export default ThanksMobile