import React from 'react'
import './mobile-navbar.scss'
import Icon from '../icon/icon'
import { icons } from '../../modules/icons'
import IconBtn from '../icon-btn/icon-btn'
import logo from '../sidebar/yellow-icon.jpg'

function MobileNavbar(props) {
  return (
    <nav className="mobile-navbar">
      <span className="row g1">
        <img class="icon-lg" src={logo} />
        <h3 className="mobile-heading">OneDO</h3>
      </span>
      <IconBtn
        class="tertiary-icon-btn-sm"
        href={document.className === 'dark' ? icons.moon : icons.sun}
        onClick={props.changeTheme}
        iconClass="icon-sm"
      />
    </nav>
  )
}

export default MobileNavbar
