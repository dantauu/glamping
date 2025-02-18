'use client'

import { createContext, useState, useContext } from 'react'

interface RenderNumberMailProps {
    render: string
    setRender: (value: string) => void
}

const RenderReviewsValue = {
    render: 'Телефон',
    setRender: () => {},
}


const RenderNumberMailContext = createContext<RenderNumberMailProps>(RenderReviewsValue)

export const RenderNumberMailProvider = ({ children }: { children: React.ReactNode }) => {
    const [render, setRender] = useState('Телефон')

    return (
			<RenderNumberMailContext.Provider value={{ render, setRender }}>
				{children}
			</RenderNumberMailContext.Provider>
		)
}

export const useRenderNumberMail = () => {
    const context = useContext(RenderNumberMailContext)
    return context
}

