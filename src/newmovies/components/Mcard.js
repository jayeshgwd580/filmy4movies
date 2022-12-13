import React from 'react'
import { useNavigate } from 'react-router-dom'
import './firstslider.css'


export default function Mcard(props) {
  const navigation = useNavigate()
  return (
    <div className='slider-container'>
        <div className='card' id={props.key} onClick={() =>{
          navigation(`/movie/${props.id}`)
        }}>
            <img src={'../images/' + props.img} alt={props.img}/>
            <div className='likes'>{props.likes} Likes</div>
            <h3 className=''>{props.title}{props.key}</h3>
            <p>{props.category}</p>
        </div>
    </div>
  )
}

export function Ccard(props) {
  return (
    <div className='slider-container1' style={{ width: 225, height: 225 }}>
        <img src={props.img} alt="images"/>
    </div>
  )
}
