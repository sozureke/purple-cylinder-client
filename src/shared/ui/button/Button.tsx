import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { IButton } from './button.interface'
import styles from './button.module.scss'

export const Button: FC<PropsWithChildren<IButton>> = ({ href, children }) => {
	return (
		<>
			<Link href={href} className={styles.button}>
				{children}
			</Link>
		</>
	)
}
