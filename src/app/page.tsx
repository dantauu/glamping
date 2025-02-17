'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import style from './password.module.scss'

const Password = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()

	const validCredentials = {
		email: 'dantau',
		password: '5432122',
	}

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()

		if (
			email === validCredentials.email &&
			password === validCredentials.password
		) {
			router.push('/home')
		} else {
			setError('Ты не пройдёшь')
		}
	}

	return (
		<div className={style.authContainer}>
			<form onSubmit={handleLogin} className={style.authForm}>
				<h2>Авторизация</h2>

				<input
					type='text'
					placeholder='Name'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>

				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>

				{error && <div className={style.error}>{error}</div>}

				<button type='submit'>Войти</button>
			</form>
		</div>
	)
}

export default Password
