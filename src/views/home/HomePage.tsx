import { Meta } from '@/app/meta'
import { CategoriesContainer, Newsletter } from '@/widgets'
import { ProductContainer } from '@/widgets/product-container'
import { FC } from 'react'

export const HomePage: FC = ({}) => {
	return (
		<>
			<Meta title="Home" description="Home Page">
				<CategoriesContainer />
				<ProductContainer category="Entrste" />
				<Newsletter />
			</Meta>
		</>
	)
}
