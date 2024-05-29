import React from 'react'
import Mainheader from '../Components/Mainheader';
import About from '../Components/Aboutsession';
import Trending from '../Components/Trending';
import Bestsellers from '../Components/Bestsellers';
import Clients from '../Components/Clients';
import Whyus from '../Components/Whyus';



const Home = () => {
  return (
    <div>
<Mainheader/>
<About/>
<Whyus/>
<Trending/>
<Bestsellers/>
<Clients/>



    </div>
  )
}

export default Home