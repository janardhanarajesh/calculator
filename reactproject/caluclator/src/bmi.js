import "./App.css";

function Bmi()
{
    function caluc()
    {
        let weigth=document.getElementById('weight').value;
		let heigth=document.getElementById('height').value;
		let meter=heigth/100;
		let heisqr=meter*meter;
		let result=weigth/heisqr;
		let rmi=document.getElementById('out').innerHTML=result;
		if(result<=17)
		{
		let bmi=document.getElementById('out_2').innerHTML="you have thiness";

		}
		else if(result<18.5)
		{
		let bmi=document.getElementById('out_2').innerHTML="you are under weight";

		}
		else if(result<=24.9)
		{
		let bmi=document.getElementById('out_2').innerHTML="you are in normal weight";

		}
		else if(result==25||result<=29.9)
		{
		let bmi=document.getElementById('out_2').innerHTML="you are over weight";

		}
		else if(result==30)
		{
		let bmi=document.getElementById('out_2').innerHTML="you are obbesed";
		
		

		}
		else if(result==30||result<=34.9)
		{
		let bmi=document.getElementById('out_2').innerHTML="you are in obesity class I";

		}
		else if(result==35||result<=39.9)
		{
		let bmi=document.getElementById('out_2').innerHTML="you are in obesity class II";

		}
		else if(result>=40)
		{
		let bmi=document.getElementById('out_2').innerHTML="you are in obesity class III";

		}




    }
    return(
        <div id="bmidiv">

         <center>
            <h1 style={{color:'red',fontSize:'50px'}}>BMI CALCULATOR</h1>
          <br/>
          <br/>
          <br/>
          <br/>
             <label for='height' style={{color:'white'}}>ENTER YOUR HEIGHT(cm):</label>
          <input type="number" id="height" className="inp"/>
          <br/>
          <br/>
          <br/>
          <br/>

          <label for='weight' style={{color:'white'}}>ENTER YOUR WEIGHT(kg):</label>

          <input type="number" id="weight" className="inp"/>
          <br/>
          <br/>
          <br/>

<button onClick={caluc} style={{height:'30px',width:'60px',cursor:'pointer'}} id="bmi">calculate</button>
<p id="out" className="out" ></p>
<p id="out_2" className="out"></p>

</center>  
        </div>
    )
   
}
export default Bmi