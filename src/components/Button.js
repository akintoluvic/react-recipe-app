import React from 'react'

export const Button = ({ name, color }) => {
    return (
        <>
            <a href="/" type="button" className={color} >{name}</a>
        </>
    )
}
