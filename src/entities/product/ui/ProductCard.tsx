import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IProduct } from '../model/product-card.interface'
import styles from './product-card.module.scss'

export const ProductCard: FC<IProduct> = ({
	name,
	slug,
	images,
	description,
	parameters
}) => {
	return (
		<>
			<Link href={slug} className={styles.product_card}>
				<div className={styles.product_image}>
					<Image
						src={images[0]}
						alt={description}
						priority
						quality={100}
						draggable={false}
						width={380}
						height={490}
					/>
				</div>

				<div className={styles.product_information}>
					<span>{name}</span>
					<span>{`$ ${parameters.price}`}</span>
				</div>
			</Link>
		</>
	)
}
