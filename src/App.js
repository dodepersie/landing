import './App.css';
import './style/landing.css'
import Navigationbar from './components/Layouts/navigation.layouts'
import Home from './components/Home/main.home'
import Aboutpage from './components/About/main.about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Router>
      <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tentang" element={<Aboutpage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
