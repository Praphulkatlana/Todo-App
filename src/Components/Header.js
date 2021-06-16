import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div class="ui menu">
      <Link to="/" className="item">Home</Link>
      <Link to="/addnew" className="item">New Todo</Link>
      <Link to="/about" className="item">About</Link>
      </div>
    )
  }
}