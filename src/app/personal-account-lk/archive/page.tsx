'use client'

import ArchiveContacts from "@/intities/intities-personal-account-lk/archive/archive-contacts/archive-contacts"
import ArchiveTitleCard from "@/intities/intities-personal-account-lk/archive/archive-title-card/archive-title-card"
import ArchiveInformation from "@/intities/intities-personal-account-lk/archive/archive-information/archive-information"
import ArchiveCheck from "@/intities/intities-personal-account-lk/archive/archive-check/archive-check"
import ReviewsModal from "@/intities/intities-personal-account-lk/archive/reviews-modal/reviews-modal"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import style from './page.module.scss'

const ArchivePage = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    return (
        <>
        <div className={style.wrapper}>
            <div className={style.leftContainer}>
                <ArchiveTitleCard />
                <ArchiveInformation />
                <ArchiveContacts setShowModal={setShowModal} />
            </div>
            <div className={style.rightContainer}>
                <ArchiveCheck />
            </div>
        </div>
        <AnimatePresence>
            {showModal && (
                <ReviewsModal showModal={showModal} setShowModal={setShowModal} />
            )}
        </AnimatePresence>
        </>
    )
}

export default ArchivePage