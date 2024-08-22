import { FC } from 'react'
import { MdSearch } from 'react-icons/md'
import { Icon } from '../icon/Icon'
import { RouteItem } from '../route-item/RouteItem'
import { IActionButtons } from './action-buttons.interface'
import styles from './action-buttons.module.scss'

export const ActionButtons: FC<IActionButtons> = ({
	data,
	className,
	target,
	onSearchClick
}) => {
	return (
		<>
			<div className={`${styles.action_buttons} ${className}`}>
				<div className={styles.search}>
					<Icon
						size={22}
						icon={MdSearch}
						alternativeText="search icon"
						onClick={onSearchClick}
					/>
				</div>
				{data.map(item => (
					<RouteItem key={item.href} href={item.href} target={target}>
						<Icon
							size={22}
							icon={item.icon}
							alternativeText={item.alternativeText}
						/>
					</RouteItem>
				))}
			</div>
		</>
	)
}
