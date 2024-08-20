import { Button, Heading, Input } from '@/shared/ui'
import { FC } from 'react'
import { useAuthForm } from '../model/useAuthForm'
import styles from './auth-form.module.scss'

export const AuthForm: FC = () => {
	const {
		register,
		handleSubmit,
		type,
		toggleFormType,
		authFormConfig,
		errors,
		isLoading
	} = useAuthForm()

	return (
		<>
			<form className={styles.auth_form} onSubmit={handleSubmit}>
				<div className={styles.form_title}>
					<Heading level={5}>
						{type === 'login' ? 'login' : 'create a profile'}
					</Heading>
				</div>
				{type === 'registration' && (
					<>
						<div className={styles.input_container}>
							{type === 'registration' && <span>Person information</span>}
							<Input
								type="text"
								placeholder="name"
								inputErrorMessage={errors.name?.message}
								{...register('name', authFormConfig.validation.name)}
							/>
							<Input
								type="text"
								placeholder="surname"
								inputErrorMessage={errors.surname?.message}
								{...register('surname', authFormConfig.validation.surname)}
							/>
						</div>
					</>
				)}
				<div className={styles.input_container}>
					{type === 'registration' && <span>Account information</span>}
					<Input
						type="email"
						placeholder="email"
						autoComplete="email"
						inputErrorMessage={errors.email?.message}
						{...register('email', authFormConfig.validation.email)}
					/>
					<Input
						type="password"
						placeholder="password"
						autoComplete="current-password"
						inputErrorMessage={errors.password?.message}
						{...register('password', authFormConfig.validation.password)}
					/>
				</div>

				<div className={styles.button_container}>
					<Button type="submit" disabled={isLoading}>
						{type === 'login' ? 'login' : 'create a profile'}
					</Button>
					<span onClick={toggleFormType} className={styles.toggle_button}>
						{type === 'login'
							? 'Create a profile'
							: 'Already have a profile? Log in'}
					</span>
				</div>
			</form>
		</>
	)
}
