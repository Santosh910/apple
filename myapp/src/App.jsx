
import './App.css';
import { Routes,Route } from "react-router-dom";
import Homepage from './component/Homepage/Homepage';
import Store from './component/Store';
import Iphone15Pro from './component/Homepage/Iphone15Pro';
import Icloud from './component/Icloud';
import SignIn from './component/SignIn';
import Slide from './component/Slide';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route exact path='/store' element={<Store/>} />
        <Route exact path='/iphone15pro' element={<Iphone15Pro/>} />
        <Route exact path='/icloud' element={<Icloud/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
