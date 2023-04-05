import React from 'react'

const Login = () => {
  return (
    <div className="container">
            <h3 className="text-center text-uppercase pt-4">Log in</h3>
            <div className="contact-form-container mx-auto text-muted shadow-sm p-3 lh-2" >

                <form>
                    

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="paswd" className="form-label">Password</label>
                        <input type="password" className="form-control" id="paswd" required />
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