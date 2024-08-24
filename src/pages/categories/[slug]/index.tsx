import { CategoryBanner } from '@/shared/ui'
import { capitalizeFirstLetter } from '@/shared/utils'
import { ProductContainer } from '@/widgets'
import { useRouter } from 'next/router'

export default function Page() {
	const router = useRouter()
	const { slug } = router.query
	if (!slug) return null
	const category = capitalizeFirstLetter(String(slug))

	return (
		<>
			<CategoryBanner category={category} />
			<ProductContainer category={category} />
		</>
	)
}
