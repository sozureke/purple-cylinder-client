import { errorCatch } from '@/app/interceptors'
import { toast } from 'sonner'

export const toastError = (error: any) => {
	const message = errorCatch(error)
	toast.error(message || 'Error')
	throw message
}
