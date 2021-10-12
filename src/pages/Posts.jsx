import { useState } from "react"
import { usePosts } from "../hooks/usePosts"
import Button from "../components/UI/button/Button"
import Modal from "../components/UI/modal/Modal"
import Filter from "../components/Filter"
import List from "../components/List"
import Form from "../components/Form"

export default function Posts() {
    const [posts, setPosts] = useState([
        {id: 111, title: 'Javascript', body: 'programLanguage I study and work with'},
        {id: 222, title: 'Python', body: 'I started it one year ago'},
        {id: 333, title: 'C++', body: 'Very scary I guess'},
    ])
    const [filter, setFilter] = useState({sort:'', query:''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [modal, setModal] = useState(false)
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(e => e.id !== post.id))
    }

    return(
        <div className='App'>
            <Button onClick={() => {setModal(true)}}>Создать пост</Button>
            <Modal visible={modal} setVisible={setModal}>
                <Form create={createPost}/>
            </Modal>
            <Filter 
                filter={filter} 
                setFilter={setFilter} 
            />
            <List posts={sortedAndSearchedPosts} remove={removePost}/>
        </div>
    )
}
