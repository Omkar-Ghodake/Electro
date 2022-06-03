import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../actions/productActions'
import swal from 'sweetalert'
import FeatProdItem from '../components/featuredProducts/FeatProdItem'
import Spinner from '../layouts/Spinner'
import Img1 from '../assets/images/feat-products/feat-prod-img1.jpg'
import '../css/pagesCSS/AllProducts.css'
import Pagination from 'react-js-pagination'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { BiFirstPage, BiLastPage } from 'react-icons/bi'
import PriceRangeSlider from '../layouts/PriceRangeSlider'
import CategoryRangeSlider from '../layouts/CategoryRangeSlider'

const AllProducts = () => {

	const [currentPage, setCurrentPage] = useState(1)
	const [price, setPrice] = useState([0, 5000])

	let { keyword } = useParams()

	const dispatch = useDispatch()
	const { loading, products, error, productCount, resultsPerPage, filteredProductsCount } = useSelector((state) => state.products)

	let count = filteredProductsCount

	const setCurrentPageNumber = (e) => {
		setCurrentPage(e)
	}

	const sliderPriceHandler = (e, newPrice) => {
		setPrice(newPrice)
	}

	useEffect(() => {
		if (error) {
			return swal('Error', error, 'error', { button: 'Close', dangerMode: true })
		}
		dispatch(getAllProducts(keyword, currentPage, price))
	}, [dispatch, keyword, error, currentPage, price])

	return (
		<>
			<>
				{loading ? <Spinner /> : <div className="AllProducts container my-5" id='AllProducts'>
					<div className="row filter-container">
						<div className="col-md-6">
							<PriceRangeSlider price={price} sliderPriceHandler={sliderPriceHandler} />
						</div>
						<div className="col-md-6">
							<CategoryRangeSlider price={price} sliderPriceHandler={sliderPriceHandler} />
						</div>
					</div>

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
									stock={product.stock}
								/>
							})
						}
					</div>

					{!(resultsPerPage >= count) && <div className="pagination-container">
						<Pagination
							activePage={currentPage}
							itemsCountPerPage={resultsPerPage}
							totalItemsCount={productCount}
							onChange={setCurrentPageNumber}
							nextPageText={<FcNext />}
							prevPageText={<FcPrevious />}
							firstPageText={<BiFirstPage />}
							lastPageText={<BiLastPage />}
							itemClass='page-item'
							linkClass='page-link'
							activeClass='pageItemActive'
							activeLinkClass='pageLinkActive'
						/>
					</div>}
				</div>}
			</>
		</>
	)
}

export default AllProducts