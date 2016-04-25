import React from 'react'
import classNames from 'classnames'

export default class Home extends React.Component {

  static propTypes = {
    txt: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    txt: 'This is a props message...'
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      txt: 'state message...'
    }

    this.names = ['pepe', 'luis', 'juan']
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
        <div className={ classNames({ 'big-title': true }) }>Timbergus Site Under Construction!</div>
        <p>{ this.props.txt }</p>
        <p className={ classNames({ visible: this.props.counter === 5 }) }>This is a { this.state.txt }</p>
        <p>Counter: { this.props.counter }</p>
        <ul className='list'>{ this.names.map((name, index) => <li key={ `name${index}` }>This is { name }</li>) }</ul>
        <button onClick={ this.props.incrementCounter }>+</button>
        <button onClick={ this.props.decrementCounter }>-</button>
      </div>
    )
  }
}
