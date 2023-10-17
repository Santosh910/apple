import React, { useState } from 'react'
import './Slide.css'

const Slide = () => {
    const[counter,setCounter] = useState([<img className='slide' src="https://picsum.photos/536/354" alt="" />,
            <img className='slide' src="https://picsum.photos/537/354" alt="" />,
            <img className='slide' src="https://picsum.photos/538/354" alt="" />,
            <img className='slide' src="https://picsum.photos/539/354" alt="" />])
  return (
    <div>
        
        <div style={{width:"500px",height:"400px"}} className="main">
            <h1>counter :{counter}</h1>
        </div>
        {/* <div className="button-sld">
             <button onClick={() => setCounter([counter++])}>prev</button>
             <button>for</button>
        </div> */}
       

    </div>
  )
}

export default Slide