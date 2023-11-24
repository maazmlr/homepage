import Section1 from "./Section1"
import Section3 from "./Section3"
import Section2 from "./section2"

const Footer = () => {
    return(
     <div className="footer">
        <Section1 />
        <hr style={{margin: "5px 12px", color: "#1868b1"}}></hr>
        <Section2/>
        <hr style={{margin: "5px 12px", color: "#1868b1"}}></hr>
        <Section3/>
     </div>   
    )
}
export default Footer