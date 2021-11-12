import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <nav>
                        <NavLink className='me-3 text-' to='/creating'>Creat Todo</NavLink>
                        <NavLink className='text-' to='/viewing'>View Todo</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;