import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__ul'>
                <li className='navbar__item'>
                    <a href="#projects">
                        PROJECTS
                    </a>
                </li>
                <li className='navbar__item'>
                    <a href='#contact'>
                        CONTACT
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }