import style from './header-add-card-object.module.scss'

const HeaderAddCardObject = () => {
    return (
        <div className={style.headerAddWrapper}>
            <div className={style.titleWrapper}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        GLAMPING RUSSIA
                    </h1>
                </div>
                <div className={style.titleText}>
                    <p className={style.titleTextInner}>
                        | Экстранет
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderAddCardObject