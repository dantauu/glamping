'use client'

import { createContext, useState, useContext } from 'react'

interface RenderProfileProps {
    render: string
    setRender: (value: string) => void
}

const RenderProfileValue = {
    render: 'Личные данные',
    setRender: () => {},
}


const RenderProfileContext = createContext<RenderProfileProps>(RenderProfileValue)

export const RenderProfileProvider = ({ children }: { children: React.ReactNode }) => {
    const [render, setRender] = useState('Личные данные')

    return (
        <RenderProfileContext.Provider value={{ render, setRender }}>
            {children}
        </RenderProfileContext.Provider>
    )
}

export const useRenderProfile = () => {
    const context = useContext(RenderProfileContext)
    return context
}

