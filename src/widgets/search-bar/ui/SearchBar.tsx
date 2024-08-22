import { useSearch } from '@/features'
import { FC, useState } from 'react'
import styles from './search-bar.module.scss'
import { SearchField } from './SearchField'
import { SearchList } from './SearchList'

export const SearchBar: FC = () => {
	const { isSuccess, data, searchTerm, handleSearch } = useSearch()
	const [isFocused, setIsFocused] = useState(false)

	const handleFocus = () => setIsFocused(true)
	const handleBlur = () => setIsFocused(false)

	return (
		<>
			{isFocused && <div className={styles.overlay} onClick={handleBlur} />}
			<div className={styles.search_bar}>
				<div className={styles.container}>
					<SearchField
						handleSearch={handleSearch}
						searchTerm={searchTerm}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					{isSuccess && <SearchList products={data || []} />}
				</div>
			</div>
		</>
	)
}
