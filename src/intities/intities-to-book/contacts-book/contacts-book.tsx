import style from "./contacts-book.module.scss"


const ContactsBook = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.contactsWrapper}>
                <div className={style.title}>
                <h2 className={style.titleInner}>
                    Контакты
                </h2>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Куда отправить информацию о бронировании
                </p>
            </div>
            <div className={style.inputsWrapper}>
                 <div className={style.inputItem}>
                    <div className={style.surname}>
                        <p className={style.surnameInner}>
                           Телефон
                        </p>
                    </div>
                    <div className={style.input}>
                        <input className={style.inputInner} type="text" />
                    </div>
                </div>
                 <div className={style.inputItem}>
                    <div className={style.surname}>
                        <p className={style.surnameInner}>
                           E-mail
                        </p>
                    </div>
                    <div className={style.input}>
                        <input className={style.inputInner} type="text" />
                    </div>
                </div>
            </div>
            </div>
      </div>
   )
}

export default ContactsBook