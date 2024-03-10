import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Users from './pages/Users';
import CreateUsers from './pages/CreateUsers';
import UpdateUsers from './pages/UpdateUsers';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Log from './pages/Log';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={< Log />}></Route>
     <Route path='/users' element={<Users/>}/>
     <Route path='/create' element={< CreateUsers />}></Route>
     <Route path='/update/:id' element={< UpdateUsers />}></Route>
     <Route path="/signup" element={<SignUp/>} />
     <Route path="/login" element={<Log/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
