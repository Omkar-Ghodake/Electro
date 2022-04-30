import React from 'react'
import ProductCarousel from '../components/product/ProductCarousel'
import ProductInfoBody from '../components/product/ProductInfoBody'
import ProductInfoHead from '../components/product/ProductInfoHead'
import '../css/ProductDetails.css'

const ProductDetails = () => {
	return (
		<>
			<div className="ProductDetails row p-3 gy-3 container-fluid mx-auto">
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
		</>
	)
}

export default ProductDetails