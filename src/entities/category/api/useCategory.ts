import { useQuery } from 'react-query'
import { CategoryService } from './category.service'

export const useCategory = () => {
	const { isLoading, data: categoriesList } = useQuery(
		'get all categories',
		() => CategoryService.getAllCategories()
	)

	return { isLoading, categoriesList }
}
