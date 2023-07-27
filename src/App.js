import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Schedules from './components/Schedule/Schedules';
import BookedFlight from './components/TicketBooked/BookedFlight';
import Book from './components/Book/Book';
import Customer from './components/Customer/Customer';

function App() {
  return (
   <>


      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={ <Home/>}/>
        <Route path='/schedules' element={ <Schedules />}/>
        <Route path='/booked' element={ <BookedFlight/>}/>
        <Route path='/book/:id' element={<Book/>} />
        <Route path='/customer' element={<Customer/>} />
      </Routes>
      </BrowserRouter>
      
   </>
  );
}

export default App;
