import React from 'react'
import { RiShoppingCart2Line, RiFileList3Line } from 'react-icons/ri'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

const ProductInfoBody = (props) => {

	const { price, percentDec } = props

	return (
		<>
			<div className="body row">
				<div className="product-desc col-12 p-2 mb-3 rounded-3 bg-white">
					<h4>MRP: <span className='line-through'>₹{price + ((percentDec / 100) * price)}</span></h4>
					<div className="d-flex align-items-end mb-2">
						<h4 className='m-0 me-2'>Deal: <span className=''>₹{price}</span></h4>
						<p className='m-0'>(Ends in 3 days)</p>
					</div>
					<p>You Save ₹{(percentDec / 100) * price} ({percentDec}%)</p>
				</div>
			</div>

			<div className="product-options row p-2 mb-3 rounded-3 bg-white">
				<div className="col-lg-4 col-sm-6">
					<button className="product-options-btn btn-outline-secondary border border-secondary d-flex justify-content-between align-items-center rounded-pill px-3 py-1 trans-2">
						<RiShoppingCart2Line className='me-2' />
						<span>Add To Cart</span>
					</button>
				</div>
				<div className="col-lg-4 col-sm-6">
					<button className="product-options-btn btn-outline-danger border border-danger d-flex justify-content-between align-items-center rounded-pill px-3 py-1 trans-2">
						<RiFileList3Line className='me-2' />
						<span>Add To Wishlist</span>
					</button>
				</div>
				<div className="col-lg-4 col-sm-6">
					<button className="product-options-btn btn-outline-primary border border-primary d-flex justify-content-between align-items-center rounded-pill px-3 py-1 trans-2">
						<FaRegMoneyBillAlt className='me-2' />
						<span>Buy Now</span>
					</button>
				</div>
			</div>

			<div className="product-reviews row">

			</div>
		</>
	)
}

export default ProductInfoBody