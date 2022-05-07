import React, { useEffect } from 'react'
import ReactStars from 'react-rating-stars-component'
import { getProductDetails } from '../../actions/productActions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../../layouts/Loader'
import { useAlert } from 'react-alert'

const ProductInfoHead = () => {

	const { productId } = useParams()
	const dispatch = useDispatch()
	const alert = useAlert()
	const { product, loading, error } = useSelector((state) => state.product)
	if (product) {
		var { title, ratings, numOfReviews, desc } = product
	}

	const reactStarsOptions = {
		edit: false,
		size: window.innerWidth < 600 ? 20 : 23,
		isHalf: true,
		value: ratings
	}

	useEffect(() => {
		if (error) {
			alert.error(error)
			console.log('first')
		} else {
			dispatch(getProductDetails(productId))
		}
	}, [dispatch, productId, error, alert])

	return (
		<>
			{loading ? <Loader /> : <div className="ProductInfoHead rounded-3">
				<div className="head row mb-3 rounded-3 bg-white h-100">
					<div className="product-title col-md-7 p-2 h-100">
						<h3>{title}</h3>
					</div>
					<div className="product-ratings col-md-5 p-2 h-100 d-flex align-items-center">
						<ReactStars {...reactStarsOptions} classNames='me-2' />
						({`${numOfReviews} ${numOfReviews > 1 ? 'reviews' : 'review'}`})
						{/* {ratings} */}
					</div>
				</div>
			</div>}
		</>
	)
}

export default ProductInfoHead