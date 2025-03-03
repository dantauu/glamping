import CheckBoxCicle from '@/shared/ui/chekcboxes/checkbox-circle/checkbox-circle'
import style from './menager-extra.module.scss'
import Link from 'next/link'

const MenagerExtra = () => {
    return (
        <div className={style.menagerExtraWrapper}>
            <div className={style.iconWrapper}>
                <Link href={'/extra-net-auth/personal-data'} className={style.icon}>
                   <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 7L2 7M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke-width="2" stroke-linecap="round"/>
					</svg>
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