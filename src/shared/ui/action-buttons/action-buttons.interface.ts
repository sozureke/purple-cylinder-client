import { IconType } from 'react-icons'

interface IButtonData {
	href: string
	alternativeText: string
	icon: IconType
}

export interface IActionButtons {
	data: IButtonData[]
	className?: string
	target?: '_blank' | '_parent'
}
