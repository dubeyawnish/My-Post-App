
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/Screen/About';
import Contact from './Components/Screen/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Screen/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div >

        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />

        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
