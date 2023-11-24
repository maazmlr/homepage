import React from 'react'

const SubCard = () => {
  return (
    <div style={{display:'flex',alignItems:'center',margin:'1rem 0'} }>
        <img src="https://i.seadn.io/s/raw/files/76978409238f7da640912e64ad4574a5.png?auto=format&dpr=1&w=136&h=136&fr=1" alt=""  style={{height:"4rem",width:'4rem ',borderRadius:'1rem'}}/>
        <div className="indd" style={{marginLeft:'1rem'}}>
            <h2>Trade ....</h2>
            <p style={{marginTop:'1rem'}}>floor :0.002ETH</p>
        </div>
    </div>
  )
}

export default SubCard