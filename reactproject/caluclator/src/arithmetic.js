import "./App.css"
function Arithmetic()
{

   function fun(btn)
   {
    var disp=document.getElementById('dispar');

if(btn==='1')
{
disp.value+='1'
}
else if(btn==='2')
{
disp.value+='2'
}
else if(btn==='3')
{
disp.value+='3'
}
else if(btn==='4')
{
disp.value+='4'
}
else if(btn==='5')
{
disp.value+='5'
}
else if(btn==='6')
{
disp.value+='6'
}else if(btn==='7')
{
disp.value+='7'
}
else if(btn==='8')
{
disp.value+='8'
}
else if(btn==='9')
{
disp.value+='9'
}
else if(btn==='0')
{
disp.value+='0'
}
else if(btn==='+')
{
disp.value+='+'
}
else if(btn==='-')
{
disp.value+='-'
}
else if(btn==='*')
{
disp.value+='*'
}
else if(btn==='/')
{
disp.value+='/'
}
else if(btn==='.')
{
disp.value+='.'
}
else if(btn==='=')
{
disp.value=eval(disp.value)
}
else if(btn==="<")
			{
				var re=document.getElementById("dispar").value;
				document.getElementById("dispar").value=re.substring(0,re.length - 1);
;

			}
    }
    document.onkeydown=(press)=>
    {

if(press.key=='=')
{
    var disp=document.getElementById('dispar');

    disp.value=eval(disp.value)

}
else if(press.key=='Enter')
{
    var disp=document.getElementById('dispar');

    disp.value=eval(disp.value)

}


    }
    function func()
    {
    document.getElementById("dispar").value="";

    }
    return(
        <div  id="artwholediv">
            <div id="artmaindiv">
<center><input type="text" id="dispar" autoFocus/></center>
<br/>


<button onClick={()=>fun('1')} className="butart">1</button>
<button onClick={()=>fun('2')} className="butart">2</button>
<button onClick={()=>fun('3')} className="butart">3</button>
<button onClick={()=>fun('+')} className="butart">+</button>
<button onClick={()=>fun('4')} className="butart">4</button>
<button onClick={()=>fun('5')} className="butart">5</button>
<button onClick={()=>fun('6')} className="butart">6</button>
<button onClick={()=>fun('-')} className="butart">-</button>
<button onClick={()=>fun('7')} className="butart">7</button>
<button onClick={()=>fun('8')} className="butart">8</button>
<button onClick={()=>fun('9')} className="butart">9</button>
<button onClick={()=>fun('*')} className="butart">*</button>
<button onClick={()=>fun('.')} className="butart">.</button>
<button onClick={()=>fun('0')} className="butart">0</button>
<button onClick={()=>fun('/')} className="butart">/</button>
<button onClick={()=>fun('=')} className="butart">=</button>
<button onClick={()=>fun('<')}  id="space">back<br/>space</button>
<button onClick={()=>func()} id="delete">delete</button>
            </div>
        </div>
    )
}
export default Arithmetic