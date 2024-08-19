import { Meta } from '@/app/meta'
import { AuthPage } from '@/views'
import { ReactElement } from 'react'
import { AuthLayout } from './layout'

export default function Page() {
	return (
		<>
			<Meta title="Auth">
				<AuthPage />
			</Meta>
		</>
	)
}

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<AuthLayout>{page}</AuthLayout>
		</>
	)
}
