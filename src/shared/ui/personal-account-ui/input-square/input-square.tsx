import style from './input-square.module.scss'

const InputSquare = () => {
    return (
        <div className={style.input}>
            <input className={style.inputInner} type="text" />
        </div>
    )
}

export default InputSquare