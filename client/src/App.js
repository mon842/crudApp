
import './App.css';
import Adduser from './components/AddUsers';
import Edituser from './components/EditUser';
import NavBar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import AllUsers from './components/AllUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeForInterview />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<Edituser />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
