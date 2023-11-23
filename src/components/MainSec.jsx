import React from 'react'
import Navbar from './Navbar'
import CardCarousel from './CardCarousel'

const MainSec = () => {
  return (
    <>

    <div className='main-card' style={{height:'85vh'}}>
    <div className="bg-image"></div>

    <div className="content"> 
    <Navbar/>
    <CardCarousel/>
    </div>
    </div>
    </>
  )
}

export default MainSec