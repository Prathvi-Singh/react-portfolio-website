import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import {BrowserRouter , Routes ,Route,Outlet,Navigate } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home> </Home>}></Route>
     {/* <Route path="/about" element={<About></About>}></Route> */}

    </Routes>
    </BrowserRouter>
     
     {/* <About></About> */}
    </>
  );
}

export default App;
