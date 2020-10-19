import React from 'react'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import './Nav.css'
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
    accountMenuToggler();
  };

    const menuToggler = () => {
        document.getElementById("main-menu").classList.toggle("menuToggle");
    };

    const accountMenuToggler = () => {
        document.getElementById("account-menu").classList.toggle("nav__accountMenuToggle");        
    };

    return (
        <div className="nav">
           <div className="nav__container">
               <Link to='/'>
                    <img className="nav__logo" src="/logo.png" alt=""/>
               </Link>
               <div className="nav__menu">
                   <div className="nav__menuMain" id="main-menu">
                        <p className="nav__menuMainItem">Mens</p>
                        <p className="nav__menuMainItem">Womens</p>
                        <p className="nav__menuMainItem">Shoes</p>
                        <p className="nav__menuMainItem">Jeans</p>
                        <p className="nav__menuMainItem">Jumpers</p>
                        <p className="nav__menuMainItem">Shirts</p>
                        <p className="nav__menuMainItem">Jackets</p>
                        <p className="nav__menuMainItem"><strong>SALE!</strong></p>
                   </div>
                   <div className="nav__menuAccount">

                 
                      

                       <div className="nav__accountMenu">
                           <PersonIcon  onClick={accountMenuToggler} />
                            <div className="account-menu" id="account-menu">
                            
                                <Link to={!user && '/login'}>
                                    <p onClick={handleAuthenticaton}>{user ? 'Sign Out' : 'Sign In'}</p>
                                </Link>
                                <Link to='/orders'>
                                    <p onClick={accountMenuToggler}>My Orders</p>
                                </Link>
                           </div>
                       </div>


                        
                        <Link to="/basket">
                            <p className="nav__basket">
                            <ShoppingBasketIcon className="nav__menuAccountItem" />
                            <span>{basket?.length}</span>
                            </p>
                        </Link>

                        <p onClick={menuToggler} className="nav__mobileMenuIcon" id="menu-toggle"> <MenuIcon /></p>          
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Nav
