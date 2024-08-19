export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IFormData {
	email: string
	password: string
	name?: string
	surname?: string
}

export interface IUser {
	_id: string
	email: string
	password: string
	name: string
	surname: string
	isAdmin: boolean
	createdAt: string
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}
