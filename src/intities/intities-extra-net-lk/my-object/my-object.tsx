import ExtraNetCardProgress from "@/shared/ui/extra-nel-lk-ui/extra-net-card-progress/extra-net-card-progress"
import ExtraNetCard from "@/shared/ui/extra-nel-lk-ui/extra-net-card/extra-net-card"
import style from './my-object.module.scss'


const MyObject = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.titleWrapper}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Мои Объекты (2)
                    </h1>
                </div>
                <div className={style.buttonWrapper}>
                    <div className={style.iconButton}>
                        <img src={'/assets/img/plus-black.svg'} alt="" />
                    </div>
                    <div className={style.button}>
                        <button className={style.buttonInner}>
                            Мои объекты
                        </button>
                    </div>
                </div>
            </div>
            <ExtraNetCard />
            <ExtraNetCardProgress />
        </div>
    )
}

export default MyObject