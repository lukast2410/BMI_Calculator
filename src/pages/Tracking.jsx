import '../styles/Tracking.css'
import { Line } from 'react-chartjs-2'
import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from 'chart.js'
import { useState } from 'react'

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Tooltip, Filler, Legend)

export default function Tracking() {
  const [data, setData] = useState([20, 21, 22, 21, 20.5])
  const [labels, setLabels] = useState(['1', '2', '3', '4', '5'])

	const addData = (e) => {
		e.preventDefault()

    const res = Math.round(e.target.result.value * 100) / 100

    setData([...data, res])
    setLabels([...labels, (labels.length + 1 + "")])
	}

	return (
		<>
			<header className='trackingHeader'>
				<h1>Track your Daily BMI</h1>
			</header>
			<div className='trackingContent'>
				<div className='trackingChart'>
					<div className='inputData'>
						<div className='inputHeader'>
							<h3>Input your BMI results</h3>
							<p>Get BMI results from BMI calculator</p>
						</div>
						<form action='' onSubmit={addData} className='inputs'>
							<div>
								<label htmlFor='result'>Result:</label>
								<input type='number' name='result' id='result' autoFocus required min={0} step='any' />
							</div>
							<button type='submit'>Submit</button>
						</form>
					</div>
					<div className='chart'>
						<Line
							data={{
								labels: labels,
								datasets: [
									{
										label: 'Daily Track',
										data: data,
										backgroundColor: '#4e46e569',
										borderColor: '#4f46e5',
										fill: true,
                    lineTension: 0.45
									},
								],
							}}
							options={{
								plugins: {
									filler: {
										propagate: false,
									},
                  legend: {
                    title: 'Daily Track',
                    display: true
                  }
								},
								interaction: {
									intersect: false,
								},
								pointBackgroundColor: '#fff',
								radius: 5,
                responsive: true,
								maintainAspectRatio: true,
							}}
						/>
					</div>
				</div>
				<div className='tracking'></div>
				<div className='bmiAdults'>
					<h1>BMI for adults (age 18 or older)</h1>
					<div className='bmiAdultsImage'>
						<img src='/assets/chart-bmi-adults.gif' alt='BMI Chart Adults' />
						<img src='/assets/table-bmi-adults.png' alt='BMI Table Adults' />
					</div>
				</div>
				<div className='bmiChildren'>
					<h1>BMI Table for children (age 2 - 20)</h1>
					<img src='/assets/table-bmi-children.png' alt='BMI Table Children' />
				</div>
			</div>
		</>
	)
}
