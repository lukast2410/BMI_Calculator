import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
  let navigate = useNavigate()

  const submitLogin = (e) => {
    e.preventDefault();
    const username = e.target.uname.value;
    const password = e.target.psw.value;

    if (username == '' || password == '') {
      alert('Please input password and username.');
    } else {
      navigate('/')
    }
  }

	return (
		<div
			className='loginContent'
			style={{
				backgroundImage: `url('${process.env.PUBLIC_URL}/assets/login-background.jpg')`,
			}}
		>
			<div class='login-page'>
				<div class='form'>
					<form class='login-form' onSubmit={submitLogin}>
						<input type='text' placeholder='Username' name='uname' />
						<input type='password' placeholder='Password' name='psw' />
						<button type='submit' class='btn-layer'>
							Login
						</button>
						<p class='message'>
							Not Registered?{' '}
							<Link to='/register'>
                Register
							</Link>.
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}
