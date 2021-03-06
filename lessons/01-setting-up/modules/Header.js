import React from 'react'

import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/" activeStyle={{ color: 'red' }}  activeClassName="active">HOME</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="bbbb">Repos</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})