import React from 'react'
import Button from './UI/button/Button'

export default function Item({post, num, remove}) {
    return (
        <div className='list--item'>
            <div>
                <h2>{num}. {post.title}</h2>
                <p>{post.body}</p>
            </div>
            <Button 
                onClick={() => remove(post)}
                st={'slateblue'}
            >
                Удалить
            </Button>
        </div>
    )
}
