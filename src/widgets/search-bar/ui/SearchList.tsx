import { IProduct } from '@/entities/product'
import { getProductUrl } from '@/shared/config'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './search-bar.module.scss'

export const SearchList: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<>
			<div className={styles.search_list}>
				{products.length ? (
					products.map(product => (
						<Link key={product.slug} href={getProductUrl(product.slug)}>
							<div className={styles.product_image}>
								<Image
									src={product.images[0]}
									alt={product.name}
									height={270}
									width={220}
									objectFit="cover"
									priority
								/>
							</div>
							<div className={styles.product_information}>
								<span>{product.name}</span>
								<span>{`$ ${product.parameters.price}`}</span>
							</div>
						</Link>
					))
				) : (
					<div className={styles.not_found}>Products Not Found...</div>
				)}
			</div>
		</>
	)
}
