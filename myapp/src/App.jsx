
import './App.css';
import { Routes,Route } from "react-router-dom";
import Homepage from './component/Homepage/Homepage';
import Store from './component/Store';
import Iphone15Pro from './component/Homepage/Iphone15Pro';
import Icloud from './component/Icloud';
import SignIn from './component/SignIn';
import Shop from './component/Shop';
import Buy from './component/Buy';




function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route exact path='/store' element={<Store/>} />
        <Route exact path='/iphone15pro' element={<Iphone15Pro/>} />
        <Route exact path='/icloud' element={<Icloud/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
        <Route exact path='/shop' element={<Shop/>}/>
        <Route exact path='/buy' element={<Buy/>}/>
      </Routes>
    </div>
  );
}

export default App;
