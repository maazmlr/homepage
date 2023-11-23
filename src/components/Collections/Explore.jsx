import React from 'react'
import Carouselabc from './Carousel'
import CollectCard from './CollectCard'

const Explore = () => {
  return (
    <>
    <h1>Explore Categories</h1>
    <Carouselabc card1={<CollectCard img={'https://opensea.io/static/images/categories/maverick-art.png'} name={'Art'} cond={true}/>}
    card3={<CollectCard  img={'https://opensea.io/static/images/categories/maverick-art.png'} name={'Art'} cond={true}/>}
    card2={<CollectCard img={'https://opensea.io/static/images/categories/maverick-art.png'} name={'Art'}cond={true} />}
    card4={<CollectCard img={'https://opensea.io/static/images/categories/maverick-art.png'} name={'Art'}cond={true} />}
    card5={<CollectCard img={'https://opensea.io/static/images/categories/maverick-art.png'} name={'Art'} cond={true}/>}
    
    
    />
    </>
  )
}

export default Explore