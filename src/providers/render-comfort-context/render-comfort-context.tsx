'use client'

import { createContext, useState, useContext } from 'react'

interface RenderComfortProps {
	render: string
	setRender: (value: string) => void
}

const ModalValue = {
    render: 'В комплексе',
    setRender: () => {},
}


const RenderComfortContext = createContext<RenderComfortProps>(ModalValue)

export const RenderComfortProvider = ({ children }: { children: React.ReactNode }) => {
	const [render, setRender] = useState('В комплексе')

	return (
		<RenderComfortContext.Provider value={{ render, setRender }}>
			{children}
		</RenderComfortContext.Provider>
	)
}

export const useRenderComfort = () => {
    const context = useContext(RenderComfortContext)
    return context
}

