import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from './context'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './movie.css'
import Trailer from './components/Trailer';


export default function Movie() {

    const [theWindow, setTheWindow] = useState(0)
    
    const openTrailer = () =>{
        setTheWindow(1)
    }
    const closeTrailer = () =>{
        setTheWindow(0)
    }
 
    const { id } = useParams()
    const navigation = useNavigate()
    const data = useGlobalContext()

    return (

        <div className='mainCntr' style={{ backgroundColor: '#333' }}>
            <div className='mhoneCntr'>
                <div className='mcard-detail'>
                    <div className='m-image'>
                        <img src={"../images/" + data[id].imgSrc} alt={data[id].imgSrc} />
                        <div className='trailer' onClick={openTrailer}><PlayArrowIcon />Trailers</div>
                    </div>
                    <div className='mlikes'>{data[id].likes} Likes</div>
                </div>
                <div className='mcard-detail1'>
                    <div className='m-details'>
                        <h1>{data[id].name}</h1>
                        <h3>{data[id].likes} Likes<span>are interested</span></h3>
                        <div className='release-panel'>Releasing on 18 Nov, 2022 Mark interested to know when bookings open</div>
                        <p>2h 20m . {data[id].categories} . UA</p>
                        <button onClick={() => { navigation(`/thome`) }}>
                            <span>Book Ticket</span>
                            {/* <span>Download Movie</span> */}
                        </button>
                    </div>
                </div>
            </div>

            <Trailer close={theWindow} fun={closeTrailer}/>
            
        </div>
    )
}
