import React from 'react'
import FunctionalKamal from './FunctionalKamal'

function FunctionalHello(props) {
  return (
    <div>
        {props.name} {/*first task using functional*/}
        <FunctionalKamal username={props.name}/> {/*second task using fuctional*/}
    </div>
  )
}

export default FunctionalHello