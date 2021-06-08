import { FormatListNumbered } from '@material-ui/icons';
import React, { useState } from 'react';


const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    })
    const formSubmit = (event) => {
        event.preventDefault();
        setData({
            fullname: '',
            phone: '',
            email: '',
            message: '',
        });
        alert(`Fullname :${data.fullname}, Email: ${data.email}, Phone: ${data.phone} , Message: ${data.message}`)

    }
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact Us
            </h1>
                <div className="container contact-div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} placeholder="Enter your Name" onChange={inputEvent} autoComplete="off" required="true" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} placeholder="Enter your email" onChange={inputEvent} autoComplete="off" required="true" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} placeholder="Phone Number" onChange={inputEvent} autoComplete="off" required="true" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={inputEvent} autoComplete="off" required="true" rows="3"></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Contact;