import { CategoryItem } from '@/entities/category'
import { useCategory } from '@/entities/category/api/useCategory'
import { FC } from 'react'
import styles from './categories-container.module.scss'

export const CategoriesContainer: FC = () => {
	const { isLoading, categoriesList } = useCategory()

	return (
		<>
			<section className={styles.categories_container}>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					categoriesList?.data.map(category => (
						<CategoryItem
							slug={category.slug}
							name={category.name}
							key={category.name}
						/>
					))
				)}
			</section>
		</>
	)
}
