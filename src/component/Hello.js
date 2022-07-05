import React, { Component } from 'react'
import Kamal from './Kamal'


export class Hello extends Component {
  render() {
    return (
        <>
      <div>{this.props.name}</div>     {/*first task */}
      <Kamal username = {this.props.name}/>  {/*second task */}
      </>
    )
  }
}

export default Hello