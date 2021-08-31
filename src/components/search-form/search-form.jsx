import React from 'react'
import './search-form.scss'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.addTask = this.addTask.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      this.addTask()
    }
  }

  addTask() {
    if (this.state.value !== '') {
      this.props.addTask(this.state.value)
    } else {
      this.props.pushAlert()
    }
    this.setState({ value: '' })
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="search-block">
        <input
          type="text"
          id="search-input"
          className="search-input top-space-md"
          onKeyPress={this.handleEnter}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Write a task"
        />
        <button
          id="search-btn"
          className="search-btn"
          aria-label="Create task"
          onClick={this.addTask}>
          Create
        </button>
      </div>
    )
  }
}

export default SearchForm
