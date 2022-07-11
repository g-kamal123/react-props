import React from 'react'

function FunctionalChild(props) {
  
    if(props.operator === '+')
    return <div>{props.first__num + props.last__num}</div>;
    if(props.operator === '-')
    return <div>{props.first__num - props.last__num}</div>;
    if(props.operator === '*')
    return <div>{props.first__num * props.last__num}</div>;
    if(this.props.operator === '/')
    return <div>{props.first__num / props.last__num}</div>;
}

export default FunctionalChild