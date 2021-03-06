import React, { useEffect } from 'react'
import '../css/pagesCSS/ProductDetails.css'
import ProductCarousel from '../components/product/ProductCarousel'
import ProductInfoBody from '../components/product/ProductInfoBody'
import ProductInfoHead from '../components/product/ProductInfoHead'
import { getProductDetails } from '../actions/productActions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Loader from '../layouts/Loader'
import MetaData from '../layouts/MetaData'

const ProductDetails = () => {

	const { productId } = useParams()
	const dispatch = useDispatch()

	const { product, loading, error } = useSelector((state) => state.product)
	if (product) {
		var { title, ratings, numOfReviews, desc, price, reviews } = product
	}

	useEffect(() => {
		if (error) {
			return swal('Error', error, 'error', { button: 'Close', dangerMode: true })
		} else {
			dispatch(getProductDetails(productId))
		}
	}, [dispatch, productId, error])

	return (
		<>
			<MetaData title={'ELECTRO | Products'} />

			{loading
				? <Loader />
				: <div>
					{/* Desktop View */}
					<div className="ProductDetails ProductDetails-sm-max row p-3 gy-3 container-fluid mx-auto">
						<div className="box-1 ps-sm-0 col-sm-6 rounded-3 order-2 order-sm-1">
							<ProductCarousel />
						</div>
						<div className="box-2 col-sm-6 order-1 order-sm-2">
							<ProductInfoHead
								title={title}
								ratings={ratings}
								numOfReviews={numOfReviews}
							/>
						</div>
						<div className="box-3 col-sm-6 order-3 order-sm-3"></div>
						<div className="box-4 col-sm-6 order-4 order-sm-4">
							<ProductInfoBody price={price} percentDec={5} days={3} hrs={8} mins={36} desc={desc} reviews={reviews} />
						</div>
					</div>

					{/* Mobile View */}
					<div className="ProductDetails ProductDetails-sm-min row p-3 gy-3 container-fluid mx-auto">
						<div className="box-1 ps-sm-0 col-sm-6 rounded-3 order-2 order-sm-1">
							<ProductCarousel />
						</div>
						<div className="box-2 col-sm-6 order-1 order-sm-2">
							<ProductInfoHead
								title={title}
								ratings={ratings}
								numOfReviews={numOfReviews}
							/>
							<ProductInfoBody price={price} percentDec={5} days={3} hrs={8} mins={36} desc={desc} reviews={reviews} />
						</div>
					</div>
				</div>}
		</>
	)
}

export default ProductDetails