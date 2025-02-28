
import ButtonSearch from '@/shared/ui/button-search/button-search'
import { useModalSearch } from '@/providers/modal-search/modal-search'
import style from './buttons.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from 'next/link'

const Buttons = () => {
    const { setShowSearchModal } = useModalSearch()
    const isMobile = useMediaQuery('(max-width: 700px)')
    return (
        <div className={style.buttonsMainWrapper}>
            {isMobile ? (
                <div className={style.locateWrapper}>
                    <Link href={'/home'} className={style.locateArrow}>
                        <img className={style.locateArrowInner} 
                            src={'/assets/img/arrow-slide.svg'} alt="" />
                    </Link>
                    <div className={style.locateTextWrapper}>
                        <div className={style.locateTitle}>
                            <p className={style.locateTitleInner}>
                                Краснодарский край, Россия
                            </p>
                        </div>
                        <div className={style.locateTitleDescription}>
                            <p className={style.locateTitleDescriptionInner}>
                                29 июл - 2 авг · 5 ночей · 2 взр+2 дет 
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Краснодарский край: найдено 42 варианта 
                    </h1>
                </div>
            )}
            <div className={style.buttonsWrapper}>
                <ButtonSearch 
                    className={style.filter}
                    text='Фильтры' 
                    modifyImg={style.modifyImg}
                    onClick={() => setShowSearchModal(true)}
                    iconArrow={style.iconArrow}
                    modifyClass={style.mobile}
                    />
                <ButtonSearch 
                    className={style.price} 
                    text='Цена'
                    iconFilter={style.iconFilter} />
                <ButtonSearch 
                    className={style.rating}
                    text='Рейтинг 4+' />
                <ButtonSearch
                    className={style.popularity}
                    text='По популярности'
                    iconFilter={style.iconFilter} />
                <ButtonSearch
                    className={style.resetFilter}
                    text='Сбросить фильтры' 
                    modifyClass={style.modify}/>
            </div>
        </div>
    )
}

export default Buttons