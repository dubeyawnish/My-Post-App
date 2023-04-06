
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/Screen/About';
import Contact from './Components/Screen/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Screen/Home';
import Footer from './Components/Footer';
import Allpost from './Components/Screen/Allpost';
import PostDetail from './Components/Screen/PostDetail';
import CreatePost from './Components/Screen/CreatePost';
import Signup from './Components/Screen/Signup';
import Login from './Components/Screen/Login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext,createContext } from 'react';
import { useReducer } from 'react';
import { initialUserState } from './Components/Reducers/UserReducer';
import UserReducer from './Components/Reducers/UserReducer';

export const UserContext=createContext();




const DynamicRoutes = () => {

  const navigate=useNavigate();
  const {state,dispatch} =useContext(UserContext);
  
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(token){ // user is already logged  in
      const user=localStorage.getItem('user');
      const userState={'token':token,'user':user};
      const action={type:'LOGIN',payload:userState};
      dispatch(action);
      navigate('/posts');
    }
    else{
      navigate('/login');
    }
  },[])

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/posts" element={<Allpost />} />
      <Route exact path="/create" element={<CreatePost />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/create/:postId/:userId" element={<CreatePost />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/posts/details/:postId/:userId" element={<PostDetail />} />    {/*dynamic routing*/}
      <Route exact path="/contact" element={<Contact />} />

    </Routes>
  )
}

function App() {
  const [state,dispatch]=useReducer(UserReducer,initialUserState);
  return (
    <UserContext.Provider value={{state:state,dispatch:dispatch}}>
    <Router>
      <div >

        <Navbar />
        <DynamicRoutes />
        <Footer />

      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
