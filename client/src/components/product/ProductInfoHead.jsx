import React from 'react'
import ReactStars from 'react-star-rating-component'

const ProductInfoHead = (props) => {

	const { title, ratings, numOfReviews, desc } = props

	const reactStarsOptions = {
		editing: false,
		// size: window.innerWidth < 600 ? 20 : 23,
		value: ratings
	}

	return (
		<>
			<div className="ProductInfoHead rounded-3">
				<div className="head row mb-3 rounded-3 bg-white h-100">
					<div className="product-title col-md-7 p-2 h-100">
						<h3>{title}</h3>
					</div>
					<div className="product-ratings col-md-5 p-2 h-100 d-flex align-items-center">
						<div className="react-stars me-1">
							<ReactStars {...reactStarsOptions} classNames='me-2' />
						</div>
						<div className="ms-2">
							({`${numOfReviews} ${numOfReviews > 1 ? 'reviews' : 'review'}`})
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductInfoHead