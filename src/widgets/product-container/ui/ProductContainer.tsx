import { ProductCard, ProductService } from '@/entities/product'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { IProductContainer } from '../model/product-container.interface'
import styles from './product-container.module.scss'

export const ProductContainer: FC<IProductContainer> = ({ category }) => {
	const { isLoading, data: productsList } = useQuery(
		'products by category',
		() => ProductService.getProductsByCategory(category),
		{
			enabled: !!category
		}
	)

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<>
			<div className={styles.product_container}>
				{productsList?.data.map(product => (
					<ProductCard
						key={product.slug}
						name={product.name}
						slug={product.slug}
						images={product.images}
						parameters={product.parameters}
						description={product.description}
					/>
				))}
			</div>
		</>
	)
}
