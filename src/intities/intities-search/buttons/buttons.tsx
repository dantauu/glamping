
import ButtonSearch from '@/shared/ui/button-search/button-search'
import style from './buttons.module.scss'
import { useContext } from 'react'
import { ModalSearchContext } from '@/app/search/page'

const Buttons = () => {
    const { setShowSearchModal } = useContext(ModalSearchContext)
    return (
        <div className={style.buttonsMainWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Краснодарский край: найдено 42 варианта 
                </h1>
            </div>
            <div className={style.buttonsWrapper}>
                <ButtonSearch 
                    className={style.filter}
                    img={'/assets/img/filter.svg'}
                    text='Фильтры' 
                    modifyImg={style.modifyImg}
                    onClick={() => setShowSearchModal(true)}
                    />
                <ButtonSearch 
                    className={style.price} 
                    img={'/assets/img/arrow-grey.svg'} 
                    text='Цена' />
                <ButtonSearch 
                    className={style.rating}
                    text='Рейтинг 4+' />
                <ButtonSearch
                    className={style.popularity}
                    img={'/assets/img/arrow-grey.svg'}
                    text='По популярности' />
                <ButtonSearch
                    className={style.resetFilter}
                    text='Сбросить фильтры' 
                    modifyClass={style.modify}/>
            </div>
        </div>
    )
}

export default Buttons