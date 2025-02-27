"use client"
import CardLike from "@/shared/ui/card-like/card-like"
import style from './card-like-sesction.module.scss'
import { useMediaQuery } from "@/hooks/useMediaQuery"
import Link from "next/link"


const CardLikeSection = () => {
    const isMobile = useMediaQuery('(max-width: 470px)')
    return (
        <div className={style.cardLikeSectionWrapper}>
            <div className={style.wrapperTitle}>
                <div className="">
                    <h2 className={style.title}>Вам могут понравится</h2>
                </div>
                {isMobile && 
                    (
                        <Link href={'#!'} className={style.show}>
                            <p className={style.showInner}>
                                Все
                            </p>
                        </Link>
                    )
                }
            </div>
                <CardLike />
        </div>
    )
}

export default CardLikeSection