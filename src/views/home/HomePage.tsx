import { Meta } from '@/app/meta'
import { CategoriesContainer, Newsletter } from '@/widgets'
import { ProductContainer } from '@/widgets/product-container'
import { FC } from 'react'

export const HomePage: FC = ({}) => {
	return (
		<>
			<Meta title="Home" description="Home Page">
				<CategoriesContainer />
				<ProductContainer category="66101e4bf4374592d5a3ddfc" />
				<Newsletter />
			</Meta>
		</>
	)
}
