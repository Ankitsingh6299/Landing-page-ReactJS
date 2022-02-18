import React from 'react'
import './ThingsToDo.css';
function ThingsToDo() {
  return (<div className='ThingsToDo'>
      <h3 className='head'><center>What will you be able to do?</center></h3>
      <p><center>Here are just a few things you’ll be able to do with this skill.</center></p>
        <div className='picflex'>
            <div className='picflex1'>
                <img src='./img/pic1.png' className='pic1'></img>
                <h4 className='title1'>READ AND WRITE CODE</h4>
                <p className='content1'>Gain a basic understanding of web development languages by building real sites from scratch.</p>
            </div>
            <div className='picflex2'>
                <img src='./img/pic2.png' className='pic2'></img>
                <h4 className='title1'>CREATE YOUR OWN DESIGN</h4>
            <p className='content2'>Skip the website builders and design exactly what you want with your own layouts, colors, and even animation.</p>
            </div>
            <div className='picflex3'>
                <img src='./img/pic3.png' className='pic3'></img>
                <h4 className='title3' >LAUNCH YOUR WEBSITE</h4>
            <p className='content1'>When it’s time to make your idea real, you’ll be able to launch it online.</p>
            </div>
        </div>
  </div>
 
  )
}

export default ThingsToDo