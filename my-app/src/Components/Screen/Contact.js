import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="container">
            <h3 className="text-center text-uppercase pt-4">Contact Us</h3>
            <div className="contact-form-container mx-auto text-muted shadow-sm p-3 lh-2" >

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Fullname</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Contact no.</label>
                        <input type="text" className="form-control" id="phone" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="timing" className="form-label">Where can we reach you?</label>

                        <select className="form-select" aria-label="Default select example" id="timing">
                            <option defaultValue="">Best Time To Reach</option>
                            <option value="M">Morning</option>
                            <option value="A">Afternoon</option>
                            <option value="E">Evening</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="query" className="form-label">Enter your query below</label>
                        <textarea id="query" className="form-control" required></textarea>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                </form>


            </div>

        </div>
    )
}

export default Contact;