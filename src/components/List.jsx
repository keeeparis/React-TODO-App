import React from 'react'
import Item from './Item'

export default function List({posts, remove}) {
    if (posts.length === 0) {
        return (
            <div className='list'>
                <h1>Посты не найдены.</h1>
            </div>
        )
    }

    return (
        <div className='list'>
            <h1>Список постов:</h1>
            {posts.map((post, index) => 
                <Item post={post} num={index+1} key={post.id} remove={remove}/>
            )}
        </div>
    )
}
