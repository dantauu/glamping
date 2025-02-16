'use client'

import { createContext, useState, useContext } from 'react'

interface RenderBookingProps {
    render: string
    setRender: (value: string) => void
}

const RenderBookingValue = {
	render: 'Предстоящие',
	setRender: () => {},
}


const RenderBookingContext = createContext<RenderBookingProps>(RenderBookingValue)

export const RenderBookingProvider = ({ children }: { children: React.ReactNode }) => {
    const [render, setRender] = useState('Предстоящие')

    return (
        <RenderBookingContext.Provider value={{ render, setRender }}>
            {children}
        </RenderBookingContext.Provider>
    )
}

export const useRenderBooking = () => {
    const context = useContext(RenderBookingContext)
    return context
}

