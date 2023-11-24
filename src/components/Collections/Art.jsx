import React from 'react'
import Carouselabc from './Carousel'
import CollectCard from './CollectCard'


const Art = () => {
    return (
        <>
        <h1 style={{fontSize:'1.3rem', margin:'2rem 2rem',fontWeight:'900'}}>Top Collector collections</h1>
        <Carouselabc card1={<CollectCard img={'https://i.seadn.io/gcs/files/ad1e0678638ae7ae9c7eb4ef88c3f409.png?auto=format&dpr=1&h=500'} name={'Parallel Alphan'}/>}
        card3={<CollectCard  img={'https://i.seadn.io/gcs/files/ad1e0678638ae7ae9c7eb4ef88c3f409.png?auto=format&dpr=1&h=500'} name={'Parallel Alpha'}/>}
        card2={<CollectCard img={'https://i.seadn.io/gcs/files/ad1e0678638ae7ae9c7eb4ef88c3f409.png?auto=format&dpr=1&h=500'} name={'Parallel Alpha'} />}
        card4={<CollectCard img={'https://i.seadn.io/gcs/files/ad1e0678638ae7ae9c7eb4ef88c3f409.png?auto=format&dpr=1&h=500'} name={'Parallel Alpha'} />}
        card5={<CollectCard img={'https://i.seadn.io/gcs/files/ad1e0678638ae7ae9c7eb4ef88c3f409.png?auto=format&dpr=1&h=500'} name={'Parallel Alpha'} />}
        
        
        />
        </>
        )  
}

export default Art