import { axiosClassic } from '@/app/interceptors'
import { getCategoriesUrl } from '@/shared/config'
import { ICategoryItem } from '../model/category-item.interface'

export const CategoryService = {
	async getAllCategories() {
		return axiosClassic.get<ICategoryItem[]>(getCategoriesUrl(''))
	}
}
