import style from './welcome.module.scss'

const Welclome = () => {
    return (
        <div className={style.welcomeWrapperBack}>
            <div className={style.welcomeBlockWrapper}>
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
                    <div className={style.buttonLk}>
                        <button className={style.buttonInnerLk}>
                            Перейти в Личный кабинет
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Welclome