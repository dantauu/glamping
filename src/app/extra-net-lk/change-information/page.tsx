import ChangeInformationTitle from '@/features/features-extra-net-lk/change-information/change-information-title/change-information-title'
import ChangeInformationMap from '@/features/features-extra-net-lk/change-information/change-information-map/change-information-map'
import style from './page.module.scss'
import Link from 'next/link'

const ChangeInformationPage = () => {
    return (
        <>
        <div className={style.wrapperContainer}>
            <ChangeInformationTitle />
            <ChangeInformationMap />
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

export default ChangeInformationPage