import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../Constants/Config';
import './PostDetail.css';


const PostDetail = () => {
   
    const { userId, postId } = useParams();
    //const [post, setPost] = useState(initialstate);
    //const [user, setUser] = useState({});
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [website,setWebsite]=useState();
    const [title,setTitle]=useState();
    const [body,setBody]=useState();

    useEffect(() => {
        getPostAndUserAwait();
    }, [])

    const getPostAndUser = () => {
        axios.get(`${API_BASE_URL}/posts/${postId}`)
            .then((response) => {
                //console.log(response);
                //debugger;
                //setPost(response.data);
                axios.get(`${API_BASE_URL}/users/${userId}`)
                    .then((resp) => {
                        //debugger;
                        console.log(resp.data);
                        //setUser(resp.data);


                    })
                    .catch((err) => {
                        console.log(err);
                    });

            })
            .catch((error) => {
                console.log(error);

            });
    }
    const getPostAndUserAwait = async () => {
        const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
        //debugger;
       // setPost(response.data);
        //console.log(post);
        //debugger;
         const{title,body}=response.data;
         setTitle(title);
         setBody(body);
        const resp = await axios.get(`${API_BASE_URL}/users/${userId}`);
       // setUser(resp.data);
        //debugger;
        //console.log(user);
        const{name,email,phone,website}=resp.data;
        setName(name);
        setEmail(email);
        setPhone(phone);
        setWebsite(website);

    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h3 className="text-center text-uppercase py-4"> Post Detail</h3>

                </div>

            </div>




            <div className='row'>
                <div className='col-lg-9 col-md-9 col-sm-12 '>
                    <div className="card mb-3">
                        <img src="https://source.unsplash.com/random/400*400?city,night" className=" card-img-height card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{body}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 '>
                    <div className="card" >
                        <img  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className=" card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">{name}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href={`mailto:${email}`}>{email}</a>
                                </li>
                                <li className="list-group-item">
                                    <a href={`tel:${phone}`}>{phone}</a>
                                </li>
                                <li className="list-group-item">
                                    <a href={`www.${website}`}>Visit Our Website</a>
                                </li>
                            </ul>
                            
                    </div>


                </div>

            </div>

        </div>
    )
}

export default PostDetail;