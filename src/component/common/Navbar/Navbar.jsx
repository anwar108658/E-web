import React from 'react'
import style from './Navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className={`${style.navflex} container`}>
            <div className={style.logo}>
            <Link to="/"><h1>E-web</h1></Link>
                
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar