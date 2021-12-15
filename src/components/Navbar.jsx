import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import { MdDashboard, MdOutlineCalculate } from 'react-icons/md'
import { BsFileEarmarkBarGraph } from 'react-icons/bs'
import { SiTripadvisor } from 'react-icons/si'

export default function Navbar() {
	const loc = useLocation()

	if(loc.pathname.includes('login') || loc.pathname.includes('register')){
		return <></>
	}

	let index = 1
	if(loc.pathname.includes('calculator')){
		index = 2
	}else if(loc.pathname.includes('tracking')){
		index = 3
	}else if(loc.pathname.includes('advisor')){
		index = 4
	}
	const leftIndicator = `calc((100% / 4) * ${index} - (100% / 8))`;
	const circleDisp = loc.pathname.includes('detail') ? 'none' : '';

	return (
		<>
			<div className='navContainer'>
				<div className='nav'>
					<div className='logo'>
						<Link to='/'>
							<img src='/logo_long.png' alt='BMI Logo'></img>
						</Link>
					</div>
					<div className='menus'>
						<Link to='/'>
							<div className='menu'>Dashboard</div>
						</Link>
						<Link to='/calculator'>
							<div className='menu'>BMI Calculator</div>
						</Link>
						<Link to='/tracking'>
							<div className='menu'>BMI Tracking</div>
						</Link>
						<Link to='/advisor'>
							<div className='menu'>Advisor</div>
						</Link>
					</div>
				</div>
			</div>
			<div className='navBottomContainer'>
				<span className='circle' style={{ left: leftIndicator, display: circleDisp }}></span>
				<div className='navBottom'>
					<Link to='/'>
						<div className={`menu ${loc.pathname == '/' ? 'active' : ''}`}>
							<MdDashboard />
							<span className='menuName'>Dashboard</span>
						</div>
					</Link>
					<Link to='/calculator'>
						<div className={`menu ${loc.pathname.includes('calculator') ? 'active' : ''}`}>
							<MdOutlineCalculate />
							<span className='menuName'>Calculator</span>
						</div>
					</Link>
					<Link to='/tracking'>
						<div className={`menu ${loc.pathname.includes('tracking') ? 'active' : ''}`}>
							<BsFileEarmarkBarGraph />
							<span className='menuName'>Tracking</span>
						</div>
					</Link>
					<Link to='/advisor'>
						<div className={`menu ${loc.pathname.includes('advisor') ? 'active' : ''}`}>
							<SiTripadvisor />
							<span className='menuName'>Advisor</span>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}
