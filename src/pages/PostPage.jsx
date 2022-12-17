import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, PostIsLoading, PostError] = useFetching(async () => {
		const responce = await PostService.getById(params.id)
		setPost(responce.data);
	})
	const [fetchComments, CommentsIsLoading, CommentError] = useFetching(async () => {
		const responce = await PostService.getCommentsById(params.id)
		setComments(responce.data);
	})

	useEffect(() => {
		fetchPostById()
		fetchComments()
	}, [params.id])

	return (
		<div>
			<h1>Вы на странице поста c ID = {params.id}</h1>
			{PostIsLoading
				? <Loader />
				: <div>{post.id}. {post.title}</div>
			}
			<h1>Комментарии</h1>
			{CommentsIsLoading
				? <Loader/>
				: <div>
					{comments.map(comment => 
						<div key={comment.id} style={{ marginTop: 15 }}>
							<h5>{comment.email}</h5>
							<div>{comment.body}</div>
						</div>
					)}
				</div>
			}
		</div>
	)
}

export default PostPage