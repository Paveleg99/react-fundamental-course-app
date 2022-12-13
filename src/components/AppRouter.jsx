import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import PostPage from '../pages/PostPage'
import Posts from '../pages/Posts'
import { routes } from '../router'

const AppRouter = () => {
	return (
		<Routes>
			{routes.map(route =>
				<Route
					path={route.path}
					element={route.element}
				/>
			)}
			{/* <Route path="/*" element={<Navigate to="/posts" replace />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/posts/:id' element={<PostPage />} />
			<Route path='/about' element={<About />} /> */}
		</Routes>
	)
}

export default AppRouter