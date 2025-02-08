import Romance from "@/shared/ui/romance/romance"
import style from './romance-section.module.scss'

const RomanceSection = () => {
    return (
        <div className=''>
            <div className={style.romanceTitle}>
                <h1 className={style.romanceTitleInner}>
                    От романтики до приключений
                </h1>
            </div>
            <Romance />
        </div>
    )
}

export default RomanceSection