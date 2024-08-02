export const onlyText = (
	_string: string,
	limit: number | null = null
): string => {
	const result = _string
		.replace(
			/<[^>]+>|&[^;]+;|[\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C][\uDC00-\uDFFF]|[\uD83D][\uDC00-\uDFFF]|[\u2011-\u26FF]/g,
			''
		)
		.trim()

	if (limit && result.length > limit) {
		return result.slice(0, limit) + '...'
	}

	return result
}
