import siteLogo from '@/app/assets/favicons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const Logo: FC = ({}) => {
	return (
		<>
			<Link href={'/'}>
				<Image
					src={siteLogo.src}
					draggable={false}
					alt="Purple Cylinder Logo"
					priority
					width={115}
					height={42}
				/>
			</Link>
		</>
	)
}
