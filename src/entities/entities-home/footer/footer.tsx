import Link from 'next/link'
import style from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.footerUpPart}>
                <div className={style.footerLogo}>
                    <h1 className={style.footerLogoInner}>
                        GLAMPING RUSSIA
                    </h1>
                </div>
                <div className={style.footerSupport}>
                    <Link href={''} className={style.textHover}>
                        Служба поддержки
                    </Link>
                </div>
                <div className={style.footerBlogWrapper}>
                    <div className="">
                        <Link href={''} className={style.textHover}>
                            Блог о путешествии
                        </Link>
                    </div>
                    <div className="">
                        <Link href={''} className={style.textHover}>
                            Личный кабинет
                        </Link>
                    </div>
                </div>
                <div className={style.footerConnectWrapper}>
                    <div className="">
                        <Link href={''} className={style.textHover}>
                            Подключить объект
                        </Link>
                    </div>
                    <div className="">
                        <Link href={''} className={style.textHover}>
                            Личный кабинет партнёров
                        </Link>
                </div>
            </div>
            </div>
            <div className={style.footerDownPart}>
                <div className={style.leftPartWrapper}>
                    <div className="">
                        <p className={style.glampingText}>
                            © 2024 GLAMPING-RUSSIA.RU
                        </p>
                    </div>
                    <div className={style.footerDisclamer}>
                        <p className={style.instructionText}>
                            Сайт носит информационно-справочный характер и не является публичной офертой определяемой положениями ст.437 ГК РФ.
                        </p>
                    </div>
                </div>
                <div className={style.rightPartWrapper}>
                    <div className="">
                        <Link href={''} className={style.textHover}>
                            Политика конфиденциальности
                        </Link>
                    </div>
                    <div className="">
                        <Link href={''} className={style.textHover}>
                            Публичная оферта
                        </Link>
                    </div>
                    <div className="">
                        <Link href={''} className={style.textHover}>
                            Политика обработки ПД
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer