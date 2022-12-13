export default function Pcard(props) {
  return (
        <div className='pslide'  id={props.key}>
            <div className='pcard'>
                <div className='pimg'>
                    <img src={props.img} alt={props.img} />
                    {/* <h3> */}
                        {/* {props.premier} */}
                    {/* </h3> */}
                </div>
                <div className='pdetails'>
                    <h3>{props.name}</h3>
                    <span>{props.language}</span>
                </div>
            </div>
        </div>
  )
}
