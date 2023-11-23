import React from 'react'
import CollectCard from './CollectCard'
import Carouselabc from './Carousel'

const TopCollector = () => {
  return (
        <>
        <h1>Top Collector collections</h1>
        <Carouselabc card1={<CollectCard img={'https://i.seadn.io/s/raw/files/492d884cb01e822b67b26169e0288d5a.png?auto=format&dpr=1&h=500'} name={'Looks Rare Infiltration'}/>}
        card3={<CollectCard  img={'https://i.seadn.io/s/raw/files/492d884cb01e822b67b26169e0288d5a.png?auto=format&dpr=1&h=500'} name={'Looks Rare Infiltration'}/>}
        card2={<CollectCard img={'https://i.seadn.io/s/raw/files/492d884cb01e822b67b26169e0288d5a.png?auto=format&dpr=1&h=500'} name={'Looks Rare Infiltration'} />}
        card4={<CollectCard img={'https://i.seadn.io/s/raw/files/492d884cb01e822b67b26169e0288d5a.png?auto=format&dpr=1&h=500'} name={'Looks Rare Infiltration'} />}
        card5={<CollectCard img={'https://i.seadn.io/s/raw/files/492d884cb01e822b67b26169e0288d5a.png?auto=format&dpr=1&h=500'} name={'Looks Rare Infiltration'} />}
        
        
        />
        </>
        )  
}

export default TopCollector