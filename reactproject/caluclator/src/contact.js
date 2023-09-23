import "./App.css";
function Contact(){
    return(
        <div>
<div id="contactdiv">
   <center><h1 style={{color:'darkgreen'}}>CONTACT</h1></center> 
    <h2 style={{color:'darkblue',marginLeft:'100px'}}><i class="fa-solid fa-phone"></i>&emsp;&emsp;phone: 0958953-258</h2>
<br/>
<br/>
<br/>

    <h2 style={{color:'darkblue',marginLeft:'100px'}}><i class="fa-solid fa-mobile"></i>&emsp;&emsp;call:0958953-258</h2>
<br/>
<br/>
<br/>

    <h2 style={{color:'darkblue',marginLeft:'100px'}}><i class="fa-solid fa-envelope"></i>&emsp;&emsp;mail:Xyz123@gmail.com</h2>
    <br/>
    <br/>
 
   <div style={{backgroundColor:'green',height:'35px',width:'200px', display:' inline-block'}} id="labcon"  > <label for="inp" >GET IN TOUCH:</label></div>
    <input type="emali" style={{height:'35px',width:'220px'}} id="inp" placeholder="enter your email"/>
    <button  id="consubmit">submit</button>
    <br/>
    <iframe  title={'untitledpage'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7625.9718882088755!2d82.25124555!3d17.12218495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382adc46bcdafd%3A0x8c5127d6bdfb2d7f!2sChittodi%20Thota%2C%20Pithapuram%2C%20Andhra%20Pradesh%20533450!5e0!3m2!1sen!2sin!4v1695216787699!5m2!1sen!2sin" width="300" height="250" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>

        </div>
    );
}
export default Contact