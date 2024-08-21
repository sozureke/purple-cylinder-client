import { Icon } from '@/shared/ui'
import { FC } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { ISearchField } from '../model/search-bar.interface'
import styles from './search-bar.module.scss'

export const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch,
	onFocus,
	onBlur
}) => {
	return (
		<div className={styles.search}>
			<Icon icon={MdOutlineSearch} alternativeText="search icon" size={22} />
			<input
				placeholder="What are you looking for?"
				className={styles.search_input}
				value={searchTerm}
				onChange={handleSearch}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</div>
	)
}
