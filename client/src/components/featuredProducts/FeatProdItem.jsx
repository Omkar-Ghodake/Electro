import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const FeatProdItem = (props) => {

	const { productId, title, desc, img, price, ratings, numOfReviews } = props

	const reactStartsOptions = {
		edit: false,
		size: window.innerWidth < 600 ? 20 : 23,
		isHalf: true,
		value: ratings
	}

	return (
		<>
			<div className="feat-product-card col-lg-3 col-md-4 col-sm-6">
				<div className="card rounded-3 trans-3">
					<Link to={`/product/${productId}`}>
						<div className="card-img-top">
							<img src={img} alt="Product" className='w-100 trans-3' />
						</div>
						<div className="card-body">
							<div className="card-title d-flex justify-content-between align-items-center">
								<strong className='product-title'>{title}</strong>
								<strong className='product-price text-danger'>&#8377; {price.toLocaleString('en-IN')}</strong>
							</div>
							<div className="card-text">
								{desc}
							</div>
						</div>
					</Link>
					<div className="card-footer d-flex align-items-center">
						<ReactStars {...reactStartsOptions} />
						<span className='ms-2'>({numOfReviews} {numOfReviews > 1 ? 'reviews' : 'review'})</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default FeatProdItem