import { getCategoriesUrl } from '@/shared/config'
import Link from 'next/link'
import { FC } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ICategoryItem } from '../model/category-item.interface'
import styles from './category-item.module.scss'

export const CategoryItem: FC<ICategoryItem> = ({ name, slug }) => {
	return (
		<>
			<Link href={getCategoriesUrl(slug)} className={styles.category_item}>
				<div className={styles.category}>{name}</div>
				<IoIosArrowRoundForward size={40} className={styles.category_arrow} />
			</Link>
		</>
	)
}
