import React from 'react'
import '../css/Loader.css'
import iphoneSpinner from '../assets/gif/iphoneSpinner.gif'

const Loader = () => {
	return (
		<>
			<div className='iphoneSpinner'>
				<img src={iphoneSpinner} alt="Loading..." />
			</div>
		</>
	)
}

export default Loader