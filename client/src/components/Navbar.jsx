import React from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'
// import { images } from '../../constants/index'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);
  
  return(

  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      

     <p>  CRUP APP  </p>
      
    </div>
    {/* for bigger devices */}
    <ul className='app__navbar-links'>
        <li className='app__flex p-text'>
        <Link to='/login'> <button style={{padding:"5px 20px", fontSize:"1.2rem"}}>Login</button></Link>
        </li>
        <li className='app__flex p-text'>
        <Link to='/signup'><button style={{padding:"5px 20px", fontSize:"1.2rem"}}>Sign Up</button> </Link>
        </li>
    </ul>

    {/* for mobile devices */}

    <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
  </nav>

  )
      }

export default Navbar
