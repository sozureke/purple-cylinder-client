import { footerActionButtons, footerNavigation } from '@/shared/data'
import { ActionButtons, Navigation } from '@/shared/ui'
import Link from 'next/link'
import { FC } from 'react'
import styles from './footer.module.scss'

export const Footer: FC = ({}) => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<Navigation data={footerNavigation} />
					<ActionButtons data={footerActionButtons} target="_blank" />
					<p className={styles.rights}>
						Purple Cylinder. All rights reserved Created by:{' '}
						<Link href={'https://github.com/sozureke'} target="_blank">
							sozureke
						</Link>
					</p>
				</div>
			</footer>
		</>
	)
}
