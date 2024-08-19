'use client'

export const getStoreLocalStorage = (name: string) => {
	if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(name)
		return ls ? JSON.parse(ls) : null
	}
	return null
}
