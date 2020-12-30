import React from 'react'
import Spin from './Spin.gif'
const Spinner = () => {
    return (
        <div>
            <img src={Spin} alt="Loading..."
             style={{width:"50px", height:"50px", margin:" 40px auto", display: "block"}}
            />
        </div>
    )
}

export default Spinner
