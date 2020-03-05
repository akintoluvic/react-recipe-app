import React from 'react'

export const Button = ({ name, color }) => {
    return (
        <>
            <a href="/" className={color} >{name}</a>
        </>
    )
}
