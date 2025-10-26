'use client'

import { useRenderBooking } from "@/providers/render-booking-context/render-booking-context"
import { JSX } from "react"
import BookingCard from "../booking-card/booking-card"
import ArchiveCard from "../archive-card/archive-card"

type renderContentProps = { 
    [key: string]: JSX.Element
}

const RenderBooking = () => {
    const { render } = useRenderBooking()
    const renderContent: renderContentProps = {
        'Предстоящие': <BookingCard />,
        'Архив': <ArchiveCard />
    }
    return (
        <div className="">
            {renderContent[render] || null}
        </div>
    )
}

export default RenderBooking