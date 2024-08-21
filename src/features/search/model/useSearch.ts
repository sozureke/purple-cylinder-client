import { ProductService } from '@/entities/product'
import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { useDebounce } from './useDebounce'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 600)
	const { isSuccess, data } = useQuery(
		['search product', debouncedSearch],
		() => {
			ProductService.getProductBySearchTerm(debouncedSearch)
		},
		{
			enabled: !!debouncedSearch
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, handleSearch, data, searchTerm }
}
