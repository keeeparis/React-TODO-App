import React, {useState} from 'react'
import Button from './UI/button/Button'
import Modal from './UI/modal/Modal'
import ChangeForm from './ChangeForm'

export default function Item({post, num, remove}) {
    const [modal, setModal] = useState(false)
    const [curPost, setCurPost] = useState({title: post.title, body: post.body, id:post.id})

    return (
        <div className='list--item'>
            <div>
                <h2>{num}. {curPost.title}</h2>
                <p>{curPost.body}</p>
            </div>
            <div>
                <Button
                    st={'purple'}
                    onClick={() => setModal(true)}
                >
                    Редактировать
                </Button>
                <Button 
                    onClick={() => remove(post)}
                    st={'slateblue'}
                >
                    Удалить
                </Button>
                <Modal visible={modal} setVisible={setModal}>
                    <ChangeForm post={curPost} setPost={setCurPost} setModal={setModal}/>
                </Modal>
            </div>
        </div>
    )
}
