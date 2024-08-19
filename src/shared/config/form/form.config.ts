export const authFormConfig = {
	validation: {
		name: {
			required: 'Name is required',
			minLength: { value: 3, message: 'Name must be at least 3 characters' }
		},
		surname: {
			required: 'Surname is required',
			minLength: { value: 5, message: 'Surname must be at least 5 characters' }
		},

		email: {
			required: 'Email is required',
			pattern: {
				value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				message: 'Invalid email address'
			}
		},
		password: {
			required: 'Password is required',
			minLength: { value: 7, message: 'Password must be at least 7 characters' }
		}
	}
}
