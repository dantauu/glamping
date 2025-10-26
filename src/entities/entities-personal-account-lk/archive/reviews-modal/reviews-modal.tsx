import ReviewsButtonText from './reviews-button-text/reviews-button-text'
import ReviewsComment from './reviews-comment/reviews-comment'
import ReviewsModalPhoto from './reviews-modal-photo/reviews-modal-photo'
import ReviewsModalStar from './reviews-modal-star/reviews-modal-star'
import ReviewsModalTitle from './reviews-modal-title/reviews-modal-title'
import { motion } from 'framer-motion'
import style from './reviews-modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useRef } from 'react'

const ReviewsModal = ({ showModal, setShowModal }: any) => {
    const modalRef = useRef<HTMLDivElement>(null)
        useClickOutside(modalRef, () => {
            if (showModal) {
                setShowModal(false)
            }
        })
    return (
        <>
        <motion.div 
            initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.4}}
            className={style.backWrapper}>
            <div onClick={() => setShowModal(false)} className={style.krestContainer}>
                <div className={style.krest}>
                    <img src={'/assets/img/krest.svg'} alt="" />
                </div>
            </div>
        <div ref={modalRef} className={style.reviewsModalWrapper}>
            <div className={style.reviewsModal}>
                <div className={style.title}>
                    <ReviewsModalTitle setShowModal={setShowModal} />
                </div>
                <div className={style.star}>
                    <ReviewsModalStar />
                </div>
                <div className={style.comment}>
                    <ReviewsComment />
                </div>
                <div className={style.photo}>
                    <ReviewsModalPhoto />
                </div>
                <div className={style.buttonText}>
                    <ReviewsButtonText />
                </div>
            </div>
          </div>
        </motion.div>
        </>
    )
}

export default ReviewsModal