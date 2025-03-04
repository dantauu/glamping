'use client'

import { useState } from 'react'
import style from './panel-extra-mobile.module.scss'
import Link from 'next/link'

const PanelExtraMobile = () => {
   const [active, setActive] = useState('Общая информация')

   const handleClick = (item: string) => {
      setActive(item)
   }

   return (
      <div className={style.panelWrapper}>
         <Link href={'/extra-net-about-card-information/about-card'}
            onClick={() => handleClick('Общая информация')}
            className={`${style.item} ${active === 'Общая информация' ? style.active : ''}`}
         >
            <div className={style.upItem}>
                 <svg width="32" height="32" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_5881_4222)">
<path d="M17 4C17 5.65685 15.6569 7.00011 14 7.00011C12.3431 7.00011 11 5.65685 11 4C11 2.34315 12.3431 1 14 1C15.6569 1 17 2.34315 17 4Z" fill="#757575"/>
<path d="M10.2157 13.3925C10.755 13.2734 11.0956 12.7396 10.9765 12.2003C10.8574 11.6611 10.3236 11.3204 9.78433 11.4395L10.2157 13.3925ZM18.2157 11.4395C17.6764 11.3204 17.1426 11.6611 17.0235 12.2003C16.9044 12.7396 17.245 13.2734 17.7843 13.3925L18.2157 11.4395ZM22 16.0002C22 16.2271 21.9007 16.5186 21.5683 16.8678C21.2311 17.2222 20.6958 17.5869 19.9578 17.9148C18.4844 18.5697 16.3789 19.0002 14 19.0002V21.0002C16.5917 21.0002 18.9861 20.5353 20.7701 19.7425C21.6608 19.3466 22.4435 18.8493 23.0171 18.2466C23.5956 17.6387 24 16.8779 24 16.0002H22ZM14 19.0002C11.6211 19.0002 9.51558 18.5697 8.04218 17.9148C7.30422 17.5869 6.76892 17.2222 6.43166 16.8678C6.0993 16.5186 6 16.2271 6 16.0002H4C4 16.8779 4.40438 17.6387 4.98287 18.2466C5.55645 18.8493 6.33918 19.3466 7.2299 19.7425C9.01386 20.5353 11.4083 21.0002 14 21.0002V19.0002ZM6 16.0002C6 15.6827 6.20805 15.2136 6.96356 14.6829C7.70129 14.1646 8.81544 13.7018 10.2157 13.3925L9.78433 11.4395C8.22113 11.7848 6.83528 12.3288 5.81386 13.0464C4.81023 13.7514 4 14.7472 4 16.0002H6ZM17.7843 13.3925C19.1846 13.7018 20.2987 14.1646 21.0364 14.6829C21.792 15.2136 22 15.6827 22 16.0002H24C24 14.7472 23.1898 13.7514 22.1861 13.0464C21.1647 12.3288 19.7789 11.7848 18.2157 11.4395L17.7843 13.3925ZM15 16V7.00011H13V16H15ZM16 4C16 5.10462 15.1045 6.00011 14 6.00011V8.00011C16.2092 8.00011 18 6.20909 18 4H16ZM14 6.00011C12.8955 6.00011 12 5.10462 12 4H10C10 6.20909 11.7908 8.00011 14 8.00011V6.00011ZM12 4C12 2.89543 12.8954 2 14 2V0C11.7909 0 10 1.79086 10 4H12ZM14 2C15.1046 2 16 2.89543 16 4H18C18 1.79086 16.2091 0 14 0V2Z" fill="#757575"/>
</g>
<defs>
<filter id="filter0_d_5881_4222" x="0" y="0" width="32" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5881_4222"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5881_4222" result="shape"/>
</filter>
</defs>
                  </svg>
            </div>
            <div className={style.text}>
               <p className={style.textInner}>
                  Общая информация
               </p>
            </div>
         </Link>

         <Link href={'/extra-net-about-card-information/number-home'}
            onClick={() => handleClick('Номера/ дома')}
            className={`${style.item} ${style.modify} ${active === 'Номера/ дома' ? style.active : ''}`}
         >
            <div className={style.upItem}>
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 18V25C30 25.552 29.552 26 29 26C28.448 26 28 25.552 28 25V24H4V25C4 25.552 3.552 26 3 26C2.448 26 2 25.552 2 25V18C2 16.346 3.346 15 5 15H27C28.654 15 30 16.346 30 18Z" />
            <path d="M5 13V7C5 6.448 5.448 6 6 6H26C26.552 6 27 6.448 27 7V13H24V12C24 10.897 23.103 10 22 10H19C17.897 10 17 10.897 17 12V13H15V12C15 10.897 14.103 10 13 10H10C8.897 10 8 10.897 8 12V13H5Z"/>
            </svg>
            </div>
            <div className={style.text}>
               <p className={style.textInner}>
                  Номера/ дома
               </p>
            </div>
         </Link>

         <Link href={'/extra-net-about-card-information/tarif'}
            onClick={() => handleClick('Тарифы')}
            className={`${style.item} ${active === 'Тарифы' ? style.active : ''}`}
         >
            <div className={style.upItem}>
               <svg width="22" height="25" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H13M5 9H13M5 13H13M3 1H15C16.1046 1 17 1.89543 17 3V17.7639C17 19.2507 15.4354 20.2177 14.1056 19.5528L13.8944 19.4472C13.3314 19.1657 12.6686 19.1657 12.1056 19.4472L9.89443 20.5528C9.33137 20.8343 8.66863 20.8343 8.10557 20.5528L5.89443 19.4472C5.33137 19.1657 4.66863 19.1657 4.10557 19.4472L3.89443 19.5528C2.56462 20.2177 1 19.2507 1 17.7639V3C1 1.89543 1.89543 1 3 1Z" strokeWidth="1.4" strokeLinecap="round"/>
               </svg>

            </div>
            <div className={style.text}>
               <p className={style.textInner}>
                  Тарифы
               </p>
            </div>
         </Link>

         <Link href={''}
            onClick={() => handleClick('Доспупность и цены')}
            className={`${style.item} ${active === 'Доспупность и цены' ? style.active : ''}`}
         >
            <div className={style.upItem}>
              <svg width="23" height="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H19M7 3H4.2C3.0799 3 2.51984 3 2.09202 3.21799C1.71569 3.40973 1.40973 3.71569 1.21799 4.09202C1 4.51984 1 5.0799 1 6.2V15.8C1 16.9201 1 17.4802 1.21799 17.908C1.40973 18.2843 1.71569 18.5903 2.09202 18.782C2.51984 19 3.0799 19 4.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6.2C19 5.0799 19 4.51984 18.782 4.09202C18.5903 3.71569 18.2843 3.40973 17.908 3.21799C17.4802 3 16.9201 3 15.8 3H13M7 3H13M7 3V2.5C7 1.67157 6.32843 1 5.5 1C4.67157 1 4 1.67157 4 2.5V3M13 3V2.5C13 1.67157 13.6716 1 14.5 1C15.3284 1 16 1.67157 16 2.5V3"  strokeWidth="1.4" strokeLinecap="round"/>
            </svg>

            </div>
            <div className={style.text}>
               <p className={style.textInner}>
                  Доспупность и цены
               </p>
            </div>
         </Link>
      </div>
   )
}

export default PanelExtraMobile
