import { AuthForm, useAuthRedirect } from '@/features'

import { FC } from 'react'

export const AuthPage: FC = () => {
	useAuthRedirect()
	return (
		<>
			<AuthForm />
		</>
	)
}
