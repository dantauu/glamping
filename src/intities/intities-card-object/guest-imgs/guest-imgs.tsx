import { guestImgsItems } from '../../../../public/data/data'
import style from './guest-imgs.module.scss'

const GuestImgs = () => {
    return (
        <div className={style.guestImgsWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Фото и видео гостей:
                </h1>
            </div>
            <div className={style.wrapperImg}>
            {guestImgsItems.map((item, index) => (
                <div className={style.itemImgCard}>
                    <div key={index} className={style.guestImgsItem}>
                        <img src={item.img} alt="" />
                    </div>
                    {item.id === 6 && (
                        <div className={style.textImg}>
                            <p className={style.textImgInner}>
                                + 17 фото
                            </p>
                        </div>
                    )}
                </div>
            ))}
            </div>
        </div>
    )
}

export default GuestImgs