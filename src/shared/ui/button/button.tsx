import style from './button.module.scss'

type ButtonProps = {
    text: string
}

const Button = ({ text }: ButtonProps) => {
    return (
        <div className={style.buttonWrapper}>
            <button className={style.button}>{text}</button>
        </div>
    )
}

export default Button