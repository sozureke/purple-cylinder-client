import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps {
	children: ReactNode
}

type TypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps

export interface IButton extends TypeButtonProps {}
