import DropQuestion from '@/shared/ui/drop-question/drop-question';
import style from './question.module.scss';

const Question = () => {
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
                <div className="">
				<div className={style.column}>
					<DropQuestion title={'Как забронировать тур онлайн?'} />
					<DropQuestion title={'Как проверить статус заказа?'} />
					<DropQuestion title={'Как запросить дополнительные услуги(ранний/поздный выезд, кроватку для ребёнка, заселение с животным)?'} />
					<DropQuestion title={'Как забронировать тур онлайн?'} />
				</div>
                    <div className={style.shadow}></div>
                <div className={style.questionButton}>
                    <button className={style.button}>
                        Раскрыть список
                    </button>
                </div>
                </div>
			</div>
		)
}

export default Question