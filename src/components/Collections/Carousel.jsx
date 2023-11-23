import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

import React from 'react'
import CollectCard from "./CollectCard";

const Carouselabc = ({card1,card2,card3,card4,card5}) => {
  return (
<Carousel responsive={responsive} arrows={false}>
    {card1}
    {card2}
    {card3}
    {card4}
    {card5}
</Carousel>  )
}

export default Carouselabc

