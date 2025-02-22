import style from './modal-location.module.scss'

const ModalLocation = ({ onClose }: any) => {
    return (
        <div className={style.modalLocationWrapper}>
            <div className={style.title}>
                <h3 className={style.titleInner}>
                    Популярные направления
                </h3>
            </div>
            <div className={style.townWrapper}>
                <div onClick={() => onClose(false)} className={style.townItem}>
                    <div className={style.townImg}>
                        <img className={style.townImgInner}
                            src={'/assets/img/glamping-icon.svg'} alt="" />
                    </div>
                    <div className={style.townText}>
                        <p className={style.townTextInner}>
                            Москва, Россия
                        </p>
                    </div>
                </div>
                <div onClick={() => onClose(false)} className={style.townItem}>
                    <div className={style.townImg}>
                        <img className={style.townImgInner}
                         src={'/assets/img/glamping-icon.svg'} alt="" />
                    </div>
                    <div className={style.townText}>
                        <p className={style.townTextInner}>
                            Санкт-Петербург, Россия
                        </p>
                    </div>
                </div>
                <div onClick={() => onClose(false)} className={style.townItem}>
                    <div className={style.townImg}>
                        <img className={style.townImgInner}
                         src={'/assets/img/glamping-icon.svg'} alt="" />
                    </div>
                    <div className={style.townText}>
                        <p className={style.townTextInner}>
                            Екатеринбург, Свердловская область
                        </p>
                    </div>
                </div>
                <div onClick={() => onClose(false)} className={style.townItem}>
                    <div className={style.townImg}>
                        <img className={style.townImgInner}
                            src={'/assets/img/glamping-icon.svg'} alt="" />
                    </div>
                    <div className={style.townText}>
                        <p className={style.townTextInner}>
                            Сочи, Краснодарский край
                        </p>
                    </div>
                </div>
                <div onClick={() => onClose(false)}
                 className={`${style.townItem} ${style.radiusModify}`}>
                    <div className={style.townImg}>
                        <img className={style.townImgInner}
                         src={'/assets/img/glamping-icon.svg'} alt="" />
                    </div>
                    <div className={style.townText}>
                        <p className={style.townTextInner}>
                            Анапа, Краснодарский край
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLocation