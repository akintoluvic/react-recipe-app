import React from 'react'

export const Button = ({ name, color }) => {
    return (
        <>
            <button type="button" className={color} >{name}</button>
        </>
    )
}
