import { CategoryService } from '@/entities/category'
import { useQuery } from 'react-query'
import { toast } from 'sonner'
import { toastError } from '../utils'

export const useProductByCategory = (category: string) => {
	const {
		isLoading,
		data: productsList,
		error,
		isError
	} = useQuery(
		['products by category', category],
		() => CategoryService.getProductsByCategoryName(category),
		{
			enabled: !!category,
			retry: (failureCount: number, error: any) => {
				if (error.response?.status === 404) {
					return false
				}
				return failureCount < 1
			},
			onError: (error: any) => {
				error.response?.status === 404
					? toast.error('Products not found for this category.')
					: toastError(error)
			},
			staleTime: 1000 * 60 * 5,
			cacheTime: 1000 * 60 * 30
		}
	)

	return { isLoading, productsList, error, isError }
}
