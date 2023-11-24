import InstagramIcon from '@mui/icons-material/Instagram'; 

const Section1 = () =>{
    return(
        <div>
        <div className="section1 center">
            <div>
                <h2 style={{margin: "0.5rem 0"}}>Stay in the loop</h2>
                <p className="para" style={{margin: "0.5rem 0", fontWeight: '500'}}>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
                <div>
                    <input type="email" className='input' placeholder='Your email address'/>
                    <button className='button'>Sign Up</button>
                </div>
                
            </div>
            <div className='sec2'>
                <h2>Join the community</h2>
                <div className='u-l'>
                    <ul className='list'>
                        <li className='logo'><InstagramIcon/></li>
                        <li className='logo'><InstagramIcon/></li>
                        <li className='logo'><InstagramIcon/></li>
                        <li className='logo'><InstagramIcon/></li>
                        <li className='logo'><InstagramIcon/></li>
                        <li className='logo'><InstagramIcon/></li>
                        <li className='logo'><InstagramIcon/></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Section1