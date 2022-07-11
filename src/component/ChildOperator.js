import React, { Component } from 'react'

export class ChildOperator extends Component{

  render() {
    var num1 = Number(this.props.first__num)
    var num2 = Number(this.props.last__num)
    
    if(this.props.operator === '+')
    return <div>{num1 + num2}</div>;
    if(this.props.operator === '-')
    return <div>{num1 - num2}</div>;
    if(this.props.operator === '*')
    return <div>{num1 * num2}</div>;
    if(this.props.operator === '/')
    return <div>{num1 / num2}</div>;
  }
}

export default ChildOperator