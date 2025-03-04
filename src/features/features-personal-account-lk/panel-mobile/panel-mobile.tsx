'use client'

import { useState } from 'react'
import style from './panel-mobile.module.scss'

const PanelMobile = () => {
   const [active, setActive] = useState('Брони')

   const handleClick = (item: string) => {
      setActive(item)
   }

   return (
      <div className={style.panelWrapper}>
         <div
            onClick={() => handleClick('Поиск')}
            className={`${style.item} ${active === 'Поиск' ? style.active : ''}`}
         >
            <div className={style.upItem}>
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L22.2929 23.7071ZM18.1176 10.0588C18.1176 14.5096 14.5096 18.1176 10.0588 18.1176V20.1176C15.6142 20.1176 20.1176 15.6142 20.1176 10.0588H18.1176ZM10.0588 18.1176C5.60806 18.1176 2 14.5096 2 10.0588H0C0 15.6142 4.50349 20.1176 10.0588 20.1176V18.1176ZM2 10.0588C2 5.60806 5.60806 2 10.0588 2V0C4.50349 0 0 4.50349 0 10.0588H2ZM10.0588 2C14.5096 2 18.1176 5.60806 18.1176 10.0588H20.1176C20.1176 4.50349 15.6142 0 10.0588 0V2ZM15.8223 17.2365L22.2929 23.7071L23.7071 22.2929L17.2365 15.8223L15.8223 17.2365Z" fill="#757575"/>
               </svg>
            </div>
            <div className={style.text}>
               <p className={style.textInner}>
                  Поиск
               </p>
            </div>
         </div>

         <div
            onClick={() => handleClick('Брони')}
            className={`${style.item} ${active === 'Брони' ? style.active : ''}`}
         >
            <div className={style.upItem}>
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M4.33329 1.66687H9.41721C9.56508 1.66687 9.69528 1.76428 9.737 1.90614L12.8743 12.5728C12.9371 12.7863 12.777 13.0002 12.5545 13.0002H7.33329M4.33329 13.0002V9.0002M1.43851 13.0002H7.22808C7.44852 13.0002 7.60825 12.79 7.54925 12.5777L4.55812 1.80956C4.49483 1.58171 4.17176 1.58171 4.10847 1.80955L1.11734 12.5777C1.05834 12.79 1.21807 13.0002 1.43851 13.0002Z" strokeWidth="1.20" strokeLinecap="round"/>
               </svg>
            </div>
            <div className={style.text}>
               <p className={style.textInner}>
                  Брони
               </p>
            </div>
         </div>

         <div
            onClick={() => handleClick('Избранное')}
            className={`${style.item} ${active === 'Избранное' ? style.active : ''}`}
         >
            <div className={style.upItem}>
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9938 5.91615C10.1944 3.81913 7.19377 3.25504 4.93923 5.17528C2.68468 7.09552 2.36727 10.3061 4.13778 12.5771C5.60984 14.4654 10.0648 18.4478 11.5249 19.7368C11.6882 19.881 11.7699 19.9531 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9531 12.2994 19.881 12.4628 19.7368C13.9229 18.4478 18.3778 14.4654 19.8499 12.5771C21.6204 10.3061 21.3417 7.07532 19.0484 5.17528C16.7551 3.27524 13.7933 3.81913 11.9938 5.91615Z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <div className={style.text}>
               <p className={style.textInner}>
                  Избранное
               </p>
            </div>
         </div>

         <div
            onClick={() => handleClick('Уведомления')}
            className={`${style.item} ${active === 'Уведомления' ? style.active : ''}`}
         >
            <div className={style.upItem}>
               <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M14.6457 20C13.9406 20.6223 13.0144 20.9999 12 20.9999C10.9856 20.9999 10.0594 20.6223 9.35426 20M17.9974 13.1808V10C17.9974 6.67772 15.3223 4 12 4C8.67772 4 5.96637 6.56356 5.96637 10V13.1593C5.96637 13.6424 5.89106 14.1224 5.74334 14.5808L5.00488 16.8723C4.98466 16.9351 5.02981 16.9999 5.09375 16.9999H18.8632C18.9308 16.9999 18.9788 16.934 18.958 16.8697L18.2146 14.5626C18.0707 14.1161 17.9974 13.6499 17.9974 13.1808Z" strokeWidth="2.5" strokeLinecap="round"/>
               </svg>
            </div>
            <div className={style.text}>
               <p className={style.textInner}>
                  Уведомления
               </p>
            </div>
         </div>
      </div>
   )
}

export default PanelMobile
