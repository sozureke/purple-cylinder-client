interface IBaseFormFields {
	email: string
	password: string
}

interface IRegistrationFormFields extends IBaseFormFields {
	name: string
	surname: string
}

export type IFormFields = IRegistrationFormFields & IBaseFormFields
