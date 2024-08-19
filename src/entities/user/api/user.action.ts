import { errorCatch } from '@/app/interceptors'
import { AuthService } from '@/shared/services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IFormData } from '../model/user.interface'

export const registration = createAsyncThunk<IAuthResponse, IFormData>(
	'auth/register',
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
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IFormData>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse, IFormData>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewRefreshToken()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') thunkApi.dispatch(logout())
			return thunkApi.rejectWithValue(error)
		}
	}
)
