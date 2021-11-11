import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <nav>
                        <Link className='me-3 text-' to='/creating'>Creat Todo</Link>
                        <Link className='text-' to='/viewing'>View Todo</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;