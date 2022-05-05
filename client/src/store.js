import { configureStore } from '@reduxjs/toolkit'
import {
	productDetailsReducer,
	productReducer
} from './reducers/productReducer'

const rootReducer = {
	products: productReducer,
	product: productDetailsReducer
}

const store = configureStore({
	reducer: rootReducer
})

export default store