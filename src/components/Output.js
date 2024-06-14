import React from 'react'
import OutputRow from "./OutputRaw";

export default function Output(props) {
  return (
    <div>
      <OutputRow value={props.result} textSize={{fontSize: '20px'}}/>
        <OutputRow value={props.user} />
    
    </div>
  )
}
