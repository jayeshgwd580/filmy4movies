// import React from 'react'
// import Navbar from './mcomponents/navbar'
// import Btn from './mcomponents/Btn'
// import Scomponent from './mcomponents/Scomponent'

// export const ContextData = React.createContext()

// export const Home = () => {

//   const onClicke = function(){
//     console.log('It working')
//   }
//   const data = { name: "Click me", onClicke}

//   return (
//     <div>
//         <Navbar />
//         <div>
//           <ContextData.Provider value={data}>
//             <Btn/>
//           </ContextData.Provider>
//           <Scomponent />
//         </div>
//     </div>
//   )
// }



// ---------------------


// import React from 'react'
// import './btn.css'
// import { ContextData } from "../Home"

// export default function Btn() {
//     const data = React.useContext(ContextData)
//   return (
//     <div className='btn' onClick={data.onClicke}>{data.name}</div>
//   )
// }
