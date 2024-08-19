import '@/app/assets/styles/index.scss'
import { MainProvider } from '@/app/provider'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout =
		Component.getLayout ??
		((page: ReactElement) => <MainProvider>{page}</MainProvider>)

	return <>{getLayout(<Component {...pageProps} />)}</>
}
