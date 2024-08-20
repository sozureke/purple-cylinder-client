import { axiosClassic } from '@/app/interceptors'
import { IProduct } from '@/entities/product'
import { getProductUrl } from '@/shared/config'

export const ProductService = {
	getProductsByCategory(category: string) {
		return axiosClassic.get<IProduct[]>(
			getProductUrl(`by-category/${category}`)
		)
	}
}
