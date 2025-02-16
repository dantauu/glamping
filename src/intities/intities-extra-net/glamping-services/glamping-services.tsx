import style from './glamping-services.module.scss'

const GlampingServices = () => {
    return (
        <div className={style.glampingServicesWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Glamping Russia — это сервис 
                    <span className={style.span}> онлайн бронирования</span> загородных отелей в России и СНГ.
                </h1>
            </div>
        </div>
    )
}

export default GlampingServices