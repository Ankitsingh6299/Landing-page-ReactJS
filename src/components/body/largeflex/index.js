import React from 'react'
import './largeflex.css';
function Large() {
  return (<div className='largeflex'>
      <div className='miniflex1'>
      <h4>Learning path</h4>
        <h1 className='title'>Be a FrontEnd Developer</h1>
        
        <p>Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, CSS, and JavaScript.</p>
        <div className='undertext'>
          <h5>Duration<br /><h6>3 Weeks</h6></h5>
          <h5 className='under2'>Projects<br /><h6>5 projects</h6></h5>
        </div>
      </div>
      <div className='miniflex2'>
          <h4>What Next?</h4>
          <h3>Modern Frontend Development <br /> (ReactJS)</h3>
          <h3>Modern Frontend Development <br /> (AngularJS)</h3>
          <h3>Modern Frontend Development <br /> (VueJS)</h3>
      </div>
  </div>
  )
}

export default Large