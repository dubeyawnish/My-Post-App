import React, { useEffect, useState } from 'react'

const Allpost = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, [])


    const getAllPosts = () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setPosts(json);
            });


    }


    return (
        <section className="featured-posts ">
            <h3 className="text-center text-uppercase py-4"> All Post</h3>
            
            <div className='row '>
                {
                    posts.map((post, index) => {
                        return <div className="col-lg-4 col-md-4 col-sm-12 py-2">
                            <div className="card" >
                                <img src="https://source.unsplash.com/random/400*400?city,night" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                    <div className="d-grid">
                                        <a href="#" className="btn btn-warning">Go somewhere</a>
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