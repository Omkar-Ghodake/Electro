import React, { useEffect } from 'react'
import '../css/pagesCSS/ProductDetails.css'
import ProductCarousel from '../components/product/ProductCarousel'
import ProductInfoBody from '../components/product/ProductInfoBody'
import ProductInfoHead from '../components/product/ProductInfoHead'
import { getProductDetails } from '../actions/productActions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetails = (props) => {

	const { productId } = useParams()

	const dispatch = useDispatch()

	const { images, title, ratings, desc } = useSelector((state) => state.product.product)

	useEffect(() => {
		dispatch(getProductDetails(productId))
	}, [dispatch, productId])

	return (
		<>
			{<div>
				<div className="ProductDetails ProductDetails-sm-max row p-3 gy-3 container-fluid mx-auto">
					<div className="box-1 ps-sm-0 col-sm-6 rounded-3 order-2 order-sm-1">
						<ProductCarousel />
					</div>
					<div className="box-2 col-sm-6 order-1 order-sm-2">
						<ProductInfoHead
							title={title}
							ratings={ratings}
							desc={desc}
						/>
					</div>
					<div className="box-3 col-sm-6 order-3 order-sm-3"></div>
					<div className="box-4 col-sm-6 order-4 order-sm-4">
						<ProductInfoBody />
					</div>
				</div>

				<div className="ProductDetails ProductDetails-sm-min row p-3 gy-3 container-fluid mx-auto">
					<div className="box-1 ps-sm-0 col-sm-6 rounded-3 order-2 order-sm-1">
						<ProductCarousel images={images} />
					</div>
					<div className="box-2 col-sm-6 order-1 order-sm-2">
						<ProductInfoHead
							title={title}
							ratings={ratings}
							desc={desc}
						/>
						<ProductInfoBody />
					</div>
				</div>
			</div>}
		</>
	)
}

export default ProductDetails