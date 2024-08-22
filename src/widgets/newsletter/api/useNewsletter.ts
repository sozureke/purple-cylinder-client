import { useMutation } from 'react-query'
import { NewsletterService } from './newsletter.service'

export const useNewsletter = () => {
	const mutation = useMutation((email: string) =>
		NewsletterService.subscribe(email)
	)
	return mutation
}
