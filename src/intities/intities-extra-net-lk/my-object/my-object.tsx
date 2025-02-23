import ExtraNetCardProgress from "@/shared/ui/extra-nel-lk-ui/extra-net-card-progress/extra-net-card-progress"
import ExtraNetCard from "@/shared/ui/extra-nel-lk-ui/extra-net-card/extra-net-card"
import style from './my-object.module.scss'


const MyObject = () => {
    return (
        <div className={style.wrapper}>
            <ExtraNetCardProgress />
            <ExtraNetCard />
        </div>
    )
}

export default MyObject