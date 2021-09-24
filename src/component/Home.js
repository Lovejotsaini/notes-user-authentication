import React from 'react'
import '../index.css'
import image from '../images/homebg.png'

const Home=(props)=>{

    return (
        <div>
            <img className="homebg" src={image} alt="background" />
            
        </div>
    )
}

export default Home