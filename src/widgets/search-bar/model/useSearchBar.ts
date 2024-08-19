import { useState } from 'react'

export const useSearchBar = () => {
	const [isSearchVisible, setIsSearchVisible] = useState(false)

	const toggleSearchBar = () => {
		setIsSearchVisible(!isSearchVisible)
	}

	return {
		isSearchVisible,
		toggleSearchBar
	}
}
