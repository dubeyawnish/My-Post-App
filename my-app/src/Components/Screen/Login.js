import React, { useState } from 'react'
import axios from  'axios';
import { API_BASE_URL } from '../Constants/Config';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';


const Login = () => {
  const [email,setEmail]=useState("");
  const [pswd,setPswd]=useState("");
  const navigate=useNavigate();
  const {dispatch}=useContext(UserContext);

  const login = (eve) => {
    //console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    eve.preventDefault();

    const reqBody = {
        
        email: email,
        password: pswd,
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    axios.post(`${API_BASE_URL}/users`, reqBody, config)
        .then((response) => {
            // debugger;
            //console.log(response);
            const userId=1;
            fetch(`${API_BASE_URL}/users/${userId}`)
            .then((response)=> response.json())
            .then((json)=>{
                localStorage.clear();
                localStorage.setItem('user',JSON.stringify(json));
                localStorage.setItem('token','ierurdihfdfrpieuifhf');

                const token=localStorage.getItem('token');
                const user =localStorage.getItem('user');
                const userState={'token':token,'user':user};

                const action={type:'LOGIN',payload:userState};
                dispatch(action);
                navigate('/posts');
            })

           
            
        })
        .catch((err) => {
            //debugger;
            //console.log(err);
           
        })

}






  return (
    <div className="container">
            <h3 className="text-center text-uppercase pt-4">Log in</h3>
            <div className="contact-form-container mx-auto text-muted shadow-sm p-3 lh-2" >

                <form onSubmit={(eve)=>{login(eve)}}>
                    

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="paswd" className="form-label">Password</label>
                        <input onChange={(e)=>{setPswd(e.target.value)}} type="password" className="form-control" id="paswd" required />
                    </div>
                    
                    

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary ">Login</button>
                    </div>
                </form>


            </div>

        </div>
  )
}

export default Login;