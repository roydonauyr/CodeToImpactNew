import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Route } from 'react-router-dom'
import './index.css'
import ProfilePic from '../../Asset/gic-logo.png'
import { Panels } from './panels'

function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className="navbar">
        <div to="" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </div>
      </div>
      <button
        type="button"
        className={sidebar ? 'nav-menu active' : 'nav-menu'}
        onClick={() => {}}
        onKeyDown={showSidebar}
      >
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <div to="#" className="menu-bars">
              <AiOutlineClose />
            </div>
          </li>

          <li className="team">
            <div className="title">Team</div>
            <div className="team-content">
              <img className="team-pic" src={ProfilePic} alt="Team Pic" />
              <div className="team-info">
                <div className="group-text">Private Equity</div>
                <div className="count-text">18 team members</div>
              </div>
            </div>
          </li>

          <div className="line" />

          <li className="profile">
            <div className="title">Profile</div>
            <div className="profile-content">
              <img className="profile-pic" src={ProfilePic} alt="Profile Pic" />
              <div className="profile-name">User Name</div>
            </div>
          </li>
          <div className="line" />
          <li className="module">
            <div className="title">Module</div>
            {Panels.map((item) => (
              <li className={item.cName}>
                <Route to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Route>
              </li>
            ))}
          </li>
          <div className="line" />
        </ul>
      </button>
    </>
  )
}

export default Sidebar
