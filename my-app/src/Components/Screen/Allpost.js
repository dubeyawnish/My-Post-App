import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../Constants/Config';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Allpost = () => {

    const navigate=useNavigate();

    const [posts, setPosts] = useState([]);
    const [loader ,setloader]=useState(true);

    useEffect(() => {
        getAllPosts();
    }, [])


    const getAllPosts = () => {
       

        fetch(`${API_BASE_URL}/posts`)
            .then((response) => response.json())
            .then((json) => {
                //console.log(json)
                setPosts(json);
                setloader(false);
            });


    }

    const deletePost=(postId)=>{
        //console.log(postId);
        let action=window.confirm('Are you sure want to Delete the Post?');
        if(action){
        axios.delete(`${API_BASE_URL}/posts/${postId}`)
        .then((res)=>{
            //console.log(res);
            alertFuction(`Post with id ${postId} has been deleted successfully`,'success');
            navigate('/posts');
        })
        .catch((er)=>{
           // console.log(er);
            alertFuction("Some error occured",'danger');
        });
    }
    }

    
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


    return (
        <section className="featured-posts container">
            <h3 className="text-center text-uppercase py-4"> All Post</h3>
            <div id="alertmsg"></div>
            
            <div className='row '>
                { 
                   loader ?<div className=" container spinner-border text-primary" role="status">
                   <span className="visually-hidden">.</span>
                 </div>:
                    posts.map((post, index) => {
                        return <div key={index} className="col-lg-4 col-md-4 col-sm-12 py-2">
                            <div className="card" >
                                <img src="https://source.unsplash.com/random/400*400?city,night" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                    <div className="d-flex justify-content-around">
                                        <Link to={`/posts/details/${post.id}/${post.userId}`} className="btn btn-primary"><i className="fa-solid fa-location-arrow me-1"></i>Details</Link>
                                        <Link to={`/create/${post.id}/${post.userId}`} className="btn btn-warning"><i className="fa-regular fa-pen-to-square me-1"></i>Edit</Link>
                                        <button onClick={()=>{deletePost(post.id)}} className="btn btn-danger"><i className="fa-solid fa-trash me-1"></i>Delete</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    })}

            </div>
        </section >
    )
}

export default Allpost;