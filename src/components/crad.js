import React from 'react'
import snake from "./image/snake.jpg"
import tiger from './image/tiger.png'
import "./crad.css"



function Crad() {
    return (
        <div className='card'>

<div className='crad-container'>
            <div className='imgae-crad'>
                <img src={snake} alt="snake"/>
            </div>

            <div className='card-name'>
                <h3>FIRST-WORK</h3>
            </div>
            <div className='card-body'>
                <h4>this work helps fashion</h4><br/>
                <p>The fashion designer is touched to do work at
                     a small scale and a large scale as well. 
                     Professionalism is what gets fashon the large scale. 
                    THIS WEBSITE IS HERE FOR YOU.</p>
            </div>
            <div className='card-btn'>
                <button>
                    <a href="home.js">Read More</a>
                </button>
            </div>

        </div>

        <div className='crad-container'>
            <div className='imgae-crad'>
                <img src={tiger} alt="snake"/>
            </div>

            <div className='card-name'>
                <h3>FIRST-WORK</h3>
            </div>
            <div className='card-body'>
                <h4>this work helps fashion</h4><br/>
                <p>The fashion designer is touched to do work at
                     a small scale and a large scale as well. 
                     Professionalism is what gets fashon the large scale. 
                    THIS WEBSITE IS HERE FOR YOU.</p>
            </div>
            <div className='card-btn'>
                <button>
                    <a href='#home.js'>Read More</a>
                </button>
            </div>

        </div>

        </div>
        
    )
} 

export default Crad
