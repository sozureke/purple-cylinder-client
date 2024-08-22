import { newsletterFormConfig } from '@/shared/config'
import { toastrError } from '@/shared/utils'
import { useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { INewsletterForm } from '../model/newsletter.interface'
import { useNewsletter } from './useNewsletter'

export const useNewsletterForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<INewsletterForm>()
	const { mutate, isLoading } = useNewsletter()

	const onSubmit = (data: INewsletterForm) => {
		mutate(data.email, {
			onSuccess: () => {
				reset()
				toastr.success('Success', 'You have been subscribed to our newsletter')
			},
			onError: (error: any) => toastrError(error)
		})
	}

	return {
		register,
		errors,
		isLoading,
		newsletterFormConfig,
		handleSubmit: handleSubmit(onSubmit)
	}
}
