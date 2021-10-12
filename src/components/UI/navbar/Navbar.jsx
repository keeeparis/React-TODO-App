import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import Button from '../button/Button'

export default function Navbar() {
    const {setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <Button onClick={logout}>Выйти</Button>
            <div className='navbar--links'>
                <Link to='/about'><Button>О нас</Button></Link>
                <Link to='/posts'><Button>Посты</Button></Link>
            </div>
        </div>
    )
}
