import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to='/'>HOME</Link>
            <Link to='/project/create'>CREATE PROJECT</Link>
            <Link to='/login'>LOGIN</Link>
        </nav>
    );
}

export default Nav;