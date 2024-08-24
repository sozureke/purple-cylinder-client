import { axiosClassic } from '@/app/interceptors'
import { IProduct } from '@/entities/product'
import { getCategoriesUrl } from '@/shared/config'
import { ICategoryItem } from '../model/category-item.interface'

export const CategoryService = {
	async getAllCategories() {
		return axiosClassic.get<ICategoryItem[]>(getCategoriesUrl(''))
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<ICategoryItem>(getCategoriesUrl(`/by-slug/${slug}`))
	},

	async getProductsByCategoryName(category_name: string) {
		return axiosClassic.get<IProduct[]>(
			getCategoriesUrl(`by-name/${category_name}`)
		)
	}
}
