import { CategoryItem } from '@/entities/category'
import { useCategory } from '@/entities/category/api/useCategory'
import { FC } from 'react'
import styles from './categories-container.module.scss'

export const CategoriesContainer: FC = () => {
	const { isLoading, categoriesList } = useCategory()

	return (
		<>
			<div className={styles.categories_container}>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					categoriesList?.data
						.splice(0, 6)
						.map(category => (
							<CategoryItem
								slug={category.slug}
								name={category.name}
								key={category.name}
							/>
						))
				)}
			</div>
		</>
	)
}
