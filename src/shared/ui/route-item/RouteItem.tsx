import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { IRouteItem } from './route-item.interface'
import styles from './route-item.module.scss'

export const RouteItem: FC<PropsWithChildren<IRouteItem>> = ({
	children,
	href,
	target = '_parent'
}) => {
	return (
		<>
			<Link
				href={href}
				className={styles.nav_item}
				target={target}
				scroll={false}
			>
				{children}
			</Link>
		</>
	)
}
