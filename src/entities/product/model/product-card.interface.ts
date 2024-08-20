export interface IProductParameters {
	price: number
	sizes: string[]
	colors: string[]
	status: string
}

export interface IProduct {
	name: string
	description: string
	slug: string
	images: string[]
	parameters: IProductParameters
}
