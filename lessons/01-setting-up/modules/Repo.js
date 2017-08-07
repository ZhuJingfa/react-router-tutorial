import React from 'react'
import Header from './Header'

export default React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})