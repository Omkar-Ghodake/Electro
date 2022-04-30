import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
	productDetailsReducer,
	productReducer
} from './reducers/productReducer'

const rootReducer = combineReducers({
	products: productReducer,
	product: productDetailsReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store