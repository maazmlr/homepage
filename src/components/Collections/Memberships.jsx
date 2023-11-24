import React from 'react'
import Carouselabc from './Carousel'
import CollectCard from './CollectCard'
const Memberships = () => {
  return (
    <>
        <h1 style={{fontSize:'1.3rem', margin:'2rem 2rem',fontWeight:'900'}}>Top Collector collections</h1>
        <Carouselabc card1={<CollectCard img={'https://i.seadn.io/gae/uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8?auto=format&dpr=1&h=500'} name={'Proof Collective'}/>}
        card3={<CollectCard  img={'https://i.seadn.io/gae/uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8?auto=format&dpr=1&h=500'} name={'Proof Collective'}/>}
        card2={<CollectCard img={'https://i.seadn.io/gae/uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8?auto=format&dpr=1&h=500'} name={'Proof Collective'} />}
        card4={<CollectCard img={'https://i.seadn.io/gae/uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8?auto=format&dpr=1&h=500'} name={'Proof Collective'} />}
        card5={<CollectCard img={'https://i.seadn.io/gae/uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8?auto=format&dpr=1&h=500'} name={'Proof Collective'} />}
        
        
        />
        </>
  )
}

export default Memberships