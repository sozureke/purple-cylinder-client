import { FC } from 'react'
import { IIcon } from './icon.interface'

export const Icon: FC<IIcon> = ({ icon: Icon, alternativeText, size }) => {
	return (
		<>
			<span>
				<Icon size={size} aria-label={alternativeText} />
			</span>
		</>
	)
}
