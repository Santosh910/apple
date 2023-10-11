
import './App.css';
import { Routes,Route } from "react-router-dom";
import Homepage from './component/Homepage/Homepage';
import Store from './component/Store';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route exact path='/store' element={<Store/>} />
      </Routes>
    </div>
  );
}

export default App;
