import style from './three-steps.module.scss'

const ThreeSteps = () => {
    return (
        <div className={style.threeStepsWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Добавьте объект бронирования за 
                    <span className={style.span}> 3 простых шага</span>
                </h1>
            </div>
            <div className={style.wrapperBlocks}>
                <div className={style.itemBlock}>
                    <div className={style.number}>
                        <p className={style.numberInner}>
                            1
                        </p>
                    </div>
                    <div className={style.titleBlock}>
                        <h2 className={style.titleBlockInner}>
                            Зарегистрируйте ваш объект на сайте 
                        </h2>
                    </div>
                </div>
                <div className={style.itemBlock}>
                    <div className={style.number}>
                        <p className={style.numberInner}>
                            2
                        </p>
                    </div>
                    <div className={style.wrapper}>
                    <div className={style.titleBlockDesc}>
                        <h2 className={style.titleBlockInner}>
                            Зарегистрируйте ваш объект на сайте 
                        </h2>
                    </div>
                    <div className={style.description}>
                        <p className={style.descriptionInner}>
                            (если не используете, то введите данные об объекте вручную).
                        </p>
                    </div>
                    </div>
                </div>
                <div className={style.itemBlock}>
                    <div className={style.number}>
                        <p className={style.numberInner}>
                            3
                        </p>
                    </div>
                    <div className={style.titleBlock}>
                        <h2 className={style.titleBlockInner}>
                            Ожидайте, пока модератор проверит данные
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeSteps