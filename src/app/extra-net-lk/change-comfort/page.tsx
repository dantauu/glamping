import ChangeComfortTitle from "@/features/features-extra-net-lk/change-comfort/change-comfort-title/change-comfort-title"
import style from './page.module.scss'
import ChangeComfortCheck from "@/features/features-extra-net-lk/change-comfort/change-comfort-check/change-comfort-check"
import Link from "next/link"

const ChangeComfort = () => {
    return (
        <>
        <div className={style.wrapperContainer}>
            <ChangeComfortTitle />
            <ChangeComfortCheck />
        </div>
        <div className={style.buttonWrapper}>
                <Link href={'/extra-net-about-card-information/about-card'}
                 className={style.buttonBack}>
                    <button className={style.buttonBackInner}>
                        Назад
                    </button>
                </Link>
                <div className={style.buttonSave}>
                    <button className={style.buttonSaveInner}>
                        Сохранить
                    </button>
                </div>
            </div>
        </>
    )
}

export default ChangeComfort