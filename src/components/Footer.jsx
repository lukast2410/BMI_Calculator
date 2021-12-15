import { useLocation } from 'react-router-dom'
import '../styles/Footer.css'
import { RiInstagramFill } from 'react-icons/ri'

export default function Footer() {
	const loc = useLocation()

	if (loc.pathname.includes('login') || loc.pathname.includes('register')) {
		return <></>
	}

	return (
		<div className='footerContainer'>
			<div className='footer'>
				<img src='/logo_long_white.png' alt='Logo BMI'></img>
				<div className='copyright'>© Copyright 2021 BMI Calculator</div>
				<h2>Creators:</h2>
				<div className='creatorContainer'>
					<a href='https://www.instagram.com/lukast2410/' target='_blank'>
						<div className='creator'>
							<div className="creatorInsta"><RiInstagramFill /></div>
							<span>2301859820 - Lukas Tanto Kurniawan</span>
						</div>
					</a>
					<a href='https://www.instagram.com/nellyhelim/' target='_blank'>
						<div className='creator'>
							<div className="creatorInsta"><RiInstagramFill /></div>
							<span>2301846250 - Nelly Helim</span>
						</div>
					</a>
					<a href='https://instagram.com/iaziznr?utm_medium=copy_link' target='_blank'>
						<div className='creator'>
							<div className="creatorInsta"><RiInstagramFill /></div>
							<span>2301943365 - Isna Azis Nurohman</span>
						</div>
					</a>
					<a href='https://www.instagram.com/agnes.1407/' target='_blank'>
						<div className='creator'>
							<div className="creatorInsta"><RiInstagramFill /></div>
							<span>2301913671 - Agnes Youren Margaretha</span>
						</div>
					</a>
					<a href='https://www.instagram.com/sendo_tjiam/' target='_blank'>
						<div className='creator'>
							<div className="creatorInsta"><RiInstagramFill /></div>
							<span>2301870092 - Sendo Tjiamis</span>
						</div>
					</a>
					<a href='' target='_blank'>
						<div className='creator'>
							<div className="creatorInsta"><RiInstagramFill /></div>
							<span>2301859820 - Lukas Tanto Kurniawan</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
