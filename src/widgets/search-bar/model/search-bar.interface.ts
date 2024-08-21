import { ChangeEvent, FocusEvent } from 'react'

export interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	onFocus: (event: FocusEvent<HTMLInputElement>) => void
	onBlur: (event: FocusEvent<HTMLInputElement>) => void
}
