import CheckBoxCicle from '@/shared/ui/chekcboxes/checkbox-circle/checkbox-circle'
import style from './menager-extra.module.scss'
import Link from 'next/link'

const MenagerExtra = () => {
    return (
        <div className={style.menagerExtraWrapper}>
            <div className={style.iconWrapper}>
                <Link href={'/extra-net-auth/personal-data'} className={style.icon}>
                    <img src={'/assets/img/arrow-black.svg'} alt="" />
                </Link>
                <div className={style.iconTitle}>
                    <h1 className={style.iconTitleInner}>
                        Регистрация
                    </h1>
                </div>
            </div>
            <div className={style.column}>
                <div className={style.columnTitle}>
                    <h2 className={style.columnTitleInner}>
                        У вас есть Менеджер каналов?
                    </h2>
                </div>
                <div className={style.description}>
                    <div className={style.descriptionText}>
                        <p className={style.descriptionInner}>
                            Какой менеджер каналов вы используете?
                        </p>
                    </div>
                    <div className={style.descriptionIcon}>
                        <img className={style.descriptionIconInner}
                         src={'/assets/img/alert-orange.svg'} alt="" />
                    </div>
                </div>
                <div className={style.checkItemsWrapper}>
                    <div className={style.checkItem}>
                        <CheckBoxCicle />
                        <div className={style.checkText}>
                            <p className={style.checkTextInner}>
                                Bnovo
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <CheckBoxCicle />
                        <div className={style.checkText}>
                            <p className={style.checkTextInner}>
                                Travelline
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <CheckBoxCicle />
                        <div className={style.checkText}>
                            <p className={style.checkTextInner}>
                                Lite PMS
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <CheckBoxCicle />
                        <div className={style.checkText}>
                            <p className={style.checkTextInner}>
                                Контур.Отель
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <CheckBoxCicle />
                        <div className={style.checkText}>
                            <p className={style.checkTextInner}>
                                Нет менеджера каналов
                            </p>
                        </div>
                    </div>
                    <div className={style.checkItem}>
                        <CheckBoxCicle />
                        <div className={style.checkText}>
                            <p className={style.checkTextInner}>
                                Другой
                            </p>
                        </div>
                    </div>
                </div>
                <Link href={'/extra-net-auth/conclude'} className={style.button}>
                    <button className={style.buttonInner}>
                        Далее
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MenagerExtra