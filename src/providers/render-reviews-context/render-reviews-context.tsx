'use client'

import { createContext, useState, useContext } from 'react'

interface RenderReviewsProps {
    render: string
    setRender: (value: string) => void
}

const RenderReviewsValue = {
    render: 'Мои отзывы',
    setRender: () => {},
}


const RenderReviewsContext = createContext<RenderReviewsProps>(RenderReviewsValue)

export const RenderReviewsProvider = ({ children }: { children: React.ReactNode }) => {
    const [render, setRender] = useState('Мои отзывы')

    return (
			<RenderReviewsContext.Provider value={{ render, setRender }}>
				{children}
			</RenderReviewsContext.Provider>
		)
}

export const useRenderReviews = () => {
    const context = useContext(RenderReviewsContext)
    return context
}

