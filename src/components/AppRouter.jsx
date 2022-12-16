import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import PostPage from '../pages/PostPage'
import Posts from '../pages/Posts'
import { publicRoutes, privateRoutes } from '../router'

const AppRouter = () => {
	const isAuth = false;
	return (
		isAuth
		?
		<Routes>
		{privateRoutes.map(route =>
			<Route
				path={route.path}
				element={route.element}
			/>
		)}
		</Routes>
		:
		<Routes>
			{publicRoutes.map(route =>
				<Route
					path={route.path}
					element={route.element}
				/>
			)}
		</Routes>	
			/* <Route path="/*" element={<Navigate to="/posts" replace />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/posts/:id' element={<PostPage />} />
			<Route path='/about' element={<About />} /> */
		
	)
}

export default AppRouter