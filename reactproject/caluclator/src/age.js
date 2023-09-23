import "./App.css";
function Age(){
    function cla()
    {
        
            let birthdata = document.getElementById('ageinp');
            let results = document.getElementById('result');
        
            let birthdate = new Date(birthdata.value);
            let currentDate = new Date();
        
            let ageInMilliseconds = currentDate - birthdate;
            
            let ageYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
            let ageMonths = ageYears * 12;
            let ageDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
            
            results.textContent = `You were born on ${birthdate.toDateString()}.`;
            results.textContent += `\nYour age is ${Math.floor(ageYears)} ,`;
            results.textContent += ` which is approximately ${Math.floor(ageMonths)} months or ${Math.floor(ageDays)} days.`;
        
    }
    return(
        <div id="mainage">
           <center> 
           <h1 style={{color:'white',fontSize:'50px'}} id="agecal">AGE CALCULATOR</h1>

            <div id="agediv">

           <br/>
           <br/>
<label for="ageinp" style={{fontSize:'30px',color:'white'}}>Enter Your Age:</label>
<br/>
            <input type="date" id="ageinp"/>
            <br/>
            <br/>
            <br/>

            <button onClick={cla} id="agebtn">CALCULATE</button>
            <br/>
            <br/>
           

            <p id="result"></p>
            </div>
            </center>
        </div>
    )
}
export default Age