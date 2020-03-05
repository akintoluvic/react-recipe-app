import React from 'react';
import { Button } from './Button';

export const Nav = () => {
    return (
        <div className="top-nav">
            <h3>Ounje-wa</h3>
            <p>All recipes to take care of your apetite.</p>
            <span>
                <Button name="Login" color="btn btn-white" />
                <Button name="Sign Up" color="btn btn-black" />
            </span>
            
        </div>
    )
}
