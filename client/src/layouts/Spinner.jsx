import React from 'react'
import '../css/layoutsCSS/Spinner.css'
import iphoneSpinner from '../assets/gif/iphoneSpinner.gif'

const Spinner = () => {
	return (
		<>
			<div className="Spinner">
				<div className='iphoneSpinner'>
					<img src={iphoneSpinner} alt="Loading..." />
				</div>
			</div>
		</>
	)
}

export default Spinner