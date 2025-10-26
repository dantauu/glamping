import style from './notify.module.scss'

const Notify = () => {
    return (
        <div className={style.notifyWrapper}>
            <div className={style.leftIcon}>
                <img src={'/assets/img/alert-orange.svg'} alt="" />
            </div>
            <div className={style.notifyText}>
                <p className={style.notifyTextInner}>
                    При заселении гражданам РФ необходимо будет предъявить паспорт РФ, детям — свидетельство о рождении. Иностранцам — иностранный паспорт.
                </p>
            </div>
        </div>
    )
}

export default Notify