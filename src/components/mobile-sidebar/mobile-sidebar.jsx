import React from 'react'
import './mobile-sidebar.scss'
import { sidebarElements } from '../../modules/sidebar-elements'
import { NavLink } from 'react-router-dom'
import IconBtn from '../icon-btn/icon-btn'

function MobileSidebar(props) {
  return (
    <header className="mobile-sidebar g1">
      {sidebarElements.map((item) => (
        <NavLink key={item.icon} to={item.route}>
          <IconBtn
            class="tertiary-icon-btn-lg"
            iconClass="icon-sm"
            key={item.icon}
            href={item.icon}
          />
        </NavLink>
      ))}
    </header>
  )
}

export default MobileSidebar
