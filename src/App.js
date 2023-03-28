import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Details from './Component/Details';

function App(props) {
  return (
    < div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/More/ : id' element={<Details/>}/>  
      </Routes>


    </div>

  );
}

export default App;
