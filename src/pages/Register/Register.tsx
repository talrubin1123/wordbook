import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../atom/userAtom'
import { registerWithEmailAndPassword } from '../../firebase'
import './Register.css'

function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')

	const [loggedUser, setUserState] = useRecoilState(userState)

	const history = useHistory()
	const register = async () => {
		if (!name) alert('Please enter name')
		return await registerWithEmailAndPassword(name, email, password)
	}

	return (
		<div className='register'>
			<div className='register__container'>
				<input
					type='text'
					className='register__textBox'
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Full Name'
				/>
				<input
					type='text'
					className='register__textBox'
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='E-mail Address'
				/>
				<input
					type='password'
					className='register__textBox'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Password'
				/>
				<button
					className='register__btn'
					onClick={async () => {
						setUserState(await register())
						loggedUser && history.push('/')
					}}
				>
					Register
				</button>
				<div>
					Already have an account?{' '}
					<Link id='loginBtn' to='/login'>
						Login
					</Link>{' '}
					now.
				</div>
			</div>
		</div>
	)
}
export default Register
