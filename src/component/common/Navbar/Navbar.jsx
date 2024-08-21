import React, { useState } from 'react'
import style from './Navbar.module.css'
import icon from '../../../Image/icon1.png';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [toggel,setToggel] = useState(false);
    const toggelHandler = () => {
        setToggel(!toggel)
    }
  return (
    <header>
        <div className={`${style.navflex} container ${toggel ? style.trueIcon:style.navflex}`}>
            <div className={style.logo}>
            <Link to="/"><h1>E-web</h1></Link>
                
            </div>
            <nav>
                <img src={icon} className={style.icon} onClick={toggelHandler} alt="" />
                <ul className={style.trueIcon}>
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