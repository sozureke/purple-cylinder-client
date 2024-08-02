import { DefaultLayout } from '@/app/layout'
import { FC, PropsWithChildren } from 'react'
import { HeadProvider } from '../head/HeadProvider'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<HeadProvider>
				<DefaultLayout>{children}</DefaultLayout>
			</HeadProvider>
		</>
	)
}
