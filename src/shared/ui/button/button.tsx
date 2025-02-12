import Link from 'next/link'
import style from './button.module.scss'

type ButtonProps = {
	text: string
	classButton?: string
	wrapperClass?: string
}

const Button = ({ text, classButton, wrapperClass }: ButtonProps) => {
	return (
		<Link href={'/search'} className={`${style.buttonWrapper} ${wrapperClass}`}>
			<button className={`${style.button} ${classButton}`}>{text}</button>
		</Link>
	)
}

export default Button