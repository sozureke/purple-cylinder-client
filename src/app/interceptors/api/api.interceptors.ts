import { API_URL } from '@/shared/config'
import { AuthService, removeTokensStorage } from '@/shared/services'
import axios from 'axios'
import Cookies from 'js-cookie'
import { errorCatch, getContentType } from './api.helper'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get('search_label')
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		if (
			error.response.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' &&
				error.config &&
				!error.config._isRetry)
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewRefreshToken()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokensStorage()
			}
		}
		throw error
	}
)
