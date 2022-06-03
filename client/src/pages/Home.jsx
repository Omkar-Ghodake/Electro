import React from 'react'
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts'
import ImgCarousel from '../components/landingPage/ImgCarousel'
import '../css/pagesCSS/Home.css'
import MetaData from '../layouts/MetaData'

const Home = () => {

	return (
		<>
			<div className="Home">
				<MetaData title={'ELECTRO | Home'} />
				<ImgCarousel />
				<FeaturedProducts />
			</div>
		</>
	)
}

export default Home