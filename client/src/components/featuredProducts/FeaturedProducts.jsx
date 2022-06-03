import React, { useEffect } from 'react'
import FeatProdItem from './FeatProdItem.jsx'
import Img1 from '../../assets/images/feat-products/feat-prod-img1.jpg'
import { getAllProducts } from '../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../layouts/Spinner'
import swal from 'sweetalert'

const FeaturedProducts = () => {

	const dispatch = useDispatch()

	const { loading, products, error } = useSelector(state => state.products)

	useEffect(() => {
		if (error) {
			return swal('Error', error, 'error', { button: 'Close', dangerMode: true })
		}
		dispatch(getAllProducts())
	}, [dispatch, error])

	return (
		<>
			<h4 className='text-center feat-prod-head mx-auto p-3 px-5'>Featured Products</h4>
			{loading ? <Spinner /> : <div className="FeaturedProducts container my-5" id='FeaturedProducts'>
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