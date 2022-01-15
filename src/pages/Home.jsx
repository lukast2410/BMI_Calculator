import '../styles/Home.css'

export default function Home() {
	return (
		<main>
			<section className='glass'>
				<div className='dashboard'>
					<div className='user'>
						<h3>Hello User</h3>
						<p>Home</p>
					</div>
					<div className='links'>
						<div className='link'>
							<h2>Calculator</h2>
						</div>
						<div className='link'>
							<h2>Advisor</h2>
						</div>
						<div className='link'>
							<h2>Advisor Detail</h2>
						</div>
						<div className='link'>
							<h2>Tracking</h2>
						</div>
					</div>
					<div className='product'>
						<h2> BMI Calculator</h2>
					</div>
				</div>
				<div className='info'>
					<div className='state'>
						<h1>INDEKS MASSA TUBUH (IMT)</h1>
						<p>
							Indeks Massa Tubuh (IMT) adalah salah satu cara untuk mengetahui rentang berat badan ideal Anda
							dan memprediksi seberapa besar risiko gangguan kesehatan Anda. Metode ini digunakan untuk
							menentukan berat badan yang sehat berdasarkan berat dan tinggi badan.
						</p>
					</div>
					<div className='cards'>
						<div className='card'>
							<div className='card-info'>
								<h2>Kurang Berat Badan</h2>
							</div>
							<h2 className='percentage'>18.5</h2>
						</div>
						<div className='card'>
							<div className='card-info'>
								<h2>Normal Berat Badan</h2>
							</div>
							<h2 className='percentage'>18.5-22.9</h2>
						</div>
						<div className='card'>
							<div className='card-info'>
								<h2>Kelebihan Berat Badan</h2>
							</div>
							<h2 className='percentage'>23-24.9</h2>
						</div>
						<div className='card'>
							<div className='card-info'>
								<h2>Obesitas Tingkat 1</h2>
							</div>
							<h2 className='percentage'>25-29.9</h2>
						</div>
						<div className='card'>
							<div className='card-info'>
								<h2>Obesitas Tingakt 2</h2>
							</div>
							<h2 className='percentage'>30</h2>
						</div>
					</div>
				</div>
			</section>
			<div className='circle1'></div>
			<div className='circle2'></div>
		</main>
	)
}
