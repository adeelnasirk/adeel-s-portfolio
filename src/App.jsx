import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Technologies from './Technologies.jsx'
import Projects from './Projects'


function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App
