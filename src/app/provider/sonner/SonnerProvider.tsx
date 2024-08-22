import { FC } from 'react'
import { Toaster } from 'sonner'

export const SonnerProvider: FC = () => {
	return (
		<>
			<Toaster position="bottom-center" theme="dark" />
		</>
	)
}
