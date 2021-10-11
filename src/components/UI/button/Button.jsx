import React from 'react'
import cl from './Button.module.scss'

export default function Button({children, st, ...props}) {
    return (
        <button {...props} className={[cl.button, cl[st]].join(' ')}>{children}</button>
    )
}
