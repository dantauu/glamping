import style from './button-search.module.scss'

const ButtonSearch = ({ img, text, className, modifyClass, modifyImg, onClick }: 
  { img?: string,
    text: string,
    className: string,
    modifyClass?: string,
    modifyImg?: string,
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
        </div>
    )
}

export default ButtonSearch