import React from "react";
import "./Caunselling.scss";
import { AiOutlineDown } from "react-icons/ai";

function Caunselling() {
    return (
        <div className="caunselling">
            <div className="contact-form">
                <div className="cover1">
                    <h3 className="title">Free Career Caunselling</h3>

                    <div className="para">we are happy to help you 24/7</div>

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

export default Caunselling;
