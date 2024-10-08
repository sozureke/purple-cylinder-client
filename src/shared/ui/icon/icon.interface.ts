import { IconType } from 'react-icons'

export interface IIcon {
	icon: IconType
	alternativeText: string
	size?: number
	onClick?: () => void
	className?: string
}
