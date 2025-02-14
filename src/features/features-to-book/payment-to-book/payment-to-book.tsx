import CheckBoxCicle from '@/shared/ui/chekcboxes/checkbox-circle/checkbox-circle'
import style from './payment.module.scss'
import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'

const PaymentToBook = () => {
    return (
        <div className={style.paymentWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Выберите способ оплаты
                </h1>
            </div>
            <div className={style.paymentItemsWrapper}>
                <div className={style.paymentItem}>
                    <div className={style.checkBox}>
                        <CheckBoxCicle />
                    </div>
                    <div className={style.checkBoxText}>
                        <p className={style.checkBoxTextInner}>
                            Банковская карта
                        </p>
                    </div>
                </div>

                <div className={style.paymentItemSpace}>
                    <div className={style.paymentLeft}>
                        <div className={style.checkBox}>
                            <CheckBoxCicle />
                        </div>
                        <div className={style.checkBoxText}>
                            <p className={style.checkBoxTextInner}>
                                СБП
                            </p>
                        </div>
                    </div>
                    <div className={style.paymentIcon}>
                        <img src={'/assets/img/sbp.svg'} alt="" />
                    </div>
                </div>

                <div className={style.paymentItemSpace}>
                    <div className={style.paymentLeft}>
                        <div className={style.checkBox}>
                            <CheckBoxCicle />
                        </div>
                        <div className={style.checkBoxText}>
                            <p className={style.checkBoxTextInner}>
                                Yandex Pay
                            </p>
                        </div>
                    </div>
                    <div className={style.paymentIcon}>
                        <img src={'/assets/img/yandex.svg'} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.condition}>
                <div className={style.checkBoxCondition}>
                    <CheckBoxSquare />
                </div>
                <div className={style.conditionText}>
                    <p className={style.conditionTextInner}>
                        Я принимаю условия договора публичной оферты, Я соглашаюсь с <span className={style.border}>политикой обработки персональных данных,</span> <span className={style.border}>политикой конфиденциальности.</span>
                    </p>
                </div>
            </div>
            <div className={style.buttonCondition}>
                <button className={style.buttonConditionInner}>
                    Перейти к оплате
                </button>
            </div>
            <div className={style.conditionDescription}>
                <p className={style.conditionDescriptionInner}>
                    Платежи безопасны. Сайт передаёт данные по защищенному соединению SSL, что обеспечивает высокий уровень безопасности. Мы не храним данные ваших банковских карт, поэтому их невозможно похитить. 
                </p>
            </div>
        </div>
    )
}

export default PaymentToBook