import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPosts } from '../api/postsAPI'


export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
    const paginationNumber= "";
const posts = await fetchPosts()
return posts
})


const postsSlice = createSlice({
name: 'posts',
initialState: {
list: [],
status: 'idle',
error: null,
},
reducers: {},
extraReducers: builder => {
builder
.addCase(loadPosts.pending, (state) => {
state.status = 'loading'
})
.addCase(loadPosts.fulfilled, (state, action) => {
state.status = 'succeeded'
state.list = action.payload
})
.addCase(loadPosts.rejected, (state, action) => {
state.status = 'failed'
state.error = action.error.message
})
}
})


export default postsSlice.reducer