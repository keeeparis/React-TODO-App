import React, { useContext } from 'react'
import Input from './UI/input/Input'
import Button from './UI/button/Button'
import { AuthContext } from '../context'

export default function ChangeForm({post, setPost, setModal}) {
    const {posts, setPosts} = useContext(AuthContext)

    const ChangeCurrentPost = (e) => {
        e.preventDefault()
        setModal(false)
        setPosts(posts.map(p => (p.id === post.id) ? post : p ))
    }

    return (
        <form className='postForm'>
            <Input 
                value={post.title} 
                type='text' 
                placeholder='Введите название'
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <Input 
                value={post.body}
                type='text' 
                placeholder='Введите текст'
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <Button onClick={ChangeCurrentPost}>Редактировать</Button>
        </form>
    )
}
