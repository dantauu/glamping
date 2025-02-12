import style from './button-card-object.module.scss'

const ButtonCardObject = ({ text, buttonItem }: 
    { text: string, buttonItem?: string }) => {
	return (
		<div className={style.buttonWrapper}>
			<button className={`${style.buttonItem} ${buttonItem}`}>
				{text}
			</button>
		</div>
	)
}

export default ButtonCardObject