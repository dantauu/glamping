'use client'

import Season from '@/intities/intities-add-card-object/season/season'
import FullInformation from '@/intities/intities-add-card-object/full-information/full-information'
import ConditionVariants from '@/intities/intities-add-card-object/condition-variants/condition-variants'
import { useState } from 'react'
import Cards from '@/intities/intities-add-card-object/cards/cards'
import InputObject from '@/shared/ui/add-card-object-ui/input-object/input-object'
import style from './change-information-title.module.scss'

const ChangeInformationTitle = () => {
    const [value, setValue] = useState('');
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Общая информация
                </h1>
            </div>
            <div className={style.fullInformationTitleWrapper}>
                <InputObject text='Название вашего объекта' 
                    wrapper={style.objectName} />
                <div className={style.numberEmailWrapper}>
                    <InputObject text='Телефон для гостей*' />
                    <InputObject text='E-mail для гостей*' />
                </div>
                <InputObject text='Сайт объекта размещения' 
                    wrapper={style.objectName} />
            </div>
            <Cards />
         <div className={style.conditionSizeWrapper}>
            <div className={style.first}>
                <div className={style.firstText}>
                    <p className={style.firstTextInner}>
                        1. Условия размещения
                    </p>
                </div>
            </div>
            <div className={style.inputsWrapper}>
                <div className={style.leftPart}>
                    <div className={style.inText}>
                        <p className={style.inTextInner}>
                            Заезд с:
                        </p>
                    </div>
                    <div className={style.itemInput}>
                        <input className={style.itemInputInner} type="text" 
                        placeholder='00 : 00' />
                    </div>
                </div>
                <div className={style.rightPart}>
                    <div className={style.inText}>
                        <p className={style.inTextInner}>
                            Выезд до:
                        </p>
                    </div>
                    <div className={style.outText}>
                        <p className={style.outTextInner}>
                            12 : 00
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.more}>
                <p className={style.moreText}>
                    Дополнительные услуги
                </p>
            </div>
            <div className={style.moreInpuWrapper}>
                <div className={style.inputDescription}>
                <div className={style.inputWrapper}>
                    <input 
                        className={style.inputDescriptionInner}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text" 
                    />
                    {!value && (
                        <div className={style.customPlaceholderWrapper}>
                            <p className={style.customPlaceholder}>
                            {`Например, что проживание с детьми до 3 лет бесплатно`.split('\n').map((line, index) => (
                                <span key={index}>{line}</span>
                            ))}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </div>
            <ConditionVariants />
            <FullInformation />
            <Season />
        </div>
    )
}

export default ChangeInformationTitle