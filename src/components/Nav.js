import React from 'react'
import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <nav className="main-nav">
    <ul>
      <li><NavLink to='/search/motorcycles'>Motorcycles</NavLink></li>
      <li><NavLink to='/search/plants'>Plants</NavLink></li>
      <li><NavLink to='/search/computers'>Computers</NavLink></li>
    </ul>
  </nav>
  );
};

export default Nav