import { newsletterFormConfig } from '@/shared/config'
import { toastError } from '@/shared/utils'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
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
				toast.success('You have been subscribed to our newsletter')
			},
			onError: (error: any) => toastError(error)
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
