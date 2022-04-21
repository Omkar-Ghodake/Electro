import React from 'react'
import '../css/Navbar.css'

// styled components


const Navbar = () => {
	return (
		<>
			<nav className="navbar sticky-top navbar-expand-md p-0 navbar-light">
				<div className="container-fluid bg-transparent">
					<a className="navbar-brand" href="#">ELECTRO</a>
					<button className="navbar-toggler navbar-toggler-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<i className="fa-solid fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item py-4 current">
								<a className="nav-link  large-nav-link" href="#">Home</a>
							</li>
							<li className="nav-item py-4">
								<a className="nav-link  large-nav-link" href="#">Link</a>
							</li>
							<li className="nav-item py-4 dropdown">
								<a className="nav-link  dropdown-toggle large-nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Products
								</a>
								<ul className="dropdown-menu dropdown-menu-fit" aria-labelledby="navbarDropdown">
									<div className="row">
										<div className="col-lg-3">
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
										</div>
										<div className="col-lg-3">
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
										</div>
										<div className="col-lg-3">
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
										</div>
										<div className="col-lg-3">
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
										</div>
									</div>
								</ul>
							</li>
						</ul>

						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item py-4 small-nav-link">
								<a className="nav-link " href="#">Sign In</a>
							</li>
							<li className="nav-item py-4 me-3 small-nav-link">
								<a className="nav-link " href="#">Sign Up</a>
							</li>
							<li className="nav-item py-4 d-flex align-items-center nav-fa-icons">
								<button className="cart-btn position-relative">
									<i className="fa-solid fa-cart-shopping"></i>
									<span className="start-100 translate-middle badge rounded-pill cart-badge">
										5
									</span>
								</button>
							</li>
							<li className="px-2 d-flex align-items-center nav-fa-icons">
								<button className="navbar-search-btn" type="submit" data-bs-toggle="modal" data-bs-target="#navSearchModal">
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* <!-- Modal --> */}
			<div className="modal fade" id="navSearchModal" tabIndex="-1" aria-labelledby="navSearchModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body">
							<button type="button" className="ms-auto rounded-circle modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
								<i className="fa-solid fa-xmark"></i>
							</button>
							<h5 className="modal-title text-center" id="navSearchModalLabel">Search for Products</h5>
							<input className="navbar-search-input my-3 w-100 px-2 py-2 rounded-pill" type="text" placeholder="Search..." />
							<div className='search-modal-results'></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar