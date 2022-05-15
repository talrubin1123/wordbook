import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'
import { userState } from '../../atom/userAtom'
import './Login.css'
import logo from '../../assets/favicon.png'

import {
	logInWithEmailAndPassword,
	signInWithGoogle,
	auth,
} from '../../firebase'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [user, loading, _] = useAuthState(auth)
	const [loggedUser, setUserState] = useRecoilState(userState)
	const history = useHistory()

	useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return
		}
	}, [user, loading])
	return (
		<div className='wrapper'>
			<img src={logo} className="logo" />
			<div className='login'>
				<div className='login__container'>
					<input
						type='text'
						className='login__textBox'
						value={email}
						onChange={e => setEmail(e.target.value!)}
						placeholder='E-mail Address'
					/>
					<input
						type='password'
						className='login__textBox'
						value={password}
						onChange={e => setPassword(e.target.value!)}
						placeholder='Password'
					/>
					<button
						className='login__btn'
						onClick={async () => {
							const user = await logInWithEmailAndPassword(email, password)
							setUserState(() => user)
							loggedUser && history.push('/')
						}}
					>
						Login
					</button>
					<button
						className='login__btn login__google'
						onClick={() => {
							setUserState(async () => await signInWithGoogle())
							loggedUser && history.push('/')
						}}
					>
						Login with Google
					</button>
					<div></div>
					<div>
						Don't have an account?{' '}
						<Link id='registerBtn' to='/register'>
							Register
						</Link>{' '}
						now.
					</div>
				</div>
			</div>
		</div>
	)
}
export default Login
