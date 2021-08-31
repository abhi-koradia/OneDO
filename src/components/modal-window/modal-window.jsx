import React from 'react'
import './modal-window.scss'
import IconBtn from '../icon-btn/icon-btn'
import { icons } from '../../modules/icons'
import Form from '../form/form'

function ModalWindow({ children, ...props }) {
  return (
    <section className="modal">
      <div className="modal-window">
        <div className="modal-nav">
          <div />
          <p className="modal-text">{props.title}</p>
          <IconBtn
            class="tertiary-icon-btn-sm"
            iconClass="icon-xs"
            href={icons.close}
            onClick={props.deleteModal}
          />
        </div>
        {children}
      </div>
    </section>
  )
}

export default ModalWindow
