'use client'

import { useState } from 'react';
import style from './conclude.module.scss';
import Link from 'next/link';

const Conclude = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Организационно-правовая форма');
  const options = ['Юридическое лицо', 'Индивидуальный предприниматель', 'Самозанятый'];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={style.concludeWrapper}>
      <div className={style.titleWrapper}>
        <Link href={'/extra-net-auth/menager-extra'} className={style.icon}>
          <img src={'/assets/img/arrow-black.svg'} alt="" />
        </Link>
        <div className={style.title}>
          <h1 className={style.titleInner}>Заключить договор</h1>
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
      <Link href={'/extra-net-auth/conclude-full'} className={style.button}>
        <button className={style.buttonInner}>
            Продолжить
        </button>
      </Link>
    </div>
  );
};

export default Conclude;