import style from './popular-btn.module.scss'

const PopularBtn = () => {
    return (
        <div className={style.popularWrapper}>
            <div className={style.popularText}>
                <p className={style.popularTextInner}>
                    Смотреть все
                </p>
            </div>
            <div className={style.popularImg}>
                <img className={style.popularImgInner} 
                src={'./assets/img/white-arrow.svg'} alt="" />
            </div>
        </div>
    )
}

export default PopularBtn