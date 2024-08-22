import { TextBlock } from '@/shared/ui'
import { FC } from 'react'
import { NewsletterForm } from './NewsletterForm'
import styles from './newsletter.module.scss'

export const Newsletter: FC = () => {
	return (
		<>
			<section className={styles.newsletter}>
				<TextBlock
					title="Newsletter"
					body="Explore the newest fashion trends, enhance your wardrobe with curated clothing and accessories."
				/>
				<NewsletterForm />
			</section>
		</>
	)
}
