import React from 'react'
import './main.scss'
import SearchForm from '../../components/search-form/search-form'
import Task from '../../components/task/task'
import Alert from '../../components/alert/alert'
import { icons } from '../../modules/icons'
import ModalWindow from '../../components/modal-window/modal-window.jsx'
import Form from '../../components/form/form'
import Textarea from '../../components/textarea/textarea'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      alerts: [],
      modals: []
    }

    this.doneTask = this.doneTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.addTask = this.addTask.bind(this)
    this.openModal = this.openModal.bind(this)
    this.pushErrorAlert = this.pushErrorAlert.bind(this)
    this.deleteAlert = this.deleteAlert.bind(this)
    this.autoDeleteAlert = this.autoDeleteAlert.bind(this)
    this.deleteModal = this.deleteModal.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
  }

  addTask(task) {
    this.setState((state) => {
      let { tasks } = state
      tasks.push({
        id: tasks.length === 0 ? 0 : tasks.length,
        name: task,
        description: '',
        done: false
      })
      return tasks
    })
  }

  deleteAlert(id) {
    const index = this.state.alerts.map((alert) => alert.id).indexOf(id)
    this.setState((state) => {
      const { alerts } = state
      delete alerts[index]
      return alerts
    })
  }

  autoDeleteAlert(id) {
    // setTimeout(, 3000)
  }

  pushErrorAlert() {
    this.setState((state) => {
      const { alerts } = state
      alerts.push({
        id: alerts.length === 0 ? 0 : alerts.length,
        class: 'alert warning-alert',
        name: 'Input value is empty',
        href: icons.circleError
      })
      return alerts
    })
  }

  saveChanges(modal, id) {
    const index = this.state.tasks.map((task) => task.id).indexOf(id)
    const formValue = document.querySelector('.form-lg').value
    const textareaValue = document.querySelector('.textarea').value
    if (formValue === modal.name && textareaValue === modal.description) {
      this.setState((state) => {
        const { alerts } = state
        alerts.push({
          id: alerts.length === 0 ? 0 : alerts.length,
          class: 'alert error-alert',
          name: 'Nothing changed',
          href: icons.circleError
        })
        return alerts
      })
    } else {
      this.setState((state) => {
        const { tasks } = state
        tasks[index].name = formValue
        tasks[index].description = textareaValue
        return tasks
      })
      this.setState((state) => {
        const { alerts } = state
        alerts.push({
          id: alerts.length === 0 ? 0 : alerts.length,
          class: 'alert success-alert',
          name: 'Changes saved successfully',
          href: icons.circleCheck
        })
        return alerts
      })
      this.deleteModal(this.state.modals[index].id)
    }
  }

  openModal(id) {
    const index = this.state.tasks.map((task) => task.id).indexOf(id)
    this.setState((state) => {
      const { modals } = state
      modals.push({
        id: this.state.tasks[index].id,
        name: this.state.tasks[index].name,
        description: this.state.tasks[index].description
      })
      return modals
    })
  }

  deleteModal(id) {
    const index = this.state.modals.map((modal) => modal.id).indexOf(id)
    this.setState((state) => {
      const { modals } = state
      delete modals[index]
      return modals
    })
  }

  doneTask(id) {
    const index = this.state.tasks.map((task) => task.id).indexOf(id)
    this.setState((state) => {
      const { tasks } = state
      tasks[index].done = tasks[index].done !== true
      return tasks
    })
  }

  deleteTask(id) {
    const index = this.state.tasks.map((task) => task.id).indexOf(id)
    this.setState((state) => {
      const { tasks } = state
      delete tasks[index]
      return tasks
    })

    this.setState((state) => {
      const { alerts } = state
      alerts.push({
        id: alerts.length === 0 ? 0 : alerts.length,
        class: 'alert default-alert',
        name: 'Task has been deleted',
        href: icons.circleInformation
      })
      return alerts
    })
  }

  render() {
    const { modals } = this.state
    const { alerts } = this.state
    let { tasks } = this.state
    const activeTasks = tasks.filter((task) => !task.done)
    const doneTasks = tasks.filter((task) => task.done)

    return (
      <main id="todo" role="main">
        <div className="main-content top-space-md">
          <div className="search-block">
            <SearchForm
              addTask={this.addTask}
              pushAlert={this.pushErrorAlert}
            />
          </div>
          <div className="todo-items">
            {[...activeTasks, ...doneTasks].map((task) => (
              <Task
                key={task.id}
                task={task}
                doneTask={() => this.doneTask(task.id)}
                openModal={() => this.openModal(task.id)}
                deleteTask={() => this.deleteTask(task.id)}
              />
            ))}
            {alerts.map((alert) => (
              <Alert
                key={alert.id}
                class={alert.class}
                content={alert.name}
                href={alert.href}
                deleteAlert={() => this.deleteAlert(alert.id)}
                autoDeleteAlert={() => this.autoDeleteAlert(alert.id)}
              />
            ))}
            {modals.map((modal) => (
              <ModalWindow
                key={modal.id}
                title={modal.name}
                deleteModal={() => this.deleteModal(modal.id)}>
                <div className="modal-content">
                  <label className="col bottom-space-sm">
                    <p className="simple-text bottom-space-xs">Name:</p>
                    <Form
                      class="form-lg"
                      value={modal.name}
                      type="text"
                      placeholder="Name"
                    />
                  </label>
                  <label className="col">
                    <p className="simple-text bottom-space-xs">Description:</p>
                    <Textarea
                      class="textarea"
                      value={modal.description}
                      type="text"
                      placeholder="Description"
                    />
                  </label>
                </div>
                <div className="modal-btn-block">
                  <button
                    className="primary-btn-md"
                    onClick={() => this.saveChanges(modal, modal.id)}>
                    Save
                  </button>
                </div>
              </ModalWindow>
            ))}
          </div>
        </div>
      </main>
    )
  }
}

export default Main
