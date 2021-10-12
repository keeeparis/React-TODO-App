import { useContext, useState} from "react"
import { usePosts } from "../hooks/usePosts"
import Button from "../components/UI/button/Button"
import Modal from "../components/UI/modal/Modal"
import Filter from "../components/Filter"
import List from "../components/List"
import Form from "../components/Form"
import { AuthContext } from "../context"
import { useSaveToStorage } from "../hooks/useSaveToStorage"

export default function Posts() {
    const {posts, setPosts} = useContext(AuthContext)
    const [filter, setFilter] = useState({sort:'', query:''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useSaveToStorage(posts)

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
