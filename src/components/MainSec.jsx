import React from 'react'
import Navbar from './Navbar'
import CardCarousel from './CardCarousel'
import DrawerAppBar from './Header'

const MainSec = () => {
  return (
    <>

    <div className='main-card' style={{}}>
    <div className="bg-image"></div>
    

    <div className="content" style={{marginTop:'0rem'}}> 

    <DrawerAppBar/> 
  
    <Navbar/>
    <CardCarousel/>
    </div>
    </div>
    </>
  )
}

export default MainSec