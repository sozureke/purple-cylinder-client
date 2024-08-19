import { FC } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import styles from './search-bar.module.scss'

export const SearchBar: FC = () => {
	return (
		<>
			<form className={styles.search_bar} role="search">
				<div className={styles.search_container}>
					<button type="submit">
						<IoSearchSharp size={20} />
					</button>
					<input
						type="text"
						className={styles.search_input}
						placeholder="What are you looking for ?"
					/>
				</div>
			</form>
		</>
	)
}
