import React from 'react'
import '../css/FeatProd.css'
import Img1 from './images/feat-products/feat-prod-img1.jpg'

const FeaturedProducts = () => {
	return (
		<>
			<div className="container my-5">
				<h1 className="text-center">FEATURED PRODUCTS</h1>
				<div className="row my-4 g-4">
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="card">
							<div className="img-sec">
								<img src={Img1} className="card-img-top feat-prod-img" alt="..." />
								<div className="img-btns w-100 text-center d-flex flex-column">
									<button className="card-cart-btn text-white fs-4">
										<i className="fa-solid fa-cart-shopping"></i>
									</button>
									<button className="card-like-btn text-white fs-4">
										<i className="fa-solid fa-heart"></i>
									</button>
								</div>
							</div>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="card">
							<img src={Img1} className="card-img-top feat-prod-img" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="card">
							<img src={Img1} className="card-img-top feat-prod-img" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="card">
							<img src={Img1} className="card-img-top feat-prod-img" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="card">
							<img src={Img1} className="card-img-top feat-prod-img" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="card">
							<img src={Img1} className="card-img-top feat-prod-img" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="card">
							<img src={Img1} className="card-img-top feat-prod-img" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="card">
							<img src={Img1} className="card-img-top feat-prod-img" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FeaturedProducts