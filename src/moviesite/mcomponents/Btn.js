import React from 'react'
import './btn.css'
import { ContextData } from "../Home"

export default function Btn(props) {
    const data = React.useContext(ContextData)
  return (
    <div className='btn' onClick={data.onClicke}>{data.name}{props.val}</div>
  )
}
