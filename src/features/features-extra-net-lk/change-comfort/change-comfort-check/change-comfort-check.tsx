import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './change-comfort-check.module.scss'
import Eat from '@/intities/intities-add-card-object/about-object-check/eat/eat'
import FunSport from '@/intities/intities-add-card-object/about-object-check/fun-sport/fun-sport'
import BuyPoint from '@/intities/intities-add-card-object/about-object-check/buy-point/buy-point'
import Cyrcle from '@/intities/intities-add-card-object/about-object-check/cyrcle/cyrcle'
import Kids from '@/intities/intities-add-card-object/about-object-check/kids/kids'
import More from '@/intities/intities-add-card-object/about-object-check/more/more'

const ChangeComfortCheck = () => {
    return (
        <>
        <div className={style.territoryWrapper}>
            <div className={style.title}>
                <p className={style.titleInner}>
                    Отметье какие удобства есть на территории объекта
                </p>
            </div>
            <div className={style.wrapperCheckTitle}>
                <div className={style.titleCheck}>
                    <h2 className={style.titleCheckInner}>
                        На территории
                    </h2>
                </div>
                <div className={style.wrapperCheck}>
                    <div className={style.checkItem}>
                        <div className={style.check}>
                            <CheckBoxSquare />
                        </div>
                        <div className={style.text}>
                            <p className={style.textInner}>
                                Гамаки и качели
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <div className={style.check}>
                            <CheckBoxSquare />
                        </div>
                        <div className={style.text}>
                            <p className={style.textInner}>
                                Детская площадка
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <div className={style.check}>
                            <CheckBoxSquare />
                        </div>
                        <div className={style.text}>
                            <p className={style.textInner}>
                                Костровая зона
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <div className={style.check}>
                            <CheckBoxSquare />
                        </div>
                        <div className={style.text}>
                            <p className={style.textInner}>
                                Обеденная зона на улице
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <div className={style.check}>
                            <CheckBoxSquare />
                        </div>
                        <div className={style.text}>
                            <p className={style.textInner}>
                                Пляжная зона
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <div className={style.check}>
                            <CheckBoxSquare />
                        </div>
                        <div className={style.text}>
                            <p className={style.textInner}>
                                Шезлонги
                            </p>
                        </div>
                    </div>
                    <div className={style.buttonsWrapper}>
                        <div className={style.leftButtonWrapper}>
                            <div className={style.icon}>
                                <img src={'/assets/img/plus-black.svg'} alt="" />
                            </div>
                            <div className={style.buttonLeft}>
                                <button className={style.buttonLeftInner}>
                                    Добавить пункт
                                </button>
                            </div>
                        </div>
                        <div className={style.rightButton}>
                            <button className={style.rightButtonInner}>
                                Добавить комментарий
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Eat />
        <FunSport />
        <BuyPoint />
        <Cyrcle />
        <Kids />
        <More />
        </>
    )
}

export default ChangeComfortCheck