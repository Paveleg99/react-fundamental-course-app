import React from 'react'
import MyInput from '../components/UI/input/MyInput'

const Login = () => {
  return (
	<div>
		<h1>Страница авторизации</h1>
		<form >
			<MyInput type="text" placeholder="Введите логин"/>
			<MyInput type="password" placeholder="Введите пароль"/>
		</form>
	</div>
  )
}

export default Login	