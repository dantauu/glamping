import ProgressBar from '@/shared/ui/progress-bar/progress-bar'
import { myObjectItems } from '../../../../public/data/data'
import style from './my-object.module.scss'

const MyObject = () => {
    return (
        <div className={style.myObjectWrapper}>
            <div className={style.titleWrapper}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Мои Объекты (4)
                    </h1>
                </div>
                <div className={style.buttonWrapper}>
                    <div className={style.iconButton}>
                        <img src={'/assets/img/plus-black.svg'} alt="" />
                    </div>
                    <div className={style.button}>
                        <button className={style.buttonInner}>
                            Мои объекты
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.cardWrapper}>
                {myObjectItems.map((item, index) => (
                    <div key={index} className={style.itemCard}>
                        <div className={style.img}>
                            <img src={item.img} />
                        </div>
                    <div className={style.wrapper}>
                        <div className={style.information}>
                            <div className={style.titleInformation}>
                                <h2 className={style.titleInformationInner}>
                                    {item.title}
                                </h2>
                            </div>
                            <div className={style.description}>
                                <p className={style.descriptionInner}>
                                    {item.description}
                                </p>
                            </div>
                            <div className={style.idWrapper}>
                                <div className={style.id}>
                                    <p className={style.idInner}>
                                        ID:
                                    </p>
                                </div>
                                <div className={style.idNumber}>
                                    <p className={style.idNumberInner}>
                                        {item.idNumber}
                                    </p>
                                </div>
                                <div className={style.idImg}>
                                    <img src={item.copyIcon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={style.stasusWrapper}>
                            <div className={`${item.id === 2 && style.status}`}>
                                {item.id === 2 && (
                                    <div className={style.statusImg}>
                                        <img src={item.checkIcon} alt="" />
                                    </div>
                                )}
                                <div className={`
                                    ${item.id === 2 && style.statusText}
                                    ${item.id === 1 && style.redBlock}`}>
                                    <p className={`
                                        ${item.id === 2 && style.statusTextInner} 
                                        ${item.id === 1 && style.red}`}>
                                        {item.stasus}
                                    </p>
                                </div>
                            </div>
                            {item.id === 1 && (
                                <ProgressBar progress={40} />
                            )}
                            {item.id === 2 && (
                                <div className={style.pageObject}>
                                    <p className={style.pageObjectInner}>
                                        {item.pageObject}
                                    </p>
                                </div>
                            )}
                            <div className={style.buttonDotWrapper}>
                                {item.id === 1 && (
                                    <div className={style.button}>
                                        <button className={style.buttonInnerDot}>
                                            {item.buttonText}
                                        </button>
                                    </div>
                                )}
                                <div className={style.dots}>
                                    <img src={item.dotsIcon} alt="" />
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyObject