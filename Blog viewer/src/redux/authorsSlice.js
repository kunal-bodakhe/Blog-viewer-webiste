import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsers } from '../api/postsAPI'


export const loadAuthors = createAsyncThunk('authors/loadAuthors', async () => {
const users = await fetchUsers()
// Map users by id for quick lookup
const map = {}
users.forEach(u => (map[u.id] = u))
return map
})


const authorsSlice = createSlice({
name: 'authors',
initialState: {
byId: {},
status: 'idle',
error: null,
},
reducers: {},
extraReducers: builder => {
builder
.addCase(loadAuthors.pending, (state) => { state.status = 'loading' })
.addCase(loadAuthors.fulfilled, (state, action) => {
state.status = 'succeeded'
state.byId = action.payload
})
.addCase(loadAuthors.rejected, (state, action) => {
state.status = 'failed'
state.error = action.error.message
})
}
})


export default authorsSlice.reducer