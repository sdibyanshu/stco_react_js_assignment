import React from 'react'
import styles from "../styles/Navbar.module.css";
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div id={styles.nav}>
        <div ><img src={logo} alt="" /></div>
        <div > <Link to="/"> Home </Link></div>
        <div > <Link to="/about"> About </Link></div>
      </div>
    </>
  )
}

export default Navbar