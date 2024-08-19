import { InputHTMLAttributes } from 'react'

export interface IInputProps {
	inputErrorMessage?: string
}

type TypeInputPropsFields = InputHTMLAttributes<HTMLInputElement> & IInputProps
export interface IInput extends TypeInputPropsFields {}
