import React from 'react'
import FunctionalChild from './FunctionalChild'

function FunctionalParent() {
  return (
    <div>
        <div>
        <FunctionalChild
        operator='*'
        first__num = {100}
        last__num = {225}/>
      </div>
    </div>
  )
}

export default FunctionalParent