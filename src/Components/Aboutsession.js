import React from 'react'
import { Link } from 'react-router-dom'


const Aboutsession = () => {
  return (
    <div className='about-section'>
        <h3>About Us</h3>
        <hr/>

        <p>
        At Heyday Prints, we transform your visions into tangible reality through our state-of-the-art printing services.<br/> Whether you're a small business looking to make a big impression or an individual with a creative project,<br/> our expert team is here to bring your ideas to fruition With cutting-edge technology and a commitment to quality, <br/>we ensure that every print job exceeds expectations...
        </p>
        <Link to='/about'>    <input type='button' value="learn more" name='learn'/></Link>
    </div>
  )
}

export default Aboutsession