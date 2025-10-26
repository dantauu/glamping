import style from './about-object-title.module.scss'

const AboutObjectTitle = () => {
    return (
        <div className={style.aboutObjectTitleWrapper}>
            <div className={style.titleWrapper}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Об объекте
                    </h1>
                </div>
                <div className={style.desscription}>
                    <p className={style.desscriptionInner}>
                        Выберите до 9 услуг, которые есть на территории вашего объекта. Они будут отображаться в карточке объекта на сайте
                    </p>
                </div>
                <div className={style.arrow}>
                    <img src={'/assets/img/porabola.svg'} alt="" />
                </div>
            </div>
            <div className={style.img}>
                <img src={'/assets/img/card-item.jpg'} alt="" />
            </div>
        </div>
    )
}

export default AboutObjectTitle