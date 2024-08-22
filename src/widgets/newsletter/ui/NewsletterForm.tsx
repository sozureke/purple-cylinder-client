import { Button, Input } from '@/shared/ui'
import { FC, useState } from 'react'
import { useNewsletterForm } from '../api/useNewsletterForm'
import styles from './newsletter.module.scss'

export const NewsletterForm: FC = ({}) => {
	const { handleSubmit, register, isLoading, newsletterFormConfig, errors } =
		useNewsletterForm()
	const [email, setEmail] = useState('')

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.newsletter_form}>
				<Input
					type="email"
					placeholder="email"
					autoComplete="email"
					className={styles.newsletter_input}
					inputErrorMessage={errors.email?.message}
					{...register('email', {
						...newsletterFormConfig.validation.email,
						onChange: handleEmailChange
					})}
				/>
				<Button className={styles.input_button} disabled={isLoading || !email}>
					subscribe
				</Button>
			</form>
		</>
	)
}
