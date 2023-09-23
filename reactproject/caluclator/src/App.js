
import './App.css';
import Calc from './home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from './menu';
import About from './about';
import Calculate from './caluclators';
import Contact from './contact';
import Bmi from './bmi';
import Age from './age';
import Arithmetic from './arithmetic';
import Physical from './physiacl';
import Financial from './financial';
import Feedback from './feedback';
function App() {
  return (
  <div>
<BrowserRouter>
<Menu/>
<Routes>
  
  <Route path='/' element={<Calc/>}/>
  <Route path='/home' element={<Calc/>}/>

  <Route path='/about' element={<About/>}/>
  <Route path='/Caluclators' element={<Calculate/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/bmi' element={<Bmi/>}/>
  <Route path='/age' element={<Age/>}/>
  <Route path='/arithmetic' element={<Arithmetic/>}/>
  <Route path='/physiacl' element={<Physical/>}/>
  <Route path='/financial' element={<Financial/>}/>
  <Route path='/feedback' element={<Feedback/>}/>



</Routes>

</BrowserRouter>
    </div>
  )
}

export default App;
