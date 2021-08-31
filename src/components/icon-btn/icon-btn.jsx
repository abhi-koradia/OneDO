import React from 'react'
import Icon from '../icon/icon.jsx'
import './icon-btn.scss'

function IconBtn(props) {
  return (
    <button
      className={props.class}
      aria-label={props.label}
      onClick={props.onClick}>
      <Icon class={props.iconClass} href={props.href} />
    </button>
  )
}

export default IconBtn
