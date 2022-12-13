export const getPageCount = (totalPostCount, limit) => { 
	return Math.ceil(totalPostCount / limit)
}

export const getPagesArray = (totalPages) => {
	let result = [];
	for (let i = 0; i < totalPages; i++) {
		result.push(i + 1);
	}
	return result;
}