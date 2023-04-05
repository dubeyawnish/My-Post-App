import React from 'react'
import { useState } from 'react';
import { API_BASE_URL } from '../Constants/Config';
import axios from 'axios';

const Signup = () => {
    const [fname, setFname] = useState("");
    const [lname, setlname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");


    const alertFuction = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        const alertPlaceholder = document.getElementById('alertmsg');

        alertPlaceholder.append(wrapper)
    }





    const signup = (eve) => {
        //console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        eve.preventDefault();

        const reqBody = {
            name: fname + ' ' + lname,
            phone: phone,
            email: email,
            password: pswd,
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        axios.post(`${API_BASE_URL}/users`,reqBody,config)
            .then((response) => {
                // debugger;
                //console.log(response);
                setFname("");
                setEmail("");
                setlname("");
                setPhone("");
                setPswd("");
                alertFuction("Registartion successful, Please go to login",'success');
            })
            .catch((err) => {
                //debugger;
                //console.log(err);
                alertFuction('Some error occured while signup','danger');
            })



    }


   
     

    return (
        <div className="container">
            <h3 className="text-center text-uppercase pt-4">Create an account</h3>
            <div id="alertmsg"></div>
            <div className="contact-form-container mx-auto text-muted shadow-sm p-3 lh-2" >

                <form onSubmit={(eve) => { signup(eve) }}>
                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">Firstname</label>
                        <input onChange={(e) => { setFname(e.target.value) }} type="text" className="form-control" id="fname" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label">Lastname</label>
                        <input onChange={(e) => { setlname(e.target.value) }} type="text" className="form-control" id="lname" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Contact no.</label>
                        <input onChange={(e) => { setPhone(e.target.value) }} type="text" className="form-control" id="phone" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="paswd" className="form-label">Password</label>
                        <input onChange={(e) => { setPswd(e.target.value) }} type="password" className="form-control" id="paswd" required />
                    </div>



                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary ">Signup</button>
                    </div>
                </form>


            </div>

        </div>
    )
}

export default Signup;