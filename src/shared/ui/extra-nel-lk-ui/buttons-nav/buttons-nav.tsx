import Link from 'next/link'
import style from './buttons-nav.module.scss'

const ButtonsNav = ({ link, linkSave }: { link: string, linkSave: string }) => {
   return (
         <div className={style.buttonWrapper}>
                <Link href={link} className={style.buttonBack}>
                    <button className={style.buttonBackInner}>
                        Назад
                    </button>
                </Link>
                <Link href={linkSave} className={style.buttonSave}>
                    <button className={style.buttonSaveInner}>
                        Сохранить
                    </button>
                </Link>
            </div>
   )
}

export default ButtonsNav