import React from 'react'
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext } from 'react';

const Navbar = () => {
    const {state,dispatch}=useContext(UserContext);
    const navigate= useNavigate();

    const logout =(eve)=>{
        eve.preventDefault();
        localStorage.clear();
        dispatch({type:'LOGOUT'});
        navigate('/login')

    }

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-uppercase" to="/">MyPostApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/posts">Post</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/create">Create Post</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" aria-current="page" to="/about">AboutUs</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/contact">Contact</NavLink>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            </button>

                        </form>
                        <li className="nav-item">
                                <NavLink className=" btn btn-primary  " to="/signup"><i className="fa-solid fa-user-plus"></i></NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink className=" btn btn-primary " to="/login"><i className="fa-solid fa-right-to-bracket"></i></NavLink>
                        </li>
                        <li className="nav-item">
                                <button onClick={(eve)=>{logout(eve)}} className=" btn btn-danger " ><i className="fa-solid fa-right-to-bracket"></i></button>
                        </li>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;