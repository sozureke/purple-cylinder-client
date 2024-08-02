import { Footer, Header } from '@/widgets'
import { FC, PropsWithChildren } from 'react'
import styles from './default.module.scss'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.container}>{children}</main>
			<Footer />
		</>
	)
}
