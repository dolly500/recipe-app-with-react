import { Link, useLocation } from 'react-router-dom';
import React from 'react'
import {useState} from 'react';
import Sidebar from './Sidebar';
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const location = useLocation()

  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList
    },
    {
      name: "Settings",
      path: "/settings", 
      icon: faCog
    }
  ]

  function closeSideBar(){
    setShowSidebar(false)
  }
  return (
    <>
        <div className="navbar container">
        <Link to ="/" className="logo">F<span>oo</span>dy Hub</Link>
        <div className="nav-links">
            { links.map(link => (
              <Link to={link.path} key={link.name} className={location.pathname === link.path ? "logo active" : "logo"} >{link.name}</Link>
            ))}
            {/* <a href="#" className="active">Home</a>
            <a href="#">Recipes</a>
            <a href="#">Settings</a> */}
        </div>

        <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
    </div>

    { showSidebar && <Sidebar close ={closeSideBar} links={links} /> }
    </>
  )
}

