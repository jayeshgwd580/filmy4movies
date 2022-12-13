import React from 'react'

export default function Trailer(props) {

    if(props.close === 0){
        return <></>;
    }else{
        return (
            <div className="video-cntr" id='video-cntr' onClick={props.fun}>
                <div className='thevideo' id='thevideo'>
                    <iframe width="560" height="315" 
                    id='"myFrame"'
                    src="https://www.youtube.com/embed/XJrRrMCEmp8" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    allowTransparency="false"></iframe>
                    {/* <div className='iframe-overflow'></div> */}
                </div>
            </div>
  )
    }
  
}
