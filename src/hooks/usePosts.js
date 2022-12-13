import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		console.log('Отработатола функция проверки сортировки')
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		else return posts
	}, [sort, posts])

	return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);
	const searchedAndSortedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))

	}, [query, sortedPosts])

	return searchedAndSortedPosts;

}