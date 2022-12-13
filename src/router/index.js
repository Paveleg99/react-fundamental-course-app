import { Navigate } from "react-router-dom";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const routes = [
	{path: "/about", element: <About/>},
	{path: "/posts", element: <Posts/>},
	{path: "/posts/:id", element: <PostPage/>},
	{path: "/*", element: <Navigate to="/posts" replace />},
]
