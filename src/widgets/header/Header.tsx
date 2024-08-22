import { ActionButtons, Logo, Navigation } from '@/shared/ui'
import { FC, useState } from 'react'

import { headerActionButtons, headerNavigation } from '@/shared/data'
import { SearchBar } from '../search-bar'
import styles from './header.module.scss'

export const Header: FC = ({}) => {
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	const toggleSearchBar = () => {
		setIsSearchOpen(!isSearchOpen)
	}

	return (
		<>
			<div className={styles.header_container}>
				<header className={styles.header}>
					<div className={styles.container}>
						<Navigation data={headerNavigation} />
						<Logo />
						<ActionButtons
							data={headerActionButtons}
							onSearchClick={toggleSearchBar}
						/>
					</div>
				</header>
				<div
					className={`${styles.search_bar_container} ${isSearchOpen ? 'open' : ''}`}
				>
					{isSearchOpen && <SearchBar />}
				</div>
			</div>
		</>
	)
}
