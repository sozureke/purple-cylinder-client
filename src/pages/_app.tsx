import '@/app/assets/styles/index.scss'
import { MainProvider } from '@/app/provider'
import { TypeComponentAuthFields } from '@/features'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

type TypeAppProps = AppPropsWithLayout & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	const getLayout =
		Component.getLayout ??
		((page: ReactElement) => (
			<MainProvider Component={Component}>{page}</MainProvider>
		))

	return <>{getLayout(<Component {...pageProps} />)}</>
}
