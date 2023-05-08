import React, { useState } from "react";

const Contact = () => {
    const [Data, setData]=useState({
        fullName:"",
        phoneNumber:"",
        Email      :"",
        Message    :"",
    });
    const InputEvent=(event)=>{
        const {name , value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        })
    }
    const formSubmit=(e)=>{
         e.preventDefault();
         alert(
            `My name is ${Data.fullName}. My Phone number is ${Data.phoneNumber}. And Email is ${Data.Email}, Here is What i Want to say that ${Data.Message} `
         )
    }

    return (
        <>
            <div className="contianer-fluid">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="fullName"
                            value={Data.fullName}
                            onChange={InputEvent}
                            placeholder="Enter Your Name"


                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Phone Number:
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="phoneNumber"
                            value={Data.phoneNumber}
                            onChange={InputEvent}
                            placeholder="Enter Your Phone Number"


                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Email address:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="Email"
                            value={Data.Email}
                            onChange={InputEvent}
                            placeholder="Enter Your Email"


                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Message:
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            name="Message"
                            value={Data.Message}
                            onChange={InputEvent}
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                            />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">
                            Submit form
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Contact;
