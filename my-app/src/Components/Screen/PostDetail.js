import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../Constants/Config';


const PostDetail = () => {
    const { userId, postId } = useParams();
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        getPostAndUser();
    }, [])

    const getPostAndUser = () => {
        axios.get(`${API_BASE_URL}/posts/${postId}`)
            .then((response) => {
                //console.log(response);
                //debugger;
                setPost(response.data);
                axios.get(`${API_BASE_URL}/users/${userId}`)
                    .then((resp) => {
                        //debugger;
                        console.log(resp.data);
                        setUser(resp.data);


                    })
                    .catch((err) => {
                        console.log(err);
                    });

            })
            .catch((error) => {
                console.log(error);

            });
    }


    return (
        <div>userid-{userId} , postid-{postId}</div>
    )
}

export default PostDetail;