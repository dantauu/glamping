'use client'

import { useEffect, useState } from "react"


export const useMediaQuery = (query: any) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)
        const listener = (e: any) => setMatches(e.matches)

        mediaQueryList.addEventListener('change', listener)

        setMatches(mediaQueryList.matches)

        return () => {
            mediaQueryList.removeEventListener('change', listener)
        }
    }, [query])
    return matches
}