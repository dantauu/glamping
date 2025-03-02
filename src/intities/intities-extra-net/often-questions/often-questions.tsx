
import DropExtraNet from '@/shared/ui/drop-extra-net/drop-extra-net'
import style from './often-questions.module.scss'

const OftenQuestions = () => {
	return (
		<div className={style.questionWrapper}>
			<div className={style.questionLeft}>
				<div className={style.title}>
					<h1 className={style.titleInner}>Часто задаваемые вопросы</h1>
				</div>
				<div className={style.questionImg}>
					<img src={'/assets/img/question.svg'} alt='' />
				</div>
			</div>
			<div className=''>
				<div className={style.column}>
				  <DropExtraNet title={'Когда мой объект размещения появится на сайте?'}/>
				  <DropExtraNet title={'Какой размер комиссии?'} />
				  <DropExtraNet title={'Как происходят выплаты?'} />
				</div>
				<div className={style.shadow}></div>
				<div className={style.questionButton}>
					<button className={style.button}>Раскрыть список</button>
				</div>
			</div>
		</div>
	)
}

export default OftenQuestions
