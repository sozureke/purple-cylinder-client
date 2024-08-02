import Head from 'next/head'
import NextTopLoader from 'nextjs-toploader'
import { FC, PropsWithChildren } from 'react'
import FavIcons from './FavIcons'

export const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextTopLoader
				color="#FFF"
				showSpinner={false}
				height={2}
				zIndex={9999}
				crawlSpeed={500}
				speed={500}
				easing="ease"
				showAtBottom={false}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<FavIcons />

				<meta name="theme-color" content="#141414" />
				<meta name="msapplication-navbutton-color" content="#141414" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#141414" />
			</Head>
			{children}
		</>
	)
}
