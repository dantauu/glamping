import style from './button-search.module.scss'

const ButtonSearch = ({ text, className, modifyClass, iconFilter, iconArrow, onClick }: 
  { 
    iconFilter?: string,
    iconArrow?: string,
    text: string,
    className: string,
    modifyClass?: string,
    modifyImg?: string,
    mainImg?: string,
    onClick?: () => void
}) => {
    return (
        <div onClick={onClick} className={className}>
            <div className={iconFilter}>
                <svg 
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3L19 3M1 3L10 3M1 15L10 15M1 9H6M10 9H19M14 15H19M14 1V5M6 7V11M14 13V17" strokeWidth="2" strokeLinecap="round"/>
                </svg>

            </div>
            <div className="">
                <p className={`${style.text} ${modifyClass}`}>
                    {text}
                </p>
            </div>
            <div className={iconArrow}>
                <svg
					width='14'
					height='9'
					viewBox='0 0 14 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					    <path
							d='M13 1.9375L7.70711 7.23039C7.31658 7.62092 6.68342 7.62092 6.29289 7.23039L1 1.9375'
							strokeWidth='2'
							strokeLinecap='round'/>
				</svg>
            </div>
        </div>
    )
}

export default ButtonSearch