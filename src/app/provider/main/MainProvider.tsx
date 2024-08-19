import { DefaultLayout } from '@/app/layout/index'
import { store } from '@/app/store'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { HeadProvider } from '../head/HeadProvider'
import { ReduxProvider } from '../redux/ReduxProvider'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
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
						<ReduxProvider />
						<DefaultLayout>{children}</DefaultLayout>
					</QueryClientProvider>
				</Provider>
			</HeadProvider>
		</>
	)
}
