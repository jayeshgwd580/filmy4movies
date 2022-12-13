import React from 'react'
import { useNavigate } from 'react-router-dom'
import './slider.css'


export default function Mcard(props) {
  
  const navigation = useNavigate()
  return (
    <div className='slider-container'>
        <div className='card' id={props.key} onClick={() =>{
          navigation(`/mhome/${props.id}`)
        }}>
            <img src={'../images/' + props.img} alt={props.img}/>
            <div className='likes'>{props.likes} Likes</div>
            <h3 className=''>{props.title}</h3>
            <p>{props.category}</p>
        </div>
    </div>
  )
}
