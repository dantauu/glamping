'use client'

import { useState } from 'react';
import style from './person-data-profile.module.scss'

const PersonalDataProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState('Организационно-правовая форма');
      const options = ['Юридическое лицо', 'Индивидуальный предприниматель', 'Самозанятый'];
    
      const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
      };
    return (
        <div className={style.personalDataWrapper}>
            <div className={style.title}>
                <h2 className={style.titleInner}>
                    Личные данные
                </h2>
            </div>
            <div className={style.inputNameWrapper}>
                <div className={style.surnameWrapper}>
                    <div className={style.surname}>
                        <p className={style.surnameInner}>
                           Фамилия
                        </p>
                    </div>
                    <div className={style.input}>
                        <input className={style.inputInner} type="text" />
                    </div>
                </div>
                <div className={style.surnameWrapper}>
                    <div className={style.surname}>
                        <p className={style.surnameInner}>
                           Имя
                        </p>
                    </div>
                    <div className={style.input}>
                        <input className={style.inputInner} type="text" />
                    </div>
                </div>
            </div>
            <div className={style.dropdownWrapper}>
        <div 
          className={`${style.dropItem} ${isOpen ? style.active : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={style.text}>
            <p className={`
             ${style.textInner} 
             ${selectedOption === 'Организационно-правовая форма' && style.textInnerStart}`}>
                {selectedOption}
            </p>
          </div>
          <div className={style.iconItem}>
            <img 
              src={'/assets/img/iconArrow.svg'} 
              className={`${style.arrow} ${isOpen ? style.rotated : ''}`}
            />
          </div>
        </div>
        {isOpen && (
          <div className={style.dropdownList}>
            {options.map((option) => (
              <div
                key={option}
                className={`
                    ${style.dropdownItem} 
                    ${option === 'Юридическое лицо' && style.radiusOne}
                    ${option === 'Самозанятый' && style.radiusTwo}`}
                onClick={() => handleSelect(option)}
              >
                <p className={style.item}>{option}</p>
              </div>
            ))}
          </div>
        )}
      </div>
        </div>
    )
}

export default PersonalDataProfile