import React from 'react'
import './textarea.scss'

class Textarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <textarea
        className="textarea"
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
      />
    )
  }
}

export default Textarea
