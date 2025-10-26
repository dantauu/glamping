import style from './modal-location.module.scss'

const items = [
    'Москва, Россия',
    'Санкт-Петербург, Россия',
    'Екатеринбург, Свердловская область',
    'Сочи, Краснодарский край',
    'Анапа, Краснодарский край'
]

const ModalLocation = ({ onClose, selectedLocate, setSelectedLocate }: any) => {
    const handleSelect = (item: string) => {
        setSelectedLocate(item)
        onClose(false)
    }
    return (
        <div className={style.modalLocationWrapper}>
            <div className={style.title}>
                <h3 className={style.titleInner}>
                    Популярные направления
                </h3>
            </div>
            <div className={style.townWrapper}>
                {items.map((item) => (
                    <div key={item} onClick={() => handleSelect(item)} 
                        className={style.townItem}>
                        <div className={style.townImg}>
                            <img className={style.townImgInner}
                                src={'/assets/img/glamping-icon.svg'} alt="" />
                        </div>
                        <div className={style.townText}>
                            <p className={style.townTextInner}>
                                {item}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ModalLocation