import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import List from "./components/List";
import './styles/style.scss'
import { usePosts } from './hooks/usePosts'

function App() {
    const [posts, setPosts] = useState([
        {id: 111, title: 'Javascript', body: 'programLanguage I study and work with'},
        {id: 222, title: 'Python', body: 'I started it one year ago'},
        {id: 333, title: 'C++', body: 'Very scary I guess'},
    ])
    const [filter, setFilter] = useState({sort:'', query:''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(e => e.id !== post.id))
    }

    return(
        <div className='App'>
            <Form create={createPost}/>
            <Filter 
                filter={filter} 
                setFilter={setFilter} 
            />
            <List posts={sortedAndSearchedPosts} remove={removePost}/>
        </div>
    )
}

export default App;
