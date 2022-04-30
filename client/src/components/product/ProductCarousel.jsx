import React from 'react'
import Img1 from '../../assets/images/home-carousel/img1.jpg'
import Img2 from '../../assets/images/home-carousel/img2.jpg'
import Img3 from '../../assets/images/home-carousel/img3.jpg'
import Img4 from '../../assets/images/home-carousel/img4.jpg'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const ProductCarousel = () => {

	return (
		<>
			<div className="ProductCarousel">
				<div id="carouselExampleInterval" className="carousel slide my-auto" data-bs-ride="carousel">
					<div className="carousel-inner my-auto">
						<div className="carousel-item active my-auto" data-bs-interval="3000">
							<img src={Img1} className="d-block home-carousel-img rounded-3 mx-auto" alt="..." />
						</div>
						<div className="carousel-item my-auto" data-bs-interval="3000">
							<img src={Img2} className="d-block home-carousel-img rounded-3 mx-auto" alt="..." />
						</div>
						<div className="carousel-item my-auto" data-bs-interval="3000">
							<img src={Img3} className="d-block home-carousel-img rounded-3 mx-auto" alt="..." />
						</div>
						<div className="carousel-item my-auto" data-bs-interval="3000">
							<img src={Img4} className="d-block home-carousel-img rounded-3 mx-auto" alt="..." />
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
						<BsChevronLeft className='fs-1' />
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
						<BsChevronRight className='fs-1' />
					</button>
				</div>
			</div>
		</>
	)
}

export default ProductCarousel