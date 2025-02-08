import RestKids from '@/shared/ui/rest-cids/rest-kids'
import style from './rest-kids-section.module.scss'

const RestKidsSection = () => {
    return (
        <div className="">
                <div className={style.kidsTitle}>
                    <h1 className={style.kidsTitleInner}>
                        Отдохнуть с детьми
                    </h1>
                </div>
            <RestKids />
        </div>
    )
}

export default RestKidsSection