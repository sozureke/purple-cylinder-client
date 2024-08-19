import { MainProvider } from '@/app/provider'
import { FC, PropsWithChildren } from 'react'

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<MainProvider>
				<main className="flex justify-center items-center max-w-[1600px] min-h-screen mx-auto my-0 p-2.5">
					{children}
				</main>
			</MainProvider>
		</>
	)
}
