import React from 'react'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const CategoryRangeSlider = (props) => {

	const { categories, sliderCategoryHandler } = props

	return (
		<>
			<Typography>Category</Typography>
			<ul className="category-container">
				{
					categories.map
				}
			</ul>
			{/* <Slider
				value={categories}
				onChange={sliderCategoryHandler}
				valueLabelDisplay='auto'
				aria-labelledby='range-slider'
				min={0}
				max={5000}
				step={100}
				marks
				color='primary'
				size='small'
			/> */}
		</>
	)
}

export default CategoryRangeSlider