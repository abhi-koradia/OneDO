import React from 'react'
import './tasks-table.scss'
import ReactDOM from 'react-dom'
import DroppableArea from '../../components/droppable-area/droppable-area'

class TasksTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask() {
    const createTaskPlace = document.querySelector('.droppable-area-items')
    ReactDOM.createPortal(<div>123</div>, createTaskPlace)
  }

  render() {
    const tableItems = [
      {
        id: 0,
        name: 'To Do',
        count: 0
      },
      {
        id: 1,
        name: 'In Progress',
        count: 0,
        content: ''
      },
      {
        id: 2,
        name: 'Done',
        count: 0
      }
    ]

    return (
      <main id="tasks-table">
        <div className="row g3">
          {tableItems.map((item) => (
            <DroppableArea
              key={item.id}
              name={item.name}
              count={item.count}
              content={item.content}
              addTask={this.addTask}
            />
          ))}
        </div>
      </main>
    )
  }
}

export default TasksTable
