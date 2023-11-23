import { TextField } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

        <h1 className='main-h'>Stay in the loop </h1>
        <p className="main-para">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
        <div className="email">
        <TextField className='text-field' sx={{background:"white", borderRadius:'15px',width:'13rem',height:""}} id="" label="enter your email"  />
        <button className='signup-btn'> signup</button>

        </div>
        <h1>Join our commuinity</h1>
        <div className="icons">

        </div>
    </div>
  )
}

export default Footer