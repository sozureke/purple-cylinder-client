import { TextBlock } from '@/shared/ui'
import { FC } from 'react'
import { NewsletterForm } from './NewsletterForm'
import styles from './newsletter.module.scss'

export const Newsletter: FC = () => {
	return (
		<>
			<section className={`${styles.newsletter} wrapper`}>
				<TextBlock
					title="Newsletter"
					body="Stay ahead of&nbsp;the curve with the latest fashion updates. Discover handpicked styles and exclusive accessories to&nbsp;elevate your wardrobe."
				/>
				<NewsletterForm />
			</section>
		</>
	)
}
