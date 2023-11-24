import React from 'react'
import CollectCard from './CollectCard'
import Carouselabc from './Carousel'

const Notable = () => {
  return (
    <>
    <h1 style={{fontSize:'1.3rem', margin:'2rem 2rem',fontWeight:'900'}}>Notable collections</h1>
    <Carouselabc card1={<CollectCard img={'https://i.seadn.io/s/raw/files/947fef6d9f4fcd0db62d398150ff99f7.png?auto=format&dpr=1&h=500&fr=1'} name={'captain & company'}/>}
    card3={<CollectCard  img={'https://i.seadn.io/s/raw/files/947fef6d9f4fcd0db62d398150ff99f7.png?auto=format&dpr=1&h=500&fr=1'} name={'captain & company'}/>}
    card2={<CollectCard img={'https://i.seadn.io/s/raw/files/947fef6d9f4fcd0db62d398150ff99f7.png?auto=format&dpr=1&h=500&fr=1'} name={'captain & company'} />}
    card4={<CollectCard img={'https://i.seadn.io/s/raw/files/947fef6d9f4fcd0db62d398150ff99f7.png?auto=format&dpr=1&h=500&fr=1'} name={'captain & company'} />}
    card5={<CollectCard img={'https://i.seadn.io/s/raw/files/947fef6d9f4fcd0db62d398150ff99f7.png?auto=format&dpr=1&h=500&fr=1'} name={'captain & company'} />}
    
    
    />
    </>
    )
}

export default Notable