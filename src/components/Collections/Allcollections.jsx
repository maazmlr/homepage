import React from 'react'
import Art from './Art'
import TopCollector from './TopCollector'
import Gaming from './Gaming'
import NFT from './NFT'
import Memberships from './Memberships'
import Notable from './Notable'
import Explore from './Explore'
import SubSection from '../SubSection'

const Allcollections = () => {
  return (
    <div style={{marginLeft:'0rem',background:'light-black'}} >
          <SubSection/>
        <TopCollector/>
    
        
        <Art/>
        <Gaming/>
        <NFT/>
        <Memberships/>
        <Notable/>
        <Explore/>

    </div>
  )
}

export default Allcollections