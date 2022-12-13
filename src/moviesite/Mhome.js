import React from 'react'
import Navbar from './mcomponents/navbar'
import { useNavigate, useParams } from 'react-router-dom'
import './Home.css'

export default function Mhome() {

    let moviesData = [
        {   
            id: 1,
            name: "Black Adam",
            likes: "127K",
            categories: "Action/Fantacy/Sc-Fi",
            imgSrc: "black-adam.PNG"
        },
        {
            id: 2,
            name: "Doctor G",
            likes: "8k",
            categories: "Comedy/ Drama",
            imgSrc: "doctorG.PNG"
        },
        {
            id: 3,
            name: "Kantara (Hindi)",
            likes: "26k",
            categories: "Adventure/Drama/Thriller",
            imgSrc: "kantara.PNG"
        },
        {
            id: 4,
            name: "Vikram Vedha",
            likes: "60k",
            categories: "Action/Crime/Thriller",
            imgSrc: "vikramvedha.PNG"
        },
        {
            id: 5,
            name: "Ponniyin Selvan - Part 1",
            likes: "26k",
            categories: "Action/Adventure/Drama/Historical",
            imgSrc: "ps1.PNG"
        }
    ]

    const{ id } = useParams()
    const navigation = useNavigate()


     const name1 = parseInt(id)
     var specificValuesFromArray = moviesData.filter(obj => obj.id === name1);
     if(specificValuesFromArray.length === 0){
        console.log('result not found')
     }else{
        console.log(specificValuesFromArray[0].categories)
     }
     
  return (
    <>
        <Navbar />
        <div className='mainCntr' style={{backgroundColor: '#333'}}>
            <div className='mhoneCntr'>
                <div className='mcard-detail'>
                    <div className='m-image'>
                        <img src={"../images/"+specificValuesFromArray[0].imgSrc} alt={specificValuesFromArray[0].imgSrc}/>
                    </div>
                    <div className='mlikes'>{specificValuesFromArray[0].likes} Likes</div>
                </div>
                <div className='mcard-detail1'>
                    <div className='m-details'>
                        <h1>{specificValuesFromArray[0].name}</h1>
                        <h3>{specificValuesFromArray[0].likes} Likes<span>are interested</span></h3>
                        <div className='release-panel'>Releasing on 18 Nov, 2022 Mark interested to know when bookings open</div>
                        <p>2h 20m . {specificValuesFromArray[0].categories} . UA</p>
                        <button onClick={() =>{navigation(`/thome`)}}><span>Book Ticket</span></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
