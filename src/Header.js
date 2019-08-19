import React from 'react'
import Logo from "./images/logo.png"
import HeadImg from "./images/h-img.png"

function Header() {
    const Brand = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px'
    }
    const HeaderImg = {
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <>
        <span style={Brand}>
            <img src={Logo} height="30px" width="30px" /><h3 >Recipe App</h3>
        </span>
        <span style={HeaderImg}>
            <img src={HeadImg} height="250px" width="" ></img>
        </span>
        
        
        </>
    )
}

export default Header


