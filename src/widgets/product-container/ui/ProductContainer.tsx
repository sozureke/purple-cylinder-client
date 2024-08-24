import { ProductCard } from '@/entities/product'
import { useProductByCategory } from '@/shared/hooks'
import { Message } from '@/shared/ui'
import { FC } from 'react'
import { IProductContainer } from '../model/product-container.interface'
import styles from './product-container.module.scss'

export const ProductContainer: FC<IProductContainer> = ({ category }) => {
	const { isLoading, productsList } = useProductByCategory(category)

	return (
		<section className={`${styles.product_container} wrapper`}>
			{isLoading ? (
				<Message message="Loading..." />
			) : productsList && productsList.data.length > 0 ? (
				productsList.data.map(product => (
					<ProductCard
						key={product.slug}
						name={product.name}
						slug={product.slug}
						images={product.images}
						parameters={product.parameters}
						description={product.description}
					/>
				))
			) : (
				<Message message="Products not found" />
			)}
		</section>
	)
}
