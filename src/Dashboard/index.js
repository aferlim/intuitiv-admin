import React, { Component } from 'react'

import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { messages: [], displaying: false }
      }
    render(){
        return(<div><h1>Dashboard test</h1></div>)
    }
}

const mapStateToProps = state => ({
    messages: state.messages
  })

export default Dashboard
