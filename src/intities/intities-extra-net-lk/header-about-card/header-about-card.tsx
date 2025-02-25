'use client'

import { useState } from 'react'
import style from './header-about-card.module.scss'
import Link from 'next/link'
import IdButton from '../id-button/id-button'

const HeaderAboutCard = () => {
    const [select, setSelect] = useState<string>('Общая информация')

    const handleSelect = (itemName: string) => {
        setSelect(itemName)
    }
    return (
        <div className="">
        <div className={style.headerAboutCardWrapper}>
            <div className={style.leftPart}>
                <Link href={'/extra-net-about-card-information/about-card'} 
                onClick={() => handleSelect('Общая информация')}  
                    className={`${style.buttonNavItem} 
                    ${select === 'Общая информация' && style.select}`}>
                    <div className={style.icon}>
                        <svg width="25" height="25" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.33329 1.66687H9.41721C9.56508 1.66687 9.69528 1.76428 9.737 1.90614L12.8743 12.5728C12.9371 12.7863 12.777 13.0002 12.5545 13.0002H7.33329M4.33329 13.0002V9.0002M1.43851 13.0002H7.22808C7.44852 13.0002 7.60825 12.79 7.54925 12.5777L4.55812 1.80956C4.49483 1.58171 4.17176 1.58171 4.10847 1.80955L1.11734 12.5777C1.05834 12.79 1.21807 13.0002 1.43851 13.0002Z" stroke="#757575" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className={style.button}>
                        <button className={style.buttonInner}>
                            Общая информация
                        </button>
                    </div>
                </Link>
                <Link href={'/extra-net-about-card-information/number-home'}
                 onClick={() => handleSelect('Номера/ дома')} 
                className={`${style.buttonNavItem} 
                ${select === 'Номера/ дома' && style.select}`}>
                    <div className={style.icon}>
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 10.8141C19.7772 10.6065 19.2664 10.4996 18.75 10.5H5.25C4.73368 10.4995 4.22288 10.6063 3.75 10.8136C3.08166 11.1059 2.51294 11.5865 2.11336 12.1968C1.71377 12.8071 1.50064 13.5205 1.5 14.25V19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25C2.44891 20.25 2.63968 20.171 2.78033 20.0303C2.92098 19.8897 3 19.6989 3 19.5V19.125C3.00122 19.0259 3.04112 18.9312 3.11118 18.8612C3.18124 18.7911 3.27592 18.7512 3.375 18.75H20.625C20.7241 18.7512 20.8188 18.7911 20.8888 18.8612C20.9589 18.9312 20.9988 19.0259 21 19.125V19.5C21 19.6989 21.079 19.8897 21.2197 20.0303C21.3603 20.171 21.5511 20.25 21.75 20.25C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V14.25C22.4993 13.5206 22.2861 12.8073 21.8865 12.1971C21.4869 11.5869 20.9183 11.1063 20.25 10.8141Z" fill="#757575"/>
                    <path d="M17.625 3.75H6.375C5.67881 3.75 5.01113 4.02656 4.51884 4.51884C4.02656 5.01113 3.75 5.67881 3.75 6.375V9.75C3.75002 9.77906 3.75679 9.80771 3.76979 9.8337C3.78278 9.85969 3.80163 9.8823 3.82486 9.89976C3.84809 9.91721 3.87505 9.92903 3.90363 9.93428C3.93221 9.93953 3.96162 9.93806 3.98953 9.93C4.39897 9.81025 4.82341 9.74964 5.25 9.75H5.44828C5.49456 9.75029 5.53932 9.73346 5.57393 9.70274C5.60855 9.67202 5.63058 9.62958 5.63578 9.58359C5.67669 9.21712 5.85115 8.87856 6.12586 8.63256C6.40056 8.38656 6.75625 8.25037 7.125 8.25H9.75C10.119 8.25003 10.475 8.38606 10.75 8.63209C11.025 8.87812 11.1997 9.21688 11.2406 9.58359C11.2458 9.62958 11.2679 9.67202 11.3025 9.70274C11.3371 9.73346 11.3818 9.75029 11.4281 9.75H12.5747C12.621 9.75029 12.6657 9.73346 12.7003 9.70274C12.735 9.67202 12.757 9.62958 12.7622 9.58359C12.8031 9.21736 12.9773 8.87899 13.2517 8.63303C13.5261 8.38706 13.8815 8.25072 14.25 8.25H16.875C17.244 8.25003 17.6 8.38606 17.875 8.63209C18.15 8.87812 18.3247 9.21688 18.3656 9.58359C18.3708 9.62958 18.3929 9.67202 18.4275 9.70274C18.4621 9.73346 18.5068 9.75029 18.5531 9.75H18.75C19.1766 9.74979 19.6011 9.81057 20.0105 9.93047C20.0384 9.93854 20.0679 9.94 20.0965 9.93473C20.1251 9.92945 20.1521 9.91759 20.1753 9.90009C20.1986 9.88258 20.2174 9.8599 20.2304 9.83385C20.2433 9.8078 20.2501 9.7791 20.25 9.75V6.375C20.25 5.67881 19.9734 5.01113 19.4812 4.51884C18.9889 4.02656 18.3212 3.75 17.625 3.75Z" fill="#757575"/>
                        </svg>
                    </div>
                    <div className={style.button}>
                        <button className={style.buttonInner}>
                            Номера/ дома <span className={style.span}>3</span>
                        </button>
                    </div>
                </Link>
                <Link href={'/extra-net-about-card-information/tarif'}
                 onClick={() => handleSelect('Тарифы 2')} 
                className={`${style.buttonNavItem} 
                ${select === 'Тарифы 2' && style.select}`}>
                    <div className={style.icon}>
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5H13M5 9H13M5 13H13M3 1H15C16.1046 1 17 1.89543 17 3V17.7639C17 19.2507 15.4354 20.2177 14.1056 19.5528L13.8944 19.4472C13.3314 19.1657 12.6686 19.1657 12.1056 19.4472L9.89443 20.5528C9.33137 20.8343 8.66863 20.8343 8.10557 20.5528L5.89443 19.4472C5.33137 19.1657 4.66863 19.1657 4.10557 19.4472L3.89443 19.5528C2.56462 20.2177 1 19.2507 1 17.7639V3C1 1.89543 1.89543 1 3 1Z" stroke="#757575" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className={style.button}>
                        <button className={style.buttonInner}>
                            Тарифы <span className={style.span}>2</span>
                        </button>
                    </div>
                </Link>
                <Link href={''} onClick={() => handleSelect('Доступность и цены')}  
                className={`${style.buttonNavItem} 
                ${select === 'Доступность и цены' && style.select}`}>
                    <div className={style.icon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8H19M7 3H4.2C3.0799 3 2.51984 3 2.09202 3.21799C1.71569 3.40973 1.40973 3.71569 1.21799 4.09202C1 4.51984 1 5.0799 1 6.2V15.8C1 16.9201 1 17.4802 1.21799 17.908C1.40973 18.2843 1.71569 18.5903 2.09202 18.782C2.51984 19 3.0799 19 4.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6.2C19 5.0799 19 4.51984 18.782 4.09202C18.5903 3.71569 18.2843 3.40973 17.908 3.21799C17.4802 3 16.9201 3 15.8 3H13M7 3H13M7 3V2.5C7 1.67157 6.32843 1 5.5 1C4.67157 1 4 1.67157 4 2.5V3M13 3V2.5C13 1.67157 13.6716 1 14.5 1C15.3284 1 16 1.67157 16 2.5V3" stroke="#757575" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    </div>
                    <div className={style.button}>
                        <button className={style.buttonInner}>
                            Доступность и цены
                        </button>
                    </div>
                </Link>
            </div>
            <Link href={'/extra-net-about-card-information/channel-manager'}
             onClick={() => handleSelect('Интеграция с менеджером каналов')} 
             className={`${style.rightPart} 
            ${select === 'Интеграция с менеджером каналов' && style.select}`}>
                <button className={style.rightButtonInner}>
                    Интеграция с менеджером каналов
                </button>
            </Link>
        </div>
        <IdButton />
    </div>
    )
}

export default HeaderAboutCard