import React from 'react'
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import About from '../pages/About'
import PostPage from '../pages/PostPage'
import Posts from '../pages/Posts'
import { publicRoutes, privateRoutes } from '../router'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext);
	console.log(isAuth);

	if (isLoading) {
		return <Loader/>
	}
	return (
		isAuth
		?
		<Routes>
		{privateRoutes.map(route =>
			<Route
				path={route.path}
				element={route.element}
				key={route.path}
			/>
		)}
		</Routes>
		:
		<Routes>
			{publicRoutes.map(route =>
				<Route
					path={route.path}
					element={route.element}
					key={route.path}
				/>
			)}
		</Routes>	
			
		
	)
}
export default AppRouter


/* <Route path="/*" element={<Navigate to="/posts" replace />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/posts/:id' element={<PostPage />} />
			<Route path='/about' element={<About />} /> */