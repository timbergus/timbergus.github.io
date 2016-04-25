import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Route, hashHistory } from 'react-router'
import { incrementCounter, decrementCounter } from './store/counter'

import Home from './home/index.jsx'

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: bindActionCreators(incrementCounter, dispatch),
    decrementCounter: bindActionCreators(decrementCounter, dispatch)
  }
}

const NewHome = connect(mapStateToProps, mapDispatchToProps)(Home)

class HomeWrapper extends React.Component {

  render () {
    return (<NewHome txt='This is working just fine :)' />)
  }
};

export default class Routes extends React.Component {

  render () {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ HomeWrapper } />
      </Router>
    )
  }
}
