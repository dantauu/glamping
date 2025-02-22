import style from './button-location.module.scss'

type ButtonLocationProps = {
    text: string
    wrapper?: string
    buttonText?: string
}

const ButtonLocation = ({ text, wrapper, buttonText }: ButtonLocationProps) => {
    return (
        <div className={`${style.buttonWrapper} ${wrapper}`}>
            <button className={`${style.button} ${buttonText}`}>
                {text}
            </button>
        </div>
    )
}

export default ButtonLocation