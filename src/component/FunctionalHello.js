import React from 'react'
import FunctionalKamal from './FunctionalKamal'

function FunctionalHello(props) {
  return (
    <div>
        {props.name} {/*first task */}
        <FunctionalKamal username={props.name}/> {/*second task */}
    </div>
  )
}

export default FunctionalHello