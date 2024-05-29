import React from 'react'
import Aboutpage from '../Components/Aboutpage'
import { Helmet } from 'react-helmet-async'


const About = () => {
  return (
      
    <div>
    <Helmet>
    <title>About Us</title>
    <meta name='description' content='At Heyday Prints, we transform your visions into tangible reality through our state-of-the-art printing services.'/>
    <link rel="canonical" href="/about"/>
    
          </Helmet>
<Aboutpage/>

    </div>
  
  )
}

export default About