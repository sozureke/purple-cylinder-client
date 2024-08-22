import { Meta } from '@/app/meta'
import { NextPageAuth } from '@/features'
import { Heading } from '@/shared/ui'

const Page: NextPageAuth = () => {
	return (
		<>
			<Meta title="Profile" description="PC | Your personal profile page">
				<Heading level={3}>Profile</Heading>
			</Meta>
		</>
	)
}

Page.isOnlyUser = true
export default Page
