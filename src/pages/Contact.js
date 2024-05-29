import React from 'react'
import Clients from '../Components/Clients'
import Contactpage from '../Components/Contactpage'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <div>
      <Helmet><title>Contact Us</title>
<meta name="description" content='Contact Heyday Prints, our dedicated customer support team are waiting for your enquiries'/>
<link rel="canonical" href="/contact"/>
</Helmet>
<Contactpage/>
      <Clients/>  
    </div>
  )
}

export default Contact