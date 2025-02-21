import style from './tarif-list.module.scss'

const TarifList = () => {
    return (
        <div className={style.tarifListWrapper}>
            <div className={style.tarifTitle}>
                <h1 className={style.tarifTitleInner}>
                    Выберите тарифы из списка или добавьте свои:
                </h1>
            </div>
            <div className={style.tarifListItemsWrapper}>
                
            </div>
        </div>
    )
}

export default TarifList