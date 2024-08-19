import { authFormConfig } from '@/shared/config'
import { useActions } from '@/shared/hooks'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormFields } from '../lib/auth-form.interface'

export const useAuthForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IFormFields>({ mode: 'onChange' })
	const [isLoading, setIsLoading] = useState(false)
	const [type, setType] = useState<'login' | 'registration'>('login')
	const { login, registration } = useActions()

	const toggleFormType = () => {
		setType(prevType =>
			prevType === 'registration' ? 'login' : 'registration'
		)
	}

	const onSubmit: SubmitHandler<IFormFields> = data => {
		if (type === 'login') login(data)
		else if (type === 'registration') registration(data)
		reset()
	}

	return {
		type,
		setType,
		register,
		toggleFormType,
		handleSubmit: handleSubmit(onSubmit),
		reset,
		errors,
		isLoading,
		authFormConfig
	}
}
