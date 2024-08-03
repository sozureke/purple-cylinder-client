import '@/app/assets/styles/index.scss'
import { Button, Heading } from '@/shared/ui'
import { Meta } from './meta'

export default function NotFound() {
	return (
		<Meta title="Page Not Found">
			<div className="flex justify-center items-center min-h-screen">
				<div className="py-10 px-20 border border-solid border-white flex flex-col gap-20 justify-center items-center max-w-[760px] text-center">
					<div className="flex flex-col justify-center items-center gap-[10px] max-w-[600px]">
						<Heading level={2}>Page not found</Heading>
						<p className="text-text-18 max-w-[370px]">
							Sometimes we&nbsp;choose the wrong path. But there&rsquo;s
							sometimes a&nbsp;way to&nbsp;go&nbsp;back...
						</p>
					</div>
					<Button href="/">back to home page</Button>
				</div>
			</div>
		</Meta>
	)
}
