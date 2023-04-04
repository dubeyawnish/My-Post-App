import React from 'react'

const Footer = () => {
    return (
        <div className=" mt-5 container-fluid text-white bg-primary bg-gradient " style={{ minHeight: '12rem' }}>
            <div className="row pt-4 text-center">
                {/* created 3 section for large and medium devices it takes 4-col each but for small devices it takes 12 col */}
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <h5>Quick Link</h5>
                    <div className="d-flex flex-column ">
                        <a className="text-white p-1" href="">About Us</a>
                        <a className="text-white p-1" href="">Our Post</a>
                        <a className="text-white p-1" href="">Our Team</a>
                        <a className="text-white p-1" href="">Contact Us</a>


                    </div>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <h5>Newsletter</h5>
                    <div className="d-flex flex-column justify-content-around " style={{ minHeight: "8rem" }}>
                        <input type="text" className="form-control" placeholder='Subscribe' />
                        <button className="btn btn-warning text-white">Subscribe</button>

                    </div>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <h5>Contact Address</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;