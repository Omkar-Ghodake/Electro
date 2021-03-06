import axios from 'axios'
import {
	ALL_PRODUCTS_REQUEST,
	ALL_PRODUCTS_SUCCESS,
	ALL_PRODUCTS_FAILURE,

	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAILURE,

	CLEAR_ERRORS
} from '../constants/productConstants'

export const getAllProducts = (keyword = '', currentPage = 1, price) => async (dispatch) => {
	dispatch({
		type: ALL_PRODUCTS_REQUEST
	})

	const url = `http://localhost:5000/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`
	await axios.get(url)
		.then(response => {
			const data = response.data
			dispatch({
				type: ALL_PRODUCTS_SUCCESS,
				payload: data
			})
		})
		.catch(err => {
			dispatch({
				type: ALL_PRODUCTS_FAILURE,
				payload: err.message
			})
		})
}

export const getProductDetails = (productId) => async (dispatch) => {
	dispatch({
		type: PRODUCT_DETAILS_REQUEST
	})

	axios.get(`http://localhost:5000/products/${productId}`)
		.then(response => {
			const data = response.data
			dispatch({
				type: PRODUCT_DETAILS_SUCCESS,
				payload: data
			})
		})
		.catch(err => {
			dispatch({
				type: PRODUCT_DETAILS_FAILURE,
				payload: err.message
			})
		})
}

// clearing errors
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS
	})
}