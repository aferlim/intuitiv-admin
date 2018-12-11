import React, { Component } from 'react'

import { connect } from 'react-redux'

import { changeMessage } from './action'


class Dashboard extends Component {
    constructor(props) {
        super(props)
      }

    changeValue(event) {
        console.log(this.props)

        this.props.changeMessage('maguila')
    }

    render() {

        return (<div>
            <h1>Dashboard test {this.props.message.text}</h1>
            <button onClick={this.changeValue.bind(this)}>Clique aqui</button>
        </div>)
    }
}

const mapStateToProps = state => ({
    message: state.dash
})

const mapDispatchToProps = dispatch => ({
    changeMessage: text => dispatch(changeMessage(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
