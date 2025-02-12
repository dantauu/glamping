import Link from 'next/link'
import { reviewsItems } from '../../../../public/data/data'
import style from './reviews-card.module.scss'

const ReviewsCard = () => {
    return (
        <div className={style.reviewsWrapper}>
            {reviewsItems.map((item, index) => (
                <div key={index} className={style.reviewsCardWrapper}>
                    <div className={style.reviewsLeftPart}>
                        <Link href={'/card-object'} className={style.backImg}>
                            <img className={style.backImgInner}
                                src={item.backImg} alt="" />
                        </Link>
                        <div className={`
                        ${item.id === 1 && style.guestWrapper}
                        ${item.id === 3 && style.stockWrapper}
                        `}>
                            <div className="">
                                <img src={item.special} alt="" />
                            </div>
                            <div className="">
                                <p className={`
                                    ${item.id === 1 && style.questText}
                                    ${item.id === 3 && style.stockText}`}>
                                {item.specialText}</p>
                            </div>
                        </div>
                        <div className={style.like}>
                            <img src={item.likeIcon} alt="" />
                        </div>
                    </div>
                    <div className={style.reviewsMidlePart}>
                        <div className={style.title}>
                            <h2 className={style.titleInner}>
                                {item.title}
                            </h2>
                        </div>
                        <div className={style.descriptionWrapper}>
                        <div className={style.descriptionOneWrapper}>
                            <div className={style.descriptionDot}>
                                <img className={style.dotInner}
                                    src={'/assets/img/dot.svg'}
                                />
                            </div>
                            <div className={style.descriptionOne}>
                                <p className={style.descriptionOneInner}>
                                    {item.descrptionOne}
                                </p>
                            </div>
                        </div>
                        <div className={style.descriptionSecondWrapper}>
                            <div className={style.descriptionDot}>
                                <img className={style.dotInner}
                                    src={'/assets/img/dot.svg'}
                                />
                            </div>
                            <div className={style.descriptionSecond}>
                                <p className={style.descriptionSecondInner}>
                                    {item.descrptionSecond}
                                </p>
                            </div>
                        </div>
                        <div className={style.descriptionTherdWrapper}>
                            <div className={style.descriptionDot}>
                                <img className={style.dotInner}
                                    src={'/assets/img/dot.svg'}
                                />
                            </div>
                            <div className={style.descriptionTherd}>
                                <p className={style.descriptionTherdInner}>
                                    {item.descrptionTherd}
                                </p>
                            </div>
                        </div>
                      </div>
                        <div className={style.iconWrapper}>
                            <div className={style.itemIcon}>
                                <img className={style.itemIconInner} 
                                src={item.iconMount} alt="" />
                            </div>
                            <div className={style.itemIcon}>
                                <img className={style.itemIconInner} 
                                src={item.iconWifi} alt="" />
                            </div>
                            <div className={style.itemIcon}>
                                <img className={style.itemIconInner} 
                                src={item.iconChill} alt="" />
                            </div>
                            <div className={style.itemIcon}>
                                <img className={style.itemIconInner} 
                                src={item.iconMangal} alt="" />
                            </div>
                            <div className={style.itemIcon}>
                                <img className={style.itemIconInner} 
                                src={item.iconEat} alt="" />
                            </div>
                            <div className={style.itemIcon}>
                                <img className={style.itemIconInner} 
                                src={item.iconFamily} alt="" />
                            </div>
                            <div className={style.itemIcon}>
                                <img className={style.itemIconInner} 
                                src={item.iconPet} alt="" />
                            </div>
                        </div>
                        <div className={style.cutleryWrapper}>
                            <div className={style.cutlery}>
                                <div className="">
                                    <img className={style.cutleryImg} 
                                    src={item.iconCutlery} alt="" />
                                </div>
                                <div className="">
                                    <p className={style.cutleryTextInner}>
                                        {item.cutleryText}
                                    </p>
                                </div>
                            </div>
                            <div className={style.stop}>
                                <div className="">
                                    <img className={style.stopImg} 
                                    src={item.iconStop} alt="" />
                                </div>
                                <div className="">
                                    <p className={style.stopTextInner}>
                                        {item.stopText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.reviewsEndPartWrapper}>
                        <div className={style.reviewsEndPart}>
                        <div className={style.raitingReviews}>
                            <div className={style.reviewsTextWrapper}>
                            <div className={style.raiting}>
                                <p className={style.ratingInner}>
                                    {item.raitingText}
                                </p>
                            </div>
                            <div className={style.reviews}>
                                <p className={style.reviewsInner}>
                                    {item.reviewsText}
                                </p>
                            </div>
                            </div>
                            <div className={style.flag}>
                                <div className={style.flagIcon}>
                                    <img className={style.flagIconInner} 
                                    src={item.iconFlag} alt="" />
                                </div>
                                <div className={style.flagText}>
                                    <p className={style.flagTextInner}>
                                        {item.textFlag}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.priceButtonWrapper}>
                            <div className={style.price}>
                                <p className={style.priceInner}>
                                    {item.priceNumber}
                                </p>
                            </div>
                            <div className={style.history}>
                                <p className={style.historyInner}>
                                    {item.hisoryText}
                                </p>
                            </div>
                            <div className={style.button}>
                                <button className={style.buttonInner}>
                                    {item.buttonText}
                                </button>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReviewsCard