import { FC } from 'react'
import { Heading } from '../heading/Heading'
import { ITextBlock } from './text-block.interface'
import styles from './text-block.module.scss'

export const TextBlock: FC<ITextBlock> = ({ title, body }) => {
	return (
		<>
			<div className={styles.text_block}>
				<Heading level={2}>{title}</Heading>
				<p className={styles.text}>{body}</p>
			</div>
		</>
	)
}
