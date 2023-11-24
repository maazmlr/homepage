import React from 'react'
import Carouselabc from './Carousel'
import CollectCard from './CollectCard'

const Gaming = () => {
  return (
    <>
    <h1 style={{fontSize:'1.3rem', margin:'2rem 2rem',fontWeight:'900'}}>Top Collector collections</h1>
    <Carouselabc card1={<CollectCard img={'https://i.seadn.io/s/raw/files/cb114428b014b10309237e440637277a.png?auto=format&dpr=1&h=500'} name={'Ape Polygon'}/>}
    card3={<CollectCard  img={'https://i.seadn.io/s/raw/files/cb114428b014b10309237e440637277a.png?auto=format&dpr=1&h=500'} name={'Ape Polygo'}/>}
    card2={<CollectCard img={'https://i.seadn.io/s/raw/files/cb114428b014b10309237e440637277a.png?auto=format&dpr=1&h=500'} name={'Ape Polygo'} />}
    card4={<CollectCard img={'https://i.seadn.io/s/raw/files/cb114428b014b10309237e440637277a.png?auto=format&dpr=1&h=500'} name={'Ape Polygo'} />}
    card5={<CollectCard img={'https://i.seadn.io/s/raw/files/cb114428b014b10309237e440637277a.png?auto=format&dpr=1&h=500'} name={'Ape Polygo'} />}
    
    
    />
    </>
  )
}

export default Gaming