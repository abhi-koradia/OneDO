import React from 'react'
import './droppable-area.scss'
import Icon from '../icon/icon'
import { icons } from '../../modules/icons'

function DroppableArea(props) {
  return (
    <section className="droppable-area">
      <div className="droppable-area-name">
        <p className="simple-text">{props.name}</p>
        <span className="row g1">
          {props.count}
          <button className="droppable-area-count">
            <Icon class="icon-sm" href={icons.plus} />
          </button>
        </span>
      </div>
      <div className="droppable-area-items top-space-md">
        {props.content}
        <button className="secondary-btn-lg" onClick={props.addTask}>
          <Icon class="icon-sm" href={icons.delete} />
        </button>
      </div>
    </section>
  )
}

export default DroppableArea
