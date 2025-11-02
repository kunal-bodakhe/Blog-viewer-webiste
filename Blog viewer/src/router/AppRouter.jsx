import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import PostDetail from '../pages/PostDetail'


const AppRouter = () => (
<>
<header className="site-header">
<div className="container">
<h1>Blog Viewer</h1>
</div>
</header>


<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/post/:id" element={<PostDetail />} />
</Routes>
</main>
</>
)


export default AppRouter