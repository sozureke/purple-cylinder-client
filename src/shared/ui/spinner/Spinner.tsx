export const Spinner = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="relative">
				<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
				<div className="absolute inset-0 rounded-full bg-white"></div>
			</div>
		</div>
	)
}
