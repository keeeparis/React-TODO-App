import { useEffect, useState } from "react";
import './styles/style.scss'
import { AuthContext } from './context/index'
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)

        if (localStorage.getItem('posts')) {
            setPosts(JSON.parse(localStorage.getItem('posts')))
        }
    }, [])

    return(
        <AuthContext.Provider value={{isAuth, setIsAuth, isLoading, posts, setPosts}}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
