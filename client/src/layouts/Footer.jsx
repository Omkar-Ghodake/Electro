import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'
import { SiInstagram } from 'react-icons/si'
import { IoMailOutline } from 'react-icons/io5'

const Footer = () => {
	return (
		<>
			<div className="Footer">
				<div className="container-fluid">
					<div className="footer-menu row text-light py-4">
						<div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
							<h1 className='footer-brand'>ELECTRO</h1>
						</div>
						<div className="col-md-4 col-sm-6">
							<ul className="footer-nav mx-auto mb-2 mb-lg-0">
								<li className="py-2">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="py-2">
									<Link className="nav-link" to="/">Link</Link>
								</li>
								<li className="py-2">
									<Link className="nav-link" to="/">Sign In</Link>
								</li>
								<li className="py-2">
									<Link className="nav-link" to="/">Sign Up</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-6 d-flex flex-column align-items-center justify-content-center">
							<h3>Follow Us On</h3>
							<ul className='footer-links mt-4'>
								<li>
									<Link className='nav-link p-0 py-2' to='/'><SiInstagram className='me-3' />Instagram</Link>
								</li>
								<li>
									<Link className='nav-link p-0 py-2' to='/'><IoMailOutline className='me-3' />Email</Link>
								</li>
							</ul>

						</div>
					</div>
					<div className="footer-copyright row text-light py-2">
						<div className='text-center'>
							© 2022 Copyright | ELECTRO
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer