import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../Constants/Config';
import { useParams } from 'react-router-dom';

const CreatePost = () => {
    const [loader, setloader] = useState(false);
    const { userId, postId } = useParams();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [isEdit, setisEdit] = useState(false);



    let methodType = 'POST';
   


    useEffect(() => {
        populateData();
    }, [])

    const populateData = () => {
     //   debugger;

        if (postId) {
            setisEdit(true);
            methodType = 'PUT';
            //fetch the details with the postid
            setloader(true);
            fetch(`${API_BASE_URL}/posts/${postId}`)
                .then((response) => response.json())
                .then((json) => {
                   // debugger;
                    console.log(json);
                    setTitle(json.title);
                    setBody(json.body);
                    setloader(false);
                })
        }
    }





    const createPost = (event) => {
        setloader(true);
        event.preventDefault();// stop the defalut behaviour of realod the page on form submit
        //console.log(event);
        let reqbody = JSON.stringify({
            title: title,
            body: body,
            userId: 1,
        })

       let url='posts';
       let methodType='POST';
       if(postId){
        url=`posts/${postId}`;
        methodType='PUT';
       }

        //axios.post(url,data,config ).then((res)={console.log(res)}).catch((er)=>{console.log(e)});
        fetch(`${API_BASE_URL}/${url}`, {
            method: `${methodType}`,
            body: reqbody,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())


            .then((json) => {
                console.log(json)
                //debugger;
                setloader(false);
                if (isEdit) {
                    alertFuction('Post Edited successfully!', 'success');
                }
                else {
                    alertFuction('Post created successfully!', 'success');
                }

            })
            .catch((error) => {

                alertFuction('Some error occured', 'danger');
                console.log(error);
                setloader(false);
            });


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
        <div className="container">
            {isEdit ?
                <h3 className="text-center text-uppercase pt-4">Edit Post</h3>
                : <h3 className="text-center text-uppercase pt-4">Create Post</h3>
            }
            <div id="alertmsg"></div>
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
                                <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="title" required />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="query" className="form-label">Post Description</label>
                                <textarea value={body} onChange={(e) => { setBody(e.target.value) }} id="query" className="form-control" required></textarea>
                            </div>

                            <div className="d-grid">
                                {isEdit ?

                                    <button type="submit" className="btn btn-primary  ">Edit Post</button>
                                    : <button type="submit" className="btn btn-primary  ">Create Post</button>
                                }
                            </div>
                        </form>


                    </div>
            }
        </div>
    )
}

export default CreatePost;