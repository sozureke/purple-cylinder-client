import React from 'react'
import styles from './Heading.module.scss'
import { IHeadingProps } from './heading.interface'

export const Heading: React.FC<IHeadingProps> = ({
	level,
	children,
	className
}) => {
	const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
	return (
		<HeadingTag
			className={`${styles.heading} ${styles[`h${level}`]} ${className}`}
		>
			{children}
		</HeadingTag>
	)
}
