import React from 'react'
import { Link } from 'react-router'

//import { style } from "../index.css"
var style = require('../index.css');

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName={style.bbbb}/>
  }
})