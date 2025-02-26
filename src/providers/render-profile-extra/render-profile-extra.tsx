'use client'

import { createContext, useState, useContext } from 'react'

interface RenderProfileExtraProps {
    render: string
    setRender: (value: string) => void
}

const RenderProfileExtraValue = {
    render: 'Личные данные',
    setRender: () => {},
}


const RenderProfileExtraContext = createContext<RenderProfileExtraProps>(RenderProfileExtraValue)

export const RenderProfileExtraProvider = ({ children }: { children: React.ReactNode }) => {
    const [render, setRender] = useState('Личные данные')

    return (
        <RenderProfileExtraContext.Provider value={{ render, setRender }}>
            {children}
        </RenderProfileExtraContext.Provider>
    )
}

export const useRenderExtraProfile = () => {
    const context = useContext(RenderProfileExtraContext)
    return context
}

