import { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

export const ReduxToastrProvider: FC = () => {
	return (
		<>
			<ReduxToastr
				timeOut={5000}
				newestOnTop={false}
				preventDuplicates
				position="bottom-center"
				transitionIn="fadeIn"
				transitionOut="fadeOut"
				closeOnToastrClick
			/>
		</>
	)
}
