import { reducer as userReducer } from '@/entities/user'
import { reducer as toastrReducer } from 'react-redux-toastr'

export const reducers = {
	user: userReducer,
	toastr: toastrReducer
}
