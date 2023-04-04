import { useState } from 'react'
import { API_BASE_URL } from '../Constants/Config';

const CreatePost = () => {
    const [loader, setloader] = useState(false);

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const createPost = (event) => {
        setloader(true);
        event.preventDefault();// stop the defalut behaviour of realod the page on form submit
        //console.log(event);


        fetch(`${API_BASE_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())


            .then((json) => {
                console.log(json)
                //debugger;
                setloader(false);
            });


    }

    return (
        <div className="container">
            <h3 className="text-center text-uppercase pt-4">Create Post</h3>
            {
                loader ?
                    <div className='col-12 text-center'>
                        <div className="  container spinner-border text-primary" role="status">
                            <span className="visually-hidden">.</span>
                        </div>
                    </div> :
                    <div className="contact-form-container mx-auto text-muted shadow-sm p-3 lh-2 " >

                        <form onSubmit={(event) => { createPost(event) }}  >
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Post Title</label>
                                <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="title" required />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="query" className="form-label">Post Description</label>
                                <textarea onChange={(e) => { setBody(e.target.value) }} id="query" className="form-control" required></textarea>
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary  ">Create Post</button>
                            </div>
                        </form>


                    </div>
            }
        </div>
    )
}

export default CreatePost;