import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Users from './pages/Users';
import CreateUsers from './pages/CreateUsers';
import UpdateUsers from './pages/UpdateUsers';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={< Users />}></Route>
     <Route path='/create' element={< CreateUsers />}></Route>
     <Route path='/update/:id' element={< UpdateUsers />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
