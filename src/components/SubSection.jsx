import React from 'react'
import SubCard from './SubCard'

const SubSection = () => {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}> 
        <div className="collection">
            <h2 style={{fontSize:16,marginBottom:'3rem'}}>Collection</h2>
            <SubCard/>
            <SubCard/>
            <SubCard/>
            <SubCard/>

            </div>
        <div className="volume">
            <h2 style={{fontSize:16,marginBottom:'3rem'}}>Volume</h2>
            <h2 style={{margin:'3.5rem 0'}}>147Eth</h2>
            <h2 style={{margin:'3.5rem 0'}}>147Eth</h2>
            <h2 style={{margin:'3.5rem 0'}}>147Eth</h2>
            <h2 style={{margin:'3.5rem 0'}}>147Eth</h2>
            
        </div>
    </div>
  )
}

export default SubSection