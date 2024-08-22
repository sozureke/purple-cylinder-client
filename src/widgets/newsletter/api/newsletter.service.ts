import { axiosClassic } from '@/app/interceptors'
import { getNewsletterUrl } from '@/shared/config'
import { INewsletter } from '../model/newsletter.interface'

export const NewsletterService = {
	async subscribe(email: string) {
		return axiosClassic.post<INewsletter>(getNewsletterUrl(), { email })
	}
}
