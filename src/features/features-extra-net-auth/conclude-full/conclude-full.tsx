'use client'

import Link from 'next/link'
import style from './conclude-full.module.scss'
import { useState } from 'react';

const options = ['Юридическое лицо', 'Индивидуальный предприниматель', 'Самозанятый'];

const ConcludeFull = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Юридическое лицо');
    const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false)}
    return (
        <div className={style.concludeBackWrapper}>
            <div className={style.concludeWrapper}>
                <div className={style.titleWrapper}>
                    <Link href={'/extra-net-auth/conclude'} className={style.titleIcon}>
                        <img src={'/assets/img/arrow-black.svg'} alt="" />
                    </Link>
                    <div className={style.title}>
                        <h1 className={style.titleInner}>
                            Заключить договор 
                        </h1>
                    </div>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className={style.forma}>
                    <div className={style.formaTop}>
                        <p className={style.formaTopInner}>
                            Организационно-правовая форма
                        </p>
                    </div>
                    <div className={style.faceFormaWrapper}>
                        <div className={style.faceForma}>
                            <p className={style.faceInner}>
                                {selectedOption}
                            </p>
                        </div>
                        <div className={style.inputFormaIcon}>
                            <img className={`
                                ${style.inputFormaIconInner}
                                ${isOpen && style.rotated}`} 
                                src={'/assets/img/iconArrow.svg'} />
                        </div>
                    </div>
                    {isOpen && (
                        <div className={style.dropdownList}>
                            {options.map((option) => (
                        <div key={option} className={style.dropdownItem} 
                            onClick={() => handleSelect(option)}>
                        <p className={style.item}>{option}</p>
                    </div>
                    ))}
                    </div>
                )}
                </div>
                <div className={style.organizationWrapper}>
                    <div className={style.organizationTitle}>
                        <h2 className={style.organizationTitleInner}>
                            Реквизиты организации
                        </h2>
                    </div>
                    <div className={style.blocksWrapper}>
                        <div className={style.itemBlock}>
                            <div className={style.itemBlockTextUp}>
                                <p className={style.itemBlockTextUpInner}>
                                    ИНН
                                </p>
                            </div>
                            <div className={style.itemBlockTextDown}>
                                <input className={style.itemBlockTextDownInner}/>
                            </div>
                        </div>
                        <div className={`${style.itemBlock} ${style.modifyWidth}`}>
                            <div className={style.itemBlockTextUp}>
                                <p className={style.itemBlockTextUpInner}>
                                    Полное наименование
                                </p>
                            </div>
                            <div className={style.itemBlockTextDown}>
                                <input className={style.itemBlockTextDownInner}/>
                            </div>
                        </div>
                        <div className={style.wrapperFlex}>
                            <div className={style.itemBlock}>
                            <div className={style.itemBlockTextUp}>
                                <p className={style.itemBlockTextUpInner}>
                                    ОГРН
                                </p>
                            </div>
                            <div className={style.itemBlockTextDown}>
                               <input className={style.itemBlockTextDownInner}/>
                            </div>
                        </div>
                        <div className={style.itemBlock}>
                            <div className={style.itemBlockTextUp}>
                                <p className={style.itemBlockTextUpInner}>
                                    КПП
                                </p>
                            </div>
                            <div className={style.itemBlockTextDown}>
                                <input className={style.itemBlockTextDownInner}/>
                            </div>
                        </div>
                        </div>
                        <div className={`${style.itemBlock} ${style.modifyWidth}`}>
                            <div className={style.itemBlockTextUp}>
                                <p className={style.itemBlockTextUpInner}>
                                    Юридический адрес
                                </p>
                            </div>
                            <div className={style.itemBlockTextDown}>
                                <input className={style.itemBlockTextDownInner}/>
                            </div>
                        </div>
                        <div className={style.itemBlock}>
                            <div className={style.itemBlockTextUp}>
                                <p className={style.itemBlockTextUpInner}>
                                    Тип налогооблажения
                                </p>
                            </div>
                            <div className={style.itemBlockTextDown}>
                                <input className={style.itemBlockTextDownInner}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.bank}>
                        <div className={style.titleBank}>
                            <h1 className={style.titleBankInner}>
                                Банковские реквизиты
                            </h1>
                        </div>
                        <div className={style.bankBlocks}>
                            <div className={style.itemBlock}>
                            <div className={style.itemBlockTextUp}>
                                <p className={style.itemBlockTextUpInner}>
                                    Тип счёта
                                </p>
                            </div>
                            <div className={style.bankIcon}>
                                <div className={style.itemBlockTextDown}>
                                    <p className={style.itemBlockTextDownInner}>
                                        Расчётный счет
                                    </p>
                                </div>
                                <div className={style.icon}>
                                    <img src={'/assets/img/iconArrow.svg'} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={style.itemBlock}>
                            <div className={style.itemBlockTextUp}>
                                <p className={style.itemBlockTextUpInner}>
                                    Бик
                                </p>
                            </div>
                            <div className={style.itemBlockTextDown}>
                                <input className={style.itemBlockTextDownInner}/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className={style.contactsWrapper}>
                        <div className={style.titleContacts}>
                            <h1 className={style.titleContactsInner}>
                                Контактные данные для обмена документами
                            </h1>
                        </div>
                        <div className={style.blockContact}>
                            <div className={style.blockContactUp}>
                                <p className={style.blockContactUpInner}>
                                    E-mail
                                </p>
                            </div>
                            <div className={style.contactsText}>
                                <input className={style.itemBlockTextDownInner}/>
                            </div>
                        </div>
                    </div>
                    <Link href={'/extra-net-auth/oferta'} className={style.button}>
                        <button className={style.buttonInner}>
                            Продолжить
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ConcludeFull