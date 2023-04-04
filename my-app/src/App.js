
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/Screen/About';
import Contact from './Components/Screen/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Screen/Home';
import Footer from './Components/Footer';
import Allpost from './Components/Screen/Allpost';
import PostDetail from './Components/Screen/PostDetail';

function App() {
  return (
    <Router>
      <div >

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<Allpost />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/posts/details/:postId/:userId" element={<PostDetail/>} />    {/*dynamic routing*/}
          <Route exact path="/contact" element={<Contact />} />

        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
