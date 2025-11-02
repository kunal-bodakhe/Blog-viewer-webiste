import axios from 'axios'


const BASE = 'https://dummyjson.com'


export const fetchPosts = async () => {
// DummyJSON returns posts in { posts: [...] }
const res = await axios.get(`${BASE}/posts?limit=100`)
return res.data.posts
}


export const fetchUsers = async () => {
const res = await axios.get(`${BASE}/users?limit=100`)
return res.data.users
}


export const fetchPostById = async (id) => {
const res = await axios.get(`${BASE}/posts/${id}`)
return res.data
}


export const fetchUserById = async (id) => {
const res = await axios.get(`${BASE}/users/${id}`)
return res.data
}