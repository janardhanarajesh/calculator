import "./App.css"
function Physical()
{ 
    
       function Fut(val)
       {
        if(val==='spe')
        {
        let inp1=document.getElementById('inp1').value;
        document.getElementById('lab').innerHTML="enter distance"
        let inp2=document.getElementById('inp2').value;
        document.getElementById('lab2').innerHTML="enter time"
        var sped=inp1/inp2;
        document.getElementById('out').innerHTML=sped

        }
       else  if(val==='are')
        {
        let inp11=document.getElementById('inp1').value;
        document.getElementById('lab').innerHTML="enter height"
        let inp22=document.getElementById('inp2').value;
        document.getElementById('lab2').innerHTML="enter width"
        }
           }


    return(
        <div id="phycal">
            <h1 style={{textAlign:'center'}}>PHYSICAL QUANTITY CALCULATOR</h1>
            <div>
                <select onChange={(l)=>Fut(l.target.value)}>
                <option>select</option>

                <option value={'spe'}>speed</option>

                    <option value={'are'}>area</option>
                    <option>b</option>
                    <option>c</option>
                    <option>d</option>

                </select>
                <label id="lab"></label>
                <input id="inp1" type="number"></input>
                <label id="lab2"></label>
                <input id="inp2" type="number"></input>
                <button onClick={Fut}>cal</button>
                <p id="out"></p>
            </div>
        </div>
    )
}
export default Physical