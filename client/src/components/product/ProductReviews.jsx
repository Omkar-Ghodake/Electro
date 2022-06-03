import React from 'react'
import ReactStars from 'react-star-rating-component'

const ProductReviews = (props) => {

	const { userName, rating, comment } = props

	return (
		<>
			<div className="card mb-2 border-warning">
				<div className="card-body">
					<h6 className="card-title d-flex align-items-center">
						<strong className='me-2'>{userName}</strong>
						<ReactStars
							name={'productRating'}
							editing={false}
							value={rating}
							classNames='me-2'
						/>
					</h6>

					<div className="card-text">
						{comment}
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductReviews