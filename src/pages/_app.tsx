import '@/app/assets/styles/index.scss'
import { MainProvider } from '@/app/provider'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}
