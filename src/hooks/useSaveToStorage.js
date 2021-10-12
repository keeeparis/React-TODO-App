import { useMemo } from "react"

export const useSaveToStorage = (posts) => {
    useMemo(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])
}