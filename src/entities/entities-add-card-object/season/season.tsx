import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './season.module.scss'

const Season = () => {
    return (
        <div className={style.seasonWrapper}>
            <div className={style.title}>
                <p className={style.titleInner}>
                    4. Сезонность (Когда Вы хотите принимать гостей?)
                </p>
            </div>
            <div className={style.wrapperCheck}>
                <div className={style.wrapper}>
                    <div className={style.checkBox}>
                        <CheckBoxSquare />
                    </div>
                    <div className={style.text}>
                        <p className={style.textInner}>
                            Круглогодично
                        </p>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.checkBox}>
                        <CheckBoxSquare />
                    </div>
                    <div className={style.text}>
                        <p className={style.textInner}>
                            Зимой
                        </p>
                    </div>
                </div>
                 <div className={style.wrapper}>
                    <div className={style.checkBox}>
                        <CheckBoxSquare />
                    </div>
                    <div className={style.text}>
                        <p className={style.textInner}>
                            Весной
                        </p>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.checkBox}>
                        <CheckBoxSquare />
                    </div>
                    <div className={style.text}>
                        <p className={style.textInner}>
                            Летом
                        </p>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.checkBox}>
                        <CheckBoxSquare />
                    </div>
                    <div className={style.text}>
                        <p className={style.textInner}>
                            Осенью
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Season