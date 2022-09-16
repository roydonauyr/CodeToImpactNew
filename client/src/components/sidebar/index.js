import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import './index.css'
import ProfilePic from '../../assets/gic-logo.png'
import { panels } from './panels'

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
        onClick={showSidebar}
      >
        <ul className="nav-menu-items">
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
              <div className="profile-name">name</div>
            </div>
          </li>
          <div className="line" />
          <li className="module">
            <div className="title">Module</div>
            <ul>
              {panels.map((item) => (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <div className="line" />
        </ul>
      </button>
    </>
  )
}

export default Sidebar
