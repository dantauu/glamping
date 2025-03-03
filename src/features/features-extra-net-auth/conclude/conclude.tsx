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
          	<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15 7L2 7M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke-width="2" stroke-linecap="round"/>
						</svg>
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