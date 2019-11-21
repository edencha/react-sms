import React, { Component } from 'react'
import autoBind from 'auto-bind'
import MessageForm from './components/MessageForm'

export default class extends Component {
  state = {
    bytes: 0,
    params: {
      type: 'SMS',
      text: '',
      cost: 10000
    }
  }

  onChangeText = e => {
    const { params = {} } = this.state
    const text = e.target.value
    const bytes = this.getTextSize(text)
    Object.assign(params, {
      type: bytes > 90 ? 'LMS' : 'SMS'
    })
    this.setState({
      bytes,
      params
    })
  }

  getTextSize = message => {
    let size = 0
    const matches = message.match(/./g) || []
    if (!matches) return size
    matches.filter(str => {
      var charCode = str.charCodeAt(0)
      size += charCode <= 0x00007f ? 1 : 2
    })
    return size
  }

  render = () => {
    return (
      <React.Fragment>
        <MessageForm {...this.props} {...this.state} proxy={this} />
      </React.Fragment>
    )
  }
}
