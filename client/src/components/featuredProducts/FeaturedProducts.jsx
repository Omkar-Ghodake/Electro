import React, { useEffect } from 'react'
import '../../css/FeaturedProducts.css'
import FeatProdItem from './FeatProdItem.jsx'
import Img1 from '../../assets/images/feat-products/feat-prod-img1.jpg'
import { getAllProducts } from '../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../layouts/Loader'
import { useAlert } from 'react-alert'

const FeaturedProducts = () => {

	const dispatch = useDispatch()
	const alert = useAlert()

	const { loading, products, error } = useSelector(state => state.products)

	useEffect(() => {
		if (error) {
			return alert.error(error)
		}
		dispatch(getAllProducts())
	}, [dispatch, error, alert])

	return (
		<>
			{loading ? <Loader /> : <div className="FeaturedProducts container my-5" id='FeaturedProducts'>
				<h4 className='text-center feat-prod-head mx-auto p-3 px-5'>Featured Products</h4>
				<div className="row g-4 mt-4">
					{
						products && products.map((product, index) => {
							return <
								FeatProdItem
								key={index}
								productId={product._id}
								title={product.title}
								desc={product.desc}
								img={Img1}
								price={product.price}
								ratings={product.ratings}
								numOfReviews={product.numOfReviews}
							/>
						})
					}
				</div>
			</div>}
		</>
	)
}

export default FeaturedProducts