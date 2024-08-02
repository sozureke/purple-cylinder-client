import { RouteItem } from '@/shared/ui'
import { FC } from 'react'
import { INavigation } from './navigation.interface'
import styles from './navigation.module.scss'

export const Navigation: FC<INavigation> = ({ data }) => {
	return (
		<>
			<nav className={styles.navigation}>
				{data.map(item => (
					<RouteItem key={item.title} href={item.href}>
						{item.title}
					</RouteItem>
				))}
			</nav>
		</>
	)
}
