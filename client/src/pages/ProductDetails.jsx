import React, { useEffect } from 'react'
import '../css/pagesCSS/ProductDetails.css'
import ProductCarousel from '../components/product/ProductCarousel'
import ProductInfoBody from '../components/product/ProductInfoBody'
import ProductInfoHead from '../components/product/ProductInfoHead'
import { getProductDetails } from '../actions/productActions'
// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import Loader from '../layouts/Loader'
// import { useAlert } from 'react-alert'

const ProductDetails = () => {

	// const { productId } = useParams()
	// const dispatch = useDispatch()
	// const alert = useAlert()
	// const { product, loading, error } = useSelector((state) => state.product)
	// if (product) {
	// 	var { title, ratings, numOfReviews, desc } = product
	// }

	// useEffect(() => {
	// 	if (error) {
	// 		alert.error(error)
	// 		console.log('first')
	// 	} else {
	// 		dispatch(getProductDetails(productId))
	// 	}
	// }, [dispatch, productId, error, alert])

	return (
		<>
			{<div>
				<div className="ProductDetails ProductDetails-sm-max row p-3 gy-3 container-fluid mx-auto">
					<div className="box-1 ps-sm-0 col-sm-6 rounded-3 order-2 order-sm-1">
						<ProductCarousel />
					</div>
					<div className="box-2 col-sm-6 order-1 order-sm-2">
						<ProductInfoHead />
					</div>
					<div className="box-3 col-sm-6 order-3 order-sm-3"></div>
					<div className="box-4 col-sm-6 order-4 order-sm-4">
						<ProductInfoBody />
					</div>
				</div>

				<div className="ProductDetails ProductDetails-sm-min row p-3 gy-3 container-fluid mx-auto">
					<div className="box-1 ps-sm-0 col-sm-6 rounded-3 order-2 order-sm-1">
						<ProductCarousel />
					</div>
					<div className="box-2 col-sm-6 order-1 order-sm-2">
						<ProductInfoHead />
						<ProductInfoBody />
					</div>
				</div>
			</div>}
		</>
	)
}

export default ProductDetails