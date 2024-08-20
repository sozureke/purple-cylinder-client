import { IAuthResponse, ITokens } from '@/entities/user'
import Cookies from 'js-cookie'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('search_label', data.accessToken)
	Cookies.set('alpha_key', data.refreshToken)
}

export const removeTokensStorage = () => {
	Cookies.remove('search_label')
	Cookies.remove('alpha_key')
}

export const saveToStorage = (data: IAuthResponse) => {
	try {
		saveTokensStorage(data)
		localStorage.setItem('user', JSON.stringify(data.user))
	} catch (error) {
		console.error('Error saving to storage:', error)
	}
}
