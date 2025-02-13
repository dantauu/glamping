import { reviewsCardObjectItems } from '../../../../public/data/data'
import style from './reviews-card-object.module.scss'

const ReviewsCardObject = () => {
    return (
        <div className={style.reviewCardObjectWrapper}>
            {reviewsCardObjectItems.map((item, index) => (
                <div key={index} className={style.reviewCardObject}>
                  <div className={style.upPart}>
                    <div className={style.leftPartCard}>
                        <div className={style.avatarItem}>
                        <div className={style.avatarImg}>
                            <img src={item.avatar} alt="" />
                        </div> 
                        <div className={style.nameDateWrapper}>
                            <div className={style.name}>
                                <p className={style.nameInner}>
                                    {item.name}
                                </p>
                            </div> 
                            <div className={style.date}>
                                <p className={style.dateInner}>
                                    {item.date}
                                </p>
                            </div>
                        </div>
                        </div>
                        <div className={style.fullWrapperIconsText}>
                            <div className={style.wrapperIconsText}>
                                <div className={style.icon}>
                                    <img className={style.iconDoubleInner} src={item.iconDouble} alt="" />
                                </div>
                                <div className={style.iconText}>
                                    <p className={style.iconTextInner}>
                                        {item.textDouble}
                                    </p>
                                </div>
                            </div>
                            <div className={style.wrapperIconsText}>
                                <div className={style.icon}>
                                    <img className={style.iconDoubleInner} src={item.ecoHomeIcon} alt="" />
                                </div>
                                <div className={style.iconText}>
                                    <p className={style.iconTextInner}>
                                        {item.ecoHouseText}
                                    </p>
                                </div>
                            </div>
                            <div className={style.wrapperIconsText}>
                                <div className={style.icon}>
                                    <img className={style.iconDoubleInner} src={item.calendarIcon} alt="" />
                                </div>
                                <div className={style.iconText}>
                                    <p className={style.iconTextInner}>
                                        {item.calendarIconText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={style.middlePart}>
                       <div className={style.raiting}>
                        <div className={style.left}>
                            <div className={style.box}>
                                <p className={style.boxText}>
                                    {item.countBox}
                                </p>
                            </div>
                                <div className={style.raitingText}>
                                    <p className={style.raitingTextInner}>
                                        {item.raitingText}
                                    </p>
                                </div>
                            </div>
                        <div className={style.rightPartCard}>
                            <div className={style.responseText}>
                                <p className={style.responseTextInner}>
                                    {item.responseGet}
                                </p>
                            </div>
                            <div className={style.like}>
                                <div className={style.likeImg}>
                                    <img src={item.likeImg} alt="" />
                                </div>
                                <div className={style.countLike}>
                                    <p className={style.countLikeInner}>
                                        {item.likeCount}
                                    </p>
                                </div>
                            </div>
                         </div>
                        </div>
                        <div className={style.title}>
                            <h2 className={style.titleInner}>
                                {item.title}
                            </h2>
                        </div>
                        <div className={style.comment}>
                            <p className={style.commentTextInner}>
                               <span className={style.spanText}>{item.commentTitle}</span> {item.comment}
                            </p>
                        </div>
                        {item.id === 1 && (
                            <div className={style.imagesWrapper}>
                            {item.imgs?.map((item, index) => (
                                <div key={index} className={style.imagesItem}>
                                    <img src={item} alt="" /> 
                                </div>
                            ))}
                        </div>
                        )}
                        {(item.id === 1 || item.id === 3) && (
                            <div className={`
                                ${style.worldWrapper}
                                ${item.id === 3 && style.modifiPad}`}>
                          <div className={style.border}></div>
                            <div className={style.fullWorldWrapper}>
                              <div className={style.worldItem}>
                                <div className={style.worldIcon}>
                                    <img src={item.iconWorld} alt="" />
                                </div>
                                <div className={style.worldTitleFullWrapper}>
                                    <div className={style.worldTitleWrapper}>
                                        <div className={style.worldTitle}>
                                            <p className={style.worldTitleInner}>
                                                {item.worldTitle}
                                            </p>
                                        </div>
                                        <div className={style.worldOfficial}>
                                            <p className={style.worldOfficialInner}>
                                                {item.worldOfficial}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.date}>
                                        <p className={style.dateInner}>
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.response}>
                                <div className={style.responseTitle}>
                                    <p className={style.responseTitleInner}>
                                        {item.response}
                                    </p>
                                </div>
                                <div className={style.responseText}>
                                    <p className={style.responseTextInnerAdmin}>
                                        {item.responseInner}
                                    </p>
                                </div>
                            </div>
                          </div>
                        </div>
                        ) }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReviewsCardObject