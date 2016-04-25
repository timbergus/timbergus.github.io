import React from 'react'

export default class Home extends React.Component {

  static propTypes = {
    txt: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    txt: 'props message...'
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      txt: 'state message...'
    }
  }

  update () {
    setTimeout(() => {
      this.setState({
        txt: 'new state message :)'
      })
    }, 5000)
  }

  componentDidMount () {
    this.update()
  }

  render () {
    return (
      <div>
        <div className='big-title'>Timbergus Site Under Construction!</div>
        <p>This is a {this.props.txt}</p>
        <p>This is a {this.state.txt}</p>
        <p>Counter: { this.props.counter }</p>
        <button onClick={ this.props.incrementCounter }>+</button>
        <button onClick={ this.props.decrementCounter }>-</button>
      </div>
    )
  }
}
