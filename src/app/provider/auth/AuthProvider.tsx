import { TypeComponentAuthFields, useAuth } from '@/features'
import { useActions } from '@/shared/hooks'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component
}) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActions()
	const { pathname } = useRouter()

	const { isOnlyAdmin, isOnlyUser } = Component || {}

	useEffect(() => {
		const accessToken = Cookies.get('search_label')
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('alpha_key')
		if (!refreshToken && user) logout()
	}, [pathname])

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}
