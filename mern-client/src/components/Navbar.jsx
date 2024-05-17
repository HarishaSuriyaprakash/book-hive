import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen,setMenuOpen] =useState(false);
    const [isSticky,setSticky] =useState(false);

    //toggle menu
    const toggleMenu =()=>{
        setMenuOpen(!isMenuOpen);
    }
  return (
    <div>Navbar</div>
  )
}

export default Navbar