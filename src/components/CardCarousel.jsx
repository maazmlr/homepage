import React from 'react';
import { Carousel } from 'antd';
import MainSecCard from './MainSecCard';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width:'90px'
};
const CardCarousel = () => (
  <Carousel autoplay 
  waitForAnimate={true}
  dots={false}
  effect={'scrollx'}
  
  	>
    <div>
        <MainSecCard/>
    </div>
    <div>
    <MainSecCard/>
    </div>
    <div>
    <MainSecCard/>
    </div>
    <div>
    <MainSecCard/>
    </div>
  </Carousel>
);
export default CardCarousel;