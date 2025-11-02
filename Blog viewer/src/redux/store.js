import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsSlice'
import authorsReducer from './authorsSlice'


const store = configureStore({
reducer: {
posts: postsReducer,
authors: authorsReducer,
},
})


export default store