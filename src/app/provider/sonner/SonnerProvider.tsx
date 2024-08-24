import { FC } from 'react'
import { Toaster } from 'sonner'

export const SonnerProvider: FC = () => {
	return (
		<>
			<Toaster visibleToasts={1} expand position="bottom-center" theme="dark" />
		</>
	)
}
