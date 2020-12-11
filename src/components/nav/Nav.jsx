import React, { Component } from 'react';
import "./navStyle.css";
import Hamburger from '../images/hamburger.png';
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="navigation">
                <img src={Logo} alt="logo"/>
                <section className="search-section">
                    <ion-icon className="nav-search-icon" name="search-sharp"></ion-icon>
                    <input type="text" className="nav-search" placeholder="Search"/>
                </section>

             <nav className="navigation-list">
                <img src={Hamburger} alt="hamburger-menu"/>
                <ul className="navs">
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/portfolio">Portfolio</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
                </ul>  
            </nav>

            </div>
            </React.Fragment>
        )
    }
}
