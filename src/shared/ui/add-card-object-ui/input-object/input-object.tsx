import style from './input-object.module.scss'

const InputObject = ({ wrapper, text }:
     { wrapper?: string, text?: string }) => {
    return (
        <div className={`${style.inputObjectWrapper} ${wrapper}`}>
            <div className={style.upPart}>
                <p className={style.upPartInner}>
                    {text}
                </p>
            </div>
            <div className={style.downPart}>
                <input className={style.downPartInner} type='text'/>
            </div>
        </div>
    )
}

export default InputObject