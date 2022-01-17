import { Link, useNavigate } from 'react-router-dom'
import '../styles/Register.css'

export default function Register() {
  let navigate = useNavigate()

	const register = (e) => {
    e.preventDefault()
		var email = e.target.email.value
		var pwd = e.target.psw.value
		var cpwd = e.target.confirm.value

		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

		if (email == '') {
			alert('Please enter your email id')
		} else if (!filter.test(email)) {
			alert('Invalid email')
		} else if (pwd == '') {
			alert('Please enter password')
		} else if (cpwd == '') {
			alert('Enter Confirm Password')
		} else if (pwd != cpwd) {
			alert('Password not Matched')
		} else if (cpwd.lenght < 8) {
			alert('Password minimum lenght is 8')
		} else if (cpwd.lenght > 13) {
			alert('Password max lenght is 13')
		} else {
			navigate('/')
		}
	}

	return (
		<div
			className='registerContent'
			style={{
				backgroundImage: `url('${process.env.PUBLIC_URL}/assets/login-background.jpg')`,
			}}
		>
			<div class='login-page'>
				<div class='form' onSubmit={register}>
					<form action='#' autocomplete='off' method='POST' class='register-form'>
						<input type='text' placeholder='Email Address' name='email' id='email' required />
						<input type='password' placeholder='Password' name='psw' id='psw' required />
						<input type='password' placeholder='Confirm Password' name='confirm' id='confirm' required />
						<button type='submit' class='btn-layer'>
							Register
						</button>
						<p class='message'>
							Already have an account? <Link to={'/login'}>Login</Link>.
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}
