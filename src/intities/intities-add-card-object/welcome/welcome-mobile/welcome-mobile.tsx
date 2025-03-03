import Link from 'next/link'
import style from './welcome-mobile.module.scss'

const WelclomeMobile = () => {
    return (
        <div className={style.welcomeWrapperBack}>
            <div className={style.welcomeBlockWrapper}>
               <div className={style.backImg}>
                  <img src={'/assets/img/back-register.png'} alt="" />
               </div>
            <div className={style.welcomeBlock}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Добро пожаловать на Glamping Russia!
                    </h1>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Ваши данные отправлены на модерацию. Теперь вы можете настроить интеграцию с вашим менеджером каналов. Если у вас нет менеджера каналов, то настроить доступность номеров и цены можно в личном кабинете. После прохождения  модерации ваш объект будет опубликован на сайте.
                    </p>
                </div>
                <div className={style.wrapperButtons}>
                    <div className={style.buttonSet}>
                        <button className={style.buttonInner}>
                            Настроить интеграцию с менеджером каналов
                        </button>
                    </div>
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

export default WelclomeMobile