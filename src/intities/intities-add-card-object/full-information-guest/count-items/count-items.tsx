'use client'

import CountItem from '@/shared/ui/add-card-object-ui/count-item/count-item'
import style from './count-item.module.scss'
import { useState } from 'react';

const CountItems = () => {
    const [value, setValue] = useState('');
    return (
        <div className={style.countItemsWrapper}>
            <div className={style.title}>
                <p className={style.titleInner}>
                    Количество таких номеров/ домов:
                </p>
            </div>
            <div className={style.count}>
                <CountItem />
            </div>
            <div className={style.titleSquareWrapper}>
                <div className={style.titleSquare}>
                    <p className={style.titleSquareInner}>
                        Площадь дома/ номера:
                    </p>
                </div>
                <div className={style.inputSquareWrapper}>
                    <div className="">
                        <input className={style.inputSquareInner} type="text" />
                    </div>
                    <div className={style.inputSquareText}>
                        <p className={style.inputSquareTextInner}>
                            м<sup className={style.square}>2</sup>
                        </p>
                    </div>
                </div>
                <div className={style.button}>
                    <div className={style.buttonIcon}>
                        <img src={'/assets/img/plus-black.svg'} alt="" />
                    </div>
                    <div className="">
                        <button className={style.buttonInner}>
                            Добавить площадь террасы/ балкона
                        </button>
                    </div>
                </div>
                <div className={style.countLiveWrapper}>
                    <div className={style.countLiveTitle}>
                        <p className={style.countLiveTitleInner}>
                            Количество проживающих в номере:
                        </p>
                    </div>
                    <div className={style.countLiveItem}>
                        <CountItem />
                    </div>
                    <div className={style.countLiveDescription}>
                        <p className={style.countLiveDescriptionInner}>
                            Вы также можете добавить уточняющую информацию по количеству проживающих. Например: Один ребёнок до 14 лет — можно без отдельного спального места
                        </p>
                    </div>
                    <div className={style.buttonAdd}>
                        <div className={style.buttonIcon}>
                            <img src={'/assets/img/plus-black.svg'} alt="" />
                        </div>
                        <div className="">
                            <button className={style.buttonInner}>
                                Добавить комментарий
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.blockDescription}>
                    <div className={style.titleBlockDescription}>
                        <p className={style.titleBlockDescriptionInner}>
                            Описание:
                        </p>
                    </div>
                    <div className={style.inputWrapper}>
                        <input 
                            className={style.inputDescriptionInner}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type="text" />
                    {!value && (
                        <div className={style.customPlaceholderWrapper}>
                            <p className={style.customPlaceholder}>
                            {`Опишите ваш номер/ дом для проживания`.split('\n').map((line, index) => (
                                <span key={index}>{line}</span>
                            ))}
                            </p>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountItems