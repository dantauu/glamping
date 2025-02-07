import style from './button-location.module.scss'

type ButtonLocationProps = {
    text: string
}

const ButtonLocation = ({ text }: ButtonLocationProps) => {
    return (
        <div className={style.buttonWrapper}>
            <button className={style.button}>
                {text}
            </button>
        </div>
    )
}

export default ButtonLocation