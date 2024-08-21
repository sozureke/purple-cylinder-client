import { axiosClassic } from '@/app/interceptors'
import { IProduct } from '@/entities/product'
import { getProductUrl } from '@/shared/config'

export const ProductService = {
	async getProductBySearchTerm(searchTerm?: string) {
		return axiosClassic.get<IProduct[]>(getProductUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async getProductsByCategory(category: string) {
		return axiosClassic.get<IProduct[]>(
			getProductUrl(`by-category/${category}`)
		)
	}
}
