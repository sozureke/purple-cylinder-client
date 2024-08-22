import { DefaultLayout } from '@/app/layout/index'
import { store } from '@/app/store'
import { TypeComponentAuthFields } from '@/features'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { AuthProvider } from '../auth/AuthProvider'
import { HeadProvider } from '../head/HeadProvider'
import { SonnerProvider } from '../sonner/SonnerProvider'

export const MainProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component
}) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false
			}
		}
	})
	return (
		<>
			<HeadProvider>
				<Provider store={store}>
					<QueryClientProvider client={queryClient}>
						<AuthProvider Component={Component}>
							<DefaultLayout>{children}</DefaultLayout>
							<SonnerProvider />
						</AuthProvider>
					</QueryClientProvider>
				</Provider>
			</HeadProvider>
		</>
	)
}
