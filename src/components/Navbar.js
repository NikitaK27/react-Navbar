import React, { useState } from "react";

import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>W</span>allstreet
            
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li className="H1" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <AiIcons.AiFillHome />
              <NavLink to="/">Home</NavLink>
            </li>
            <li style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <FaIcons.FaCartPlus />
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <IoIcons.IoIosPaper />
              <NavLink to="/Reports">Reports</NavLink>
            </li>
            <li style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <IoIcons.IoMdHelpCircle />
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <IoIcons.IoMdHelpCircle />
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <FaIcons.FaCartPlus />
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <FaIcons.FaCartPlus />
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <FaIcons.FaCartPlus />
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <FaIcons.FaCartPlus />
              <NavLink to="/Products">Products</NavLink>
            </li>
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          
          
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
