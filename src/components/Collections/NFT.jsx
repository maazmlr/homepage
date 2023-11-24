import React from 'react'
import Carouselabc from './Carousel'
import CollectCard from './CollectCard'

const NFT = () => {
  return (
    <>
    <h1 style={{fontSize:'1.3rem', margin:'2rem 2rem',fontWeight:'900'}}>NFT 101</h1>
    <Carouselabc card1={<CollectCard img={'https://opensea.io/static/images/learn-center//what-is-nft.png'} name={'What is an NFT'} cond={true}/> }
    card3={<CollectCard  img={'https://opensea.io/static/images/learn-center//what-is-nft.png'} name={'What is an NFT'} cond={true}/>}
    card2={<CollectCard img={'https://opensea.io/static/images/learn-center//what-is-nft.png'} name={'What is an NFT'} cond={true} />}
    card4={<CollectCard img={'https://opensea.io/static/images/learn-center//what-is-nft.png'} name={'What is an NFT'} cond={true} />}
    card5={<CollectCard img={'https://opensea.io/static/images/learn-center//what-is-nft.png'} name={'What is an NFT'}  />}
    
    
    />
    </>
  )
}

export default NFT