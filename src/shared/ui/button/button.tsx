import Link from 'next/link'
import style from './button.module.scss'

type ButtonProps = {
    text: string
}

const Button = ({ text }: ButtonProps) => {
    return (
        <Link href={'/search'} className={style.buttonWrapper}>
            <button className={style.button}>{text}</button>
        </Link>
    )
}

export default Button