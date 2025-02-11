import style from './checkbox-circke.module.scss'

const CheckBoxCicle = () => {
    return (
        <label>
            <input className={style.input} type="checkbox" />
            <span className={style.customCheckbox}></span>
        </label>
    )
}

export default CheckBoxCicle