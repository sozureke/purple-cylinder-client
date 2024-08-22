import { FC } from 'react'
import { IIcon } from './icon.interface'

export const Icon: FC<IIcon> = ({
	icon: Icon,
	alternativeText,
	size,
	onClick
}) => {
	return (
		<>
			<span>
				<Icon size={size} aria-label={alternativeText} onClick={onClick} />
			</span>
		</>
	)
}
