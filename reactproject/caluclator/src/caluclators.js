import { Link } from "react-router-dom"
import "./App.css";

function Calculate()
{
    return(
    <div id="wholeofcal">
        <h1 style={{textAlign:'center'}}>Caluclators</h1>
        <div id="maincalc">
        <Link to="/arithmetic" >  <div id="firstcal" className="rey"><i class="fa-solid fa-calculator"></i><br/>ARITHMETIC</div></Link>
        <Link to="/age" >  <div id="secondcal" className="rey"><i class="fa-solid fa-image-portrait"></i><br/>AGE</div></Link>
        <Link to="/bmi" > <div id="thirdcal" className="rey" ><i class="fa-solid fa-weight-scale"></i><br/>BMI</div></Link>
        <Link to="/financial" > <div id="fourthcal" className="rey"><i class="fa-solid fa-coins"></i><br/>Financial</div></Link>

        </div>
    </div>
    )
}
export default Calculate