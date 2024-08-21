import { ActionButtons, Logo, Navigation } from '@/shared/ui'
import { FC } from 'react'

import { headerActionButtons, headerNavigation } from '@/shared/data'
import styles from './header.module.scss'

export const Header: FC = ({}) => {
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
