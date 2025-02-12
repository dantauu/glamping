import style from './search-result-title.module.scss'

const SearchResultTitle = () => {
    return (
			<div className={style.searchResultWrapper}>
				<div className={style.searchLeftPart}>
					<p className={style.searchLeftPartInner}>
						По вашему запросу найдено: 3
					</p>
				</div>
				<div className={style.searchRightPart}>
					<div className={style.searchRightFilter}>
						<p className={style.searchRightFilterInner}>
                            Фильровать:
                        </p>
					</div>
                    <div className="">
                        <button className={style.buttonOn}>
                            Завтрак включён
                        </button>
                    </div>
                    <div className={style.buttonWrapper}>
                        <div className="">
                            <button className={style.buttonOff}>
                                Бесплатная отмена
                            </button>
                        </div>
                        <div className="">
                            <img className={style.crossInner} src={'/assets/img/cross-white.svg'} alt="" />
                        </div>
                    </div>
				</div>
			</div>
		)
}

export default SearchResultTitle