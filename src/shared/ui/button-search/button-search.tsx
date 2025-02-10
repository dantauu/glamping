import style from './button-search.module.scss'

const ButtonSearch = ({ img, text, className, modifyClass, modifyImg }: 
  { img?: string,
    text: string,
    className: string,
    modifyClass?: string,
    modifyImg?: string }) => {
    return (
        <div className={className}>
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