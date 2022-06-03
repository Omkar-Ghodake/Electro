import React from 'react'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const RangeSlider = (props) => {

	const { price, sliderPriceHandler } = props

	return (
		<>
			<Typography>Price</Typography>
			<Slider
				value={price}
				onChange={sliderPriceHandler}
				valueLabelDisplay='auto'
				aria-labelledby='range-slider'
				min={0}
				max={5000}
				step={100}
				marks
				color='primary'
				size='small'
			/>
		</>
	)
}

export default RangeSlider