import { forwardRef } from 'react'
import { IButton } from './button.interface'
import styles from './button.module.scss'

export const Button = forwardRef<HTMLButtonElement, IButton>(
	({ children, ...rest }, ref) => {
		return (
			<button className={styles.button} {...rest} ref={ref}>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'
