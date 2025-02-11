// src/context/modal-search-context.tsx
'use client'

import { createContext, useState, useContext } from 'react'

interface ModalSearchContextProps {
	showSearchModal: boolean
	setShowSearchModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalValue: ModalSearchContextProps = {
	showSearchModal: false,
	setShowSearchModal: () => {},
}


const ModalSearchContext = createContext<ModalSearchContextProps>(ModalValue)

export const ModalSearchProvider = ({children,}: {children: React.ReactNode}) => {
	const [showSearchModal, setShowSearchModal] = useState(false)

	return (
		<ModalSearchContext.Provider
			value={{ showSearchModal, setShowSearchModal }}>
			{children}
		</ModalSearchContext.Provider>
	)
}

export const useModalSearch = () => {
	const context = useContext(ModalSearchContext)
	return context
}

