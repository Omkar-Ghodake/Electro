import React from 'react'
import ReactStars from 'react-rating-stars-component'

const ProductInfoHead = (props) => {

	const { title, ratings, desc } = props

	const reactStarsOptions = {
		edit: false,
		size: window.innerWidth < 600 ? 20 : 23,
		isHalf: true,
		value: ratings
	}

	return (
		<>
			<div className="ProductInfoHead rounded-3">
				<div className="head row mb-3 rounded-3 bg-white h-100">
					<div className="product-title col-md-7 p-2">
						<h1>{title}</h1>
					</div>
					<div className="product-ratings col-md-5 p-2">
						{console.log(reactStarsOptions)}
						<ReactStars {...reactStarsOptions} />
					</div>
					<div className="product-desc col-12 p-2">
						{desc}
					</div>
				</div>
				{/* <div className="product-price">
					<h1>₹ 877</h1>
				</div> */}
			</div>
		</>
	)
}

export default ProductInfoHead