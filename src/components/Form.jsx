import { useState } from "react"
import Input from './UI/input/Input'
import Button from './UI/button/Button'

export default function Form({create}) {
    const [post, setPost] = useState({title:'', body:'', id:''})

    const addNewPost = (e) => {
        e.preventDefault()
        if (post.title === '' || post.body === '') {
            return
        }
        create({...post, id: Date.now()})
        setPost({title:'', body:''})
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
            <Button onClick={addNewPost}>Создать</Button>
        </form>
    )
}
