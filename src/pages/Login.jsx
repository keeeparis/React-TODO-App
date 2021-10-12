import React, { useContext } from 'react'
import Button from '../components/UI/button/Button'
import Input from '../components/UI/input/Input'
import { AuthContext } from '../context'

export default function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = () => {
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div className='loginForm'>
            <h3>Введите Ваши логин и пароль:</h3>
            <Input placeholder='Введите ник'/>
            <Input placeholder='Введите пароль'/>
            <Button onClick={login}>Отправить</Button>
        </div>
    )
}
