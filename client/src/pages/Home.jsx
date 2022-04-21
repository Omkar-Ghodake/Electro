import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import ImgCarousel from '../components/ImgCarousel'

const Home = () => {
	return (
		<div className="Home">
			<ImgCarousel />
			<FeaturedProducts />
		</div>
	)
}

export default Home