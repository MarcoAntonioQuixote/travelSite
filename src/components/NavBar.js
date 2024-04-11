

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/cityinfo'>
                <button>City Page</button>
            </Link>
        </div>
    )
}

export default NavBar