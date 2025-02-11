'use client'
import { useState } from 'react'
import React from 'react'
import { Slider } from 'antd'
import './slider-linear.scss'

const SliderLinear = () => {
  const [minPrice, setMinPrice] = useState(1000); 
  const [maxPrice, setMaxPrice] = useState(40000); 

  const handleSliderChange = (value: number[]) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Math.min(+e.target.value, maxPrice);
    setMinPrice(newMinPrice);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = Math.max(+e.target.value, minPrice); 
    setMaxPrice(newMaxPrice);
  };

  return (
		<>
			<div className='modalSearchSetWrapper'>
				<div className='sliderWrapper'>
					<Slider
						range
						defaultValue={[minPrice, maxPrice]}
						min={1000}
						max={40000}
						onChange={handleSliderChange}
					/>
				</div>
			</div>

			<div className='priceRange'>
				<div className='inputContainer'>
					<div className='inputWrapper'>
            <div className="inputOt">
              <p className="inputOtInner">
                от
              </p>
            </div>
            <div className="inputPrice">
						<div className=''>
							<input
								type='number'
								value={minPrice}
								onChange={handleMinChange} 
								className='priceInput'/>
						</div>
            <div className="inputPriceRuble">
              <p className="inputPriceRubleInner">
                р.
              </p>
            </div>
          </div>
					</div>

					<div className='inputWrapper'>
						<div className='inputDo'>
							<p className='inputDoInner'>до</p>
						</div>
						<div className=''>
							<input
								type='number'
								value={maxPrice}
								onChange={handleMaxChange} 
								className='priceInput'
							/>
						</div>
            <div className="inputPriceRuble">
              <p className="inputPriceRubleInner">
                р.
              </p>
            </div>
					</div>
				</div>
			</div>
		</>
	)
};

export default SliderLinear
