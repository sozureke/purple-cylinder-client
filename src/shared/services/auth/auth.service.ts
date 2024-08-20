import { axiosClassic, getContentType } from '@/app/interceptors'
import { IAuthResponse } from '@/entities/user'
import { getAuthUrl } from '@/shared/config'
import Cookies from 'js-cookie'
import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async register(
		email: string,
		password: string,
		name: string,
		surname: string
	) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('register'),
			{ email, password, name, surname }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('login'),
			{ email, password }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},

	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	async getNewRefreshToken() {
		const refreshToken = Cookies.get('alpha_key')
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveToStorage(response.data)
		return response
	}
}
