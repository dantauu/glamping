'use client'

import { useRenderBooking } from "@/providers/render-booking-context/render-booking-context"
import NotBooking from "../not-booking/not-booking"
import NotArchive from "../not-archive/not-archive"
import { JSX } from "react"
import BookingCard from "../booking-card/booking-card"

type renderContentProps = { 
    [key: string]: JSX.Element
}

const RenderBooking = () => {
    const { render } = useRenderBooking()
    const renderContent: renderContentProps = {
        'Предстоящие': <BookingCard />,
        'Архив': <NotArchive />
    }
    return (
        <div className="">
            {renderContent[render] || null}
        </div>
    )
}

export default RenderBooking