import Popular from "@/entities/entities-home/popular/popular"
import style from './popular-section.module.scss'


const PopularSection = () => {
    return (
        <div className=''>
            <div className={style.title}>
                <h1 className={style.titleInner}>Популярные направления</h1>
            </div>
            <Popular />
        </div>
    )
}

export default PopularSection