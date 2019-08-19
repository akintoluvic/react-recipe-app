import React from 'react'
import Logo from "./images/logo.png"
import HeadImg from "./images/h-img.png"

function Header() {
    const brand = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20px'
    }
    const headerImg = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px'
    }
    const brandNAme = {
        marginLeft: '10px',
        fontFamily: 'Work Sans'
    }
    return (
        <>
        
        <span style={headerImg}>
            <img src={HeadImg} height="250px" width="" ></img>
        </span>
        <span style={brand}>
            <img src={Logo} height="35px" width="35px" /><h2 style={brandNAme}>Recipe App</h2>
        </span>
        
        
        </>
    )
}

export default Header


