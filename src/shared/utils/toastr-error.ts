import { errorCatch } from '@/app/interceptors'
import { toastr } from 'react-redux-toastr'

export const toastrError = (error: any, title?: string) => {
	const message = errorCatch(error)
	toastr.error(title || 'Error', message)
	throw message
}
