import { FC } from 'react'
import { Heading } from '../heading/Heading'
import { ICategoryBanner } from './category-banner.interface'
import styles from './category-banner.module.scss'

export const CategoryBanner: FC<ICategoryBanner> = ({ category }) => {
	return (
		<>
			<section className={`${styles.category_banner} wrapper`}>
				<Heading level={4}>{category}</Heading>
			</section>
		</>
	)
}
