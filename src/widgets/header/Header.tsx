import { ActionButtons, Logo, Navigation } from '@/shared/ui'
import { FC } from 'react'

import { headerActionButtons, headerNavigation } from '@/shared/data'
import { useSearchBar } from '../search-bar'
import styles from './header.module.scss'

export const Header: FC = ({}) => {
	const { isSearchVisible, toggleSearchBar } = useSearchBar()

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<Navigation data={headerNavigation} />
					<Logo />
					<ActionButtons data={headerActionButtons} />
				</div>
			</header>
		</>
	)
}
