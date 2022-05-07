import React from 'react'

const ProductInfoBody = () => {
	return (
		<>
			<div className="body row">
				<div className="product-desc col-12 p-2 mb-3 rounded-3 bg-white">
					<h4>MRP: <span className='line-through'>₹3,123</span></h4>
					<div className="d-flex align-items-end mb-2">
						<h4 className='m-0 me-2'>Deal: <span className=''>₹2,999</span></h4>
						<p className='m-0'>(Ends in 3 days)</p>
					</div>
					<p>You Save ₹123 (4%)</p>
				</div>
			</div>
		</>
	)
}

export default ProductInfoBody