import React from 'react'
import Img1 from '../../assets/images/home-carousel/img1.jpg'
import Img2 from '../../assets/images/home-carousel/img2.jpg'
import Img3 from '../../assets/images/home-carousel/img3.jpg'
import Img4 from '../../assets/images/home-carousel/img4.jpg'

const ImgCarousel = () => {

	return (
		<>
			<div className="Home-Img-Carousel">
				<div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
					<div className="carousel-inner" style={{ height: '85vh' }}>
						<div className="carousel-item active" data-bs-interval="3000">
							<img src={Img1} className="d-block home-carousel-img mx-auto" alt="..." />
							<div className="carousel-caption">
								<h1>IOT PROJECT COMPONENTS</h1>
								<p>Branded Components in Most Affordable Prices</p>
								<a href='#FeaturedProducts'>
									<button className='carrousel-scroll-btn trans-2'>See Products</button>
								</a>
							</div>
						</div>
						<div className="carousel-item" data-bs-interval="3000">
							<img src={Img2} className="d-block home-carousel-img mx-auto" alt="..." />
							<div className="carousel-caption">
								<h1>POWER SUPPLY AND BATTERIES</h1>
								<p>Get Batteries and Power Supplies with Great Accessories</p>
								<a href='#FeaturedProducts'>
									<button className='carrousel-scroll-btn trans-2'>See Products</button>
								</a>
							</div>
						</div>
						<div className="carousel-item" data-bs-interval="3000">
							<img src={Img3} className="d-block home-carousel-img mx-auto" alt="..." />
							<div className="carousel-caption">
								<h1>CIRCUIT BOARDS</h1>
								<p>All Kinds of Circuit Boards, Microcontrollers</p>
								<a href='#FeaturedProducts'>
									<button className='carrousel-scroll-btn trans-2'>See Products</button>
								</a>
							</div>
						</div>
						<div className="carousel-item" data-bs-interval="3000">
							<img src={Img4} className="d-block home-carousel-img mx-auto" alt="..." />
							<div className="carousel-caption">
								<h1>SENSORS</h1>
								<p>Get all Sorts of Sensors</p>
								<a href='#FeaturedProducts'>
									<button className='carrousel-scroll-btn trans-2'>See Products</button>
								</a>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</>
	)
}

export default ImgCarousel