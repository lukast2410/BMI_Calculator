import '../styles/Calculator.css';

export default function Calculator() {
	return (
		<div className='calculatorContent'>
			{/* isi disini ya untuk Calculator */}
			<h1>Calculate your Body Mass Index</h1>
			<div class='row'>
				<div className='col result'>
					<div className='value'>0.0</div>
					<div className='category'>
						Let's check <br />
						your Body
					</div>
				</div>
				<div className='col inputContainer'>
					<div className='inputGender'>
						<div className='male' id='male'>
							<img src='/icons8-male-100.png' alt='male-icon' />
						</div>
						<div className='female' id='female'>
							<img src='/icons8-female-100.png' alt='female-icon' />
						</div>
					</div>
					<div className='inputData'>
						<div className='heightInput'>
							<input
								type='range'
								min='0'
								max='250'
								value='160'
								id='height'
								oninput='updateCalculate()'
							/>
							<span id='heightValue'>160cm</span>
						</div>
						<div className='weightInput'>
							<input
								type='range'
								min='0'
								max='300'
								value='60'
								id='weight'
								oninput='updateCalculate()'
							/>
							<span id='weightValue'>60kg</span>
						</div>
						<button onclick='calculateBMI()'>Calculate</button>
					</div>
				</div>
			</div>
		</div>
	);
}
