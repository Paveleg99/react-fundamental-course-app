import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/App.css"
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from "../components/UI/Pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import PostService from "../API/PostService";
import { getPageCount } from "../utils/pages";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";

function Posts() {

	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);


	const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
	// const [isPostLoading, setIsPostLoading] = useState(false)

	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const responce = await PostService.getAll(limit, page);
		setPosts(responce.data);
		const totalPostCount = responce.headers['x-total-count'];
		setTotalPages(getPageCount(totalPostCount, limit));
	})


	useEffect(() => {
		fetchPosts();
	}, [page])

	const changePage = (page) => {
		setPage(page);

	}
	// const [selectedSort, setSelectedSort] = useState('')
	// const [searchQuery, setSearchQuery] = useState('')
	// const [title, setTitle] = useState('')
	// const [body, setBody] = useState('')
	// const bodyInputRef = useRef()



	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	// Получаем post из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}


	return (
		<div className="App">
			<MyButton style={{ marginTop: 15 }} onClick={() => setModal(true)}>Создать пост</MyButton>
			<MyModal visible={modal} setVisible={setModal} >
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0' }} />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			{postError &&
				<h1>Произошла ошибка ${postError}</h1>
			}
			{isPostLoading
				? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
				: <PostList remove={removePost} posts={searchedAndSortedPosts} title='Список постов' />
			}
			<Pagination
				page={page}
				totalPages={totalPages}
				changePage={changePage}
			/>

		</div>
	);
}

export default Posts;