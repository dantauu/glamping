'use client'

import { useRenderBooking } from '@/providers/render-booking-context/render-booking-context'
import NotBooking from '../not-booking/not-booking'
import NotArchive from '../not-archive/not-archive'
import { JSX } from 'react'
import NotReviews from '../not-reviews/not-reviews'
import { useRenderReviews } from '@/providers/render-reviews-context/render-reviews-context'
import WaitReviews from '../wait-reviews/wait-reviews'

type renderContentProps = {
	[key: string]: JSX.Element
}

const RenderReviews = () => {
	const { render } = useRenderReviews()
	const renderContent: renderContentProps = {
		'Мои отзывы': <NotReviews />,
		'Ожидают отзыва': <WaitReviews />,
	}
	return <div className=''>{renderContent[render] || null}</div>
}

export default RenderReviews
