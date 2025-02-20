'use client'

import { useState } from 'react'
import style from './title-full-information.module.scss'

const TitleFullInformation = () => {
    const [selectedHouse, setSelectedHouse] = useState<boolean>(false)
    const [selectedNumber, setSelectedNumber] = useState<boolean>(false)
    return (
        <div className={style.titleFullInformationWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Общая информация
                </h1>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Где остановятся гости:
                </p>
            </div>
            <div className={style.inputText}>
                <div className={style.input}>
                    <input className={style.inputInner} type="text" 
                        placeholder='Название объекта проживания' />
                </div>
                <div className={style.inputDescription}>
                    <p className={style.inputDescriptionInner}>
                        Совет! Если у ваших объектов нет название, можно просто присвоить номер: Глэмп 1, Глэмп 2 и т.д.
                    </p>
                </div>
            </div>
            <div className={style.imgWrapper}>
                <div className={style.wrapperItem}>
                    <div onClick={() => setSelectedHouse(prev => !prev)} 
                        className={`${style.itemImg} ${selectedHouse && style.selected}`}>
                        <img className={style.itemImgInner} 
                            src={'/assets/img/house-full.png'} alt="" />
                        {selectedHouse && (
                            <div className={style.checkMarkWrapper}>
                                <div className={style.checkMark}>
                                    <img className={style.checkMarkInner}
                                    src={'/assets/img/check-mark.svg'} alt="" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={style.text}>
                        <p className={style.textInner}>
                            Дом целиком
                        </p>
                    </div>
                </div>
                <div className={style.wrapperItem}>
                    <div onClick={() => setSelectedNumber(prev => !prev)} 
                        className={`${style.itemImg} ${selectedNumber && style.selected}`}>
                        <img className={style.itemImgInner} 
                        src={'/assets/img/house-number.png'} alt="" />
                        {selectedNumber && (
                            <div className={style.checkMarkWrapper}>
                                <div className={style.checkMark}>
                                    <img className={style.checkMarkInner}
                                    src={'/assets/img/check-mark.svg'} alt="" />
                                </div>
                            </div>
                        )}
                    </div>
                     <div className={style.text}>
                        <p className={style.textInner}>
                            Номер
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleFullInformation