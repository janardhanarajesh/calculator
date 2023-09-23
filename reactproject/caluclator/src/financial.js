import "./App.css"
function Financial()
{
    function cal()
    {
        let principle=document.getElementById('priamt').value;
        let time=document.getElementById('tenure').value;
        let rate=document.getElementById('rate').value;
        let intrest=document.getElementById('intrest').value;

        if(intrest=="")
        {
            let i=(principle*time*rate)/100;
            document.getElementById('intrest').value=i;
            document.getElementById('finance').style.border='1px solid black'

        }
        else if(principle=="")
        {
            let p=(intrest*100)/(time*rate);
            document.getElementById('priamt').value=p;
            document.getElementById('finance').style.border='1px solid black'

        }
        else if(time=="")
        {
            let t=((intrest*100)/(principle*rate));
            document.getElementById('tenure').value=t;
            document.getElementById('finance').style.border='1px solid black'

        }
        else if(rate=="")
        {
            let r=((intrest*100)/(principle*time));
            document.getElementById('rate').value=r;
            document.getElementById('finance').style.border='1px solid black'

        }
        else{
            document.getElementById('finance').style.border='2px solid red'
            alert('THE UNKOWN SHOULD BE EMPTY')
        }

    }
    function clr()
    {
        document.getElementById('priamt').value="";
        document.getElementById('tenure').value="";
        document.getElementById('rate').value="";
        document.getElementById('intrest').value="";
    }
    return(
        <div id="mainfin">

            <div id="finance">
                <label for="priamt" className="priamtlab">principle amount:</label>
                <input type="number" id="priamt"/>
                <br/>
                <label for="tenure" className="priamtlab">time(months):</label>
                <input type="number" id="tenure"/>
                <br/>

                <label for="rate" className="priamtlab">interest rate(%):</label>
                <input type="number" id="rate"/>
                <br/>
                <label for="intrest" className="priamtlab">interest:</label>
                <input type="number" id="intrest"/>
                <br/>
                <button onClick={cal} id="fincal">Calculate</button>
                <button onClick={clr} id="finclr">Clear</button>

            </div>
        </div>
    )
}
export default Financial