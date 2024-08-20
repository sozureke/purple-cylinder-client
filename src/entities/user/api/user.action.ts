import { errorCatch } from '@/app/interceptors'
import { AuthService } from '@/shared/services'
import { toastrError } from '@/shared/utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { toastr } from 'react-redux-toastr'
import { IAuthResponse, IFormData } from '../model/user.interface'

export const registration = createAsyncThunk<IAuthResponse, IFormData>(
	'authorization/register',
	async ({ email, password, name = '', surname = '' }, thunkApi) => {
		try {
			const response = await AuthService.register(
				email,
				password,
				surname,
				name
			)
			return response.data
		} catch (error) {
			toastrError(error)
			let errorMessage = 'An unknown error occurred'
			let status = null

			if (error instanceof AxiosError) {
				errorMessage = error.response?.data?.message || error.message
				status = error.response?.status
			}

			return thunkApi.rejectWithValue({ message: errorMessage, status })
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IFormData>(
	'authorization/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login Successfully', 'Authorization success')
			return response.data
		} catch (error) {
			toastrError(error)
			let errorMessage = 'An unknown error occurred'
			let status = null

			if (error instanceof AxiosError) {
				errorMessage = error.response?.data?.message || error.message
				status = error.response?.status
			}
			return thunkApi.rejectWithValue({ message: errorMessage, status })
		}
	}
)

export const logout = createAsyncThunk('authorization/logout', async () => {
	await AuthService.logout()
	toastr.info('Logout', 'You have successfully logged out of your account')
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'authorization/login/access-token',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewRefreshToken()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error('Logout', 'Your session has ended. Re-authorise again')
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
