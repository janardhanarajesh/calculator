import { Link } from "react-router-dom"
import "./App.css"
function Feedback()
{
    function fuj()
    {
let pr=document.getElementById('ou');

pr.scrollIntoView();

document.getElementById('ou').innerHTML="THANKS FOR FEEDBACK"
document.getElementById('in1').value='';    
document.getElementById('in2').value='';    
document.getElementById('in3').value='';    
document.getElementById('in4').value='';    

}
    return(
        <div id="fedmain">
            <h1 style={{textAlign:'center',color:'white'}}>FEEDBACK</h1>
          <center><div id="feddiv">
<br/>
<br/>


            <label>ENTER YOUR NAME:</label>
<input type="username" className="inpf" id="in1" />
<br/>
<br/>
<br/>


<label>ENTER YOUR EMAIL:</label>
<input type="email" className="inpf" id="in2"/>
<br/>
<br/>
<br/>

<label>ENTER SUBJECT:</label>
<input type="text" className="inpf" style={{marginLeft:'50px'}} id="in3"/>
<br/>
<br/>
<br/>
<br/>

<label style={{position:'absolute',top:'392px',right:'730px'}}>MESSAGE:</label>
<textarea className="inpmf" id="in4">
    </textarea>
    <br/>



<button id="fedbtn" onClick={fuj} >SUBMIT</button>
            </div>
            <p id="ou"></p>
            </center>
        </div>
    )
}
export default Feedback