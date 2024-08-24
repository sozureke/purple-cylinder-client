import { FC } from 'react'
import { IMessage } from './message.interface'
import styles from './message.module.scss'

export const Message: FC<IMessage> = ({ message }) => {
	return (
		<>
			<div className={styles.message}>{message}</div>
		</>
	)
}
