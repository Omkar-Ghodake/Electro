import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { RiShoppingCart2Line, RiSearch2Line } from 'react-icons/ri'
import { RiMenu4Fill } from 'react-icons/ri'
import Modal from './Modal'

// styled components


const Navbar = () => {

	return (
		<>
			<nav className="navbar sticky-top navbar-expand-md p-0 navbar-light">
				<div className="container-fluid bg-transparent">
					<Link className="navbar-brand" to="/">ELECTRO</Link>
					<button className="navbar-toggler navbar-toggler-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<RiMenu4Fill />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item py-4 current">
								<Link className="nav-link large-nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item py-4">
								<Link className="nav-link large-nav-link" to="/">Link</Link>
							</li>
							<li className="nav-item py-4 dropdown">
								<Link className="nav-link dropdown-toggle large-nav-link" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Products
								</Link>
								<ul className="dropdown-menu dropdown-menu-fit box-shadow-main" aria-labelledby="navbarDropdown">
									<div className="row">
										<div className="col-lg-3">
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
										</div>
										<div className="col-lg-3">
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
										</div>
										<div className="col-lg-3">
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
										</div>
										<div className="col-lg-3">
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
											<li><Link className="dropdown-item" to="/">Action</Link></li>
											<li><Link className="dropdown-item" to="/">Another action</Link></li>
										</div>
									</div>
								</ul>
							</li>
						</ul>

						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item py-4 small-nav-link">
								<Link className="nav-link" to="/">Sign In</Link>
							</li>
							<li className="nav-item py-4 me-3 small-nav-link">
								<Link className="nav-link" to="/">Sign Up</Link>
							</li>
							<li className="nav-item py-4 d-flex align-items-center nav-fa-icons">
								<button className="cart-btn position-relative p-0 m-0">
									<RiShoppingCart2Line />
									<span className="start-100 translate-middle badge rounded-pill cart-badge">
										5
									</span>
								</button>
							</li>
							<li className="px-2 d-flex align-items-center nav-fa-icons">
								<button className="navbar-search-btn p-0 m-0" type="submit" data-bs-toggle="modal" data-bs-target="#navSearchModal">
									<RiSearch2Line />
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* <!-- Modal --> */}

			<Modal
				id={'navSearchModal'}
				size={'lg'}
				body={
					<div>
						<h5 className="modal-title text-center" id="navSearchModalLabel">Search for Products</h5>
						<input className="navbar-search-input my-3 w-100 px-2 py-2 rounded-pill" type="text" placeholder="Search..." />
						<div className='search-modal-results'></div>
					</div>
				}
			/>
		</>
	)
}

export default Navbar