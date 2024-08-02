'use client'

import logoImage from '@/app/assets/favicons/favicon.ico'
import { siteName, titleMerge } from '@/shared/config'
import { onlyText } from '@/shared/utils'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { ISeo } from './meta.interface'

export const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const path = usePathname()
	const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={onlyText(description, 152)}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="en" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:image" content={image || logoImage.src} />
						<meta property="og:site_name" content={siteName} />
						<meta
							property="og:description"
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}
