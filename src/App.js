import { useEffect, useState } from "react";
import './styles/style.scss'
import { AuthContext } from './context/index'
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])

    return(
        <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
