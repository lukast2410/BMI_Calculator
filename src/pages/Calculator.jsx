import '../styles/Calculator.css';
import React, { useState } from 'react';

export default function Calculator() {
	const [weight, setWeight] = useState(60);
	const [height, setHeight] = useState(160);
	const [bmiResult, setBmiResult] = useState(0.0);
	const [bmiMsg, setBmiMsg] = useState('Health Body');

	const handleWeightValueChange = (event) => setWeight(event.target.value);
	const handleHeightValueChange = (event) => setHeight(event.target.value);

	const calculateBmi = () => {
		let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
		setBmiResult(bmi);
		if (bmi < 18.5) {
			setBmiMsg('Underweight');
		} else if (bmi >= 18.5 && bmi <= 24.9) {
			setBmiMsg('Normal Weight');
		} else if (bmi >= 25 && bmi <= 29.9) {
			setBmiMsg('Overweight');
		} else if (bmi >= 30) {
			setBmiMsg('Obesity');
		}
	};

	return (
		<div className='calculatorContent'>
			<h1>Calculate your Body Mass Index</h1>
			<div className='row'>
				<div className='result'>
					<div className='value'>{bmiResult}</div>
					<div className='category'>{bmiMsg}</div>
				</div>
				<div className='inputContainer'>
					<div className='inputBox'>
						<div className='inputTitle'>BMI Counter</div>
						<div className='inputData'>
							<div className='heightInput'>
								<label htmlFor='height'>Your Height</label>
								<div className='heightInputSlider'>
									<input
										type='range'
										min='0'
										max='250'
										value={height}
										id='height'
										onChange={handleHeightValueChange}
									/>
									<span id='heightValue'>{`${height}cm`}</span>
								</div>
							</div>
							<div className='weightInput'>
								<label htmlFor='height'>Your Weight</label>
								<div className='heightInputSlider'>
									<input
										type='range'
										min='0'
										max='300'
										value={weight}
										id='weight'
										onChange={handleWeightValueChange}
									/>
									<span id='weightValue'>{`${weight}kg`}</span>
								</div>
							</div>
						</div>
					</div>
					<button className='calculateButton' onClick={calculateBmi}>Calculate</button>
				</div>
			</div>
		</div>
	);
}
