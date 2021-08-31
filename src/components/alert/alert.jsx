import React, { useEffect } from 'react'
import Icon from '../icon/icon.jsx'
import IconBtn from '../icon-btn/icon-btn.jsx'
import { icons } from '../../modules/icons'
import './alert.scss'

function Alert(props) {
  useEffect(() => {
    props.autoDeleteAlert()
  })

  return (
    <dialog className={props.class}>
      <div className="row aic g1">
        <Icon class="icon-sm accent" href={props.href} />
        <p className="simple-text">{props.content}</p>
      </div>
      <IconBtn
        class="tertiary-icon-btn-xs"
        iconClass="icon-xxs"
        onClick={props.deleteAlert}
        href={icons.close}
      />
    </dialog>
  )
}

export default Alert
