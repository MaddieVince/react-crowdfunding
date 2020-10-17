import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to='/'>HOME</Link>
            <Link to='/project'>PROJECT</Link>
        </nav>
    );
}

export default Nav;