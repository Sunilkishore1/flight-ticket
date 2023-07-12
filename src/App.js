import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
   <>


      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={ <Home/>}/>
      </Routes>
      </BrowserRouter>
      
   </>
  );
}

export default App;
