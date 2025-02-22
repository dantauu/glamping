import style from './button-search.module.scss'

const ButtonSearch = ({ img, text, className, modifyClass, modifyImg, mainImg, onClick }: 
  { img?: string,
    text: string,
    className: string,
    modifyClass?: string,
    modifyImg?: string,
    mainImg?: string,
    onClick?: () => void
}) => {
    return (
        <div onClick={onClick} className={className}>
            <div className={style.img}>
                <img className={modifyImg} src={img} alt="" />
            </div>
            <div className="">
                <p className={`${style.text} ${modifyClass}`}>
                    {text}
                </p>
            </div>
            <div className={style.mainIcon}>
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