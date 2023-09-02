import React from "react";
import "./Contact.scss";
import { AiOutlineDown } from "react-icons/ai";

function Contact({  }) {
    // console.log("result", result[0]?.attributes?.courseName);
    return (
        <div className="contact">
            <div className="contact-form">
                <div className="cover1">
                    {/* <h1>hello there {result[0]?.attributes?.courseName}</h1> */}
                    <h3 className="title">
                        Upskill for Your <span>Dream Job</span>
                    </h3>

                    <div className="form">
                        <input type="text" placeholder="Full Name*" />
                        <input type="email" placeholder="Email*" />
                        <div className="number">
                            <button className="btn">
                                {" "}
                                +91 In <AiOutlineDown />{" "}
                            </button>
                            <input
                                type="number"
                                name=""
                                id=""
                                placeholder="Mobile Number*"
                            />
                        </div>

                        <input type="number" placeholder="Work Experience*" />
                    </div>

                    <button className="btn">Submit</button>

                    <div className="box">
                        <input type="checkbox" />
                        <p>
                            By providing your contact details, you agree to our
                            <span> Terms of Use </span> &{" "}
                            <span>Privacy Policy</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
