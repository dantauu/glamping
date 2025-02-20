import InputObject from '@/shared/ui/add-card-object-ui/input-object/input-object'
import style from './title-input-name.module.scss'

const TitleInputName = () => {
    return (
        <div className={style.titleInputNameWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Объект размещения
                </h1>
            </div>
            <InputObject wrapper={style.wrapperInput} text='Название вашего объекта*' />
        </div>
    )
} 

export default TitleInputName