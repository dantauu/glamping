"use client"
import CardLike from "@/shared/ui/card-like/card-like"
import style from './card-like-sesction.module.scss'


const CardLikeSection = () => {
    return (
        <div className={style.cardLikeSectionWrapper}>
            <div className="">
                <h1 className={style.title}>Вам могут понравится</h1>
            </div>
                <CardLike />
        </div>
    )
}

export default CardLikeSection