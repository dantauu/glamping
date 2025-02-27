'use client'

import { useEffect, useState } from "react"


export const useMediaQuery = (query: any) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)
        const listner = (e: any) => setMatches(e.matches)

        mediaQueryList.addEventListener('change', listner)

        setMatches(mediaQueryList.matches)

        return () => {
            mediaQueryList.removeEventListener('change', listner)
        }
    }, [query])
    return matches
}