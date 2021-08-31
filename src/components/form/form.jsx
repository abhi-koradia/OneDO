import React from 'react'
import './form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <input
        className={this.props.class}
        type={this.props.type}
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
      />
    )
  }
}

export default Form
