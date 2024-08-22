import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps {
	children: ReactNode
	className?: string
}

type TypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps

export interface IButton extends TypeButtonProps {}
