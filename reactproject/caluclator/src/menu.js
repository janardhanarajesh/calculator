import { Link } from "react-router-dom"
import './App.css';
function Menu()
{
    return(
        <div id="fig">
           <center> <div style={{height:'38px',width:'1200',marginLeft:'250px'}}>
           <Link to="/home"><div className='centd' style={{float:'left'}}>

         HOME
         </div>
         </Link>
         &nbsp;
         &nbsp;
         &nbsp;
         <Link to='/caluclators'><div className='centd'  style={{float:'left'}}>

         CALCULATOR
         </div>
         </Link>
         &nbsp;
         &nbsp;
         &nbsp;

        
       
         <Link to="/about">
            <div className='centd'  style={{float:'left'}}>

         ABOUT
         </div>
         </Link>
         &nbsp;
         &nbsp;
         &nbsp;
         <Link to="/contact">
         <div className='centd'  style={{float:'left'}}>

         CONTACT
         </div>
         </Link>
         &nbsp;
         &nbsp;
         &nbsp;
         <Link to="/feedback">
         <div className='centd'  style={{float:'left'}}>

         FEEDBACK
         </div>
         </Link>

        </div></center>
        </div>
    )
}
export default Menu