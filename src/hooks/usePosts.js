import { useMemo } from 'react'

const useSortedPosts = (posts, sort) => {   
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [posts, sort])
    return sortedPosts
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    }, [sortedPosts, query])
    
    localStorage.setItem('posts', JSON.stringify(sortedAndSearchedPosts))
    return sortedAndSearchedPosts
}