import React, { Component } from 'react'
import ChildOperator from './ChildOperator'

export class ParentOperator extends Component {
  render() {
    return (
      <div>
        <ChildOperator 
        operator='-'
        first__num = '100'
        last__num = '225'/>
      </div>
    )
  }
}

export default ParentOperator