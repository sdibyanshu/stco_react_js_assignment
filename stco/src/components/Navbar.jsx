import React from 'react'
import styles from "../styles/Navbar.module.css";
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <>
    <div>
        <div>  </div>

        <div id={styles.nav}>
        <div ><img src={logo} alt="" /></div>
        <div > <Link to="/"> Home </Link></div>
        <div > <Link to="/about"> About </Link></div>
        <div > <Link to="/cart"> <ShoppingCartIcon/> </Link></div>
      </div>
    </div>

     
    </>
  )
}

export default Navbar