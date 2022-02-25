import React from 'react'
import './mobile.css';
function Mobile({isOpen,setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-cross-circle"></i>
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
            <a href='#about' >
            Home
            </a>
        </div>
        <div className='mobile-option'>
            <a href='#Learnpath'>
            Learning path
            </a>
        </div>
        <div className='mobile-option '>
            <a href='#ThingsToDo'>
            Blog
            </a>
        </div>
        <div className='mobile-option'>
            <a href='#LearnAndBuild'>
            Courses
            </a>
        </div>
        <div className='button1'>
            <button type='button'>Login</button>
        </div>
        <div className='button2'>
            <button type='button'>Sign Up</button>
        </div>
            </div>
            
        </div>
        
    )
    
}

export default Mobile
