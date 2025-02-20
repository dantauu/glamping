import InputObject from '@/shared/ui/add-card-object-ui/input-object/input-object'
import style from './three-inputs.module.scss'

const ThreeInputs = () => {
    return (
        <div className={style.threeInputsWrapper}>
            <InputObject text='Телефон для гостей*' />
            <InputObject text='E-mail для гостей*' />
            <div className={style.inputTg}>
                <input className={style.inputInner} placeholder='Telegram' type="text" />
            </div>
        </div>
    )
}

export default ThreeInputs