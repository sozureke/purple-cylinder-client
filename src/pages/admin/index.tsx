import { NextPageAuth } from '@/features/auth/lib/auth-roles.interface'

const Page: NextPageAuth = () => {
	return <div>Admin Page</div>
}

Page.isOnlyAdmin = true
export default Page
