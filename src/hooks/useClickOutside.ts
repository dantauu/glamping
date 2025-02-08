'use client'
import React, { useCallback, useEffect } from "react"


export function useClickOutside(
	ref: React.RefObject<HTMLDivElement | null>,
	callback: () => void
) {
	const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }, [ref, callback])

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [handleClickOutside])
}