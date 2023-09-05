import React from "react";
import "./Interested.scss";
import { AiOutlineDown } from "react-icons/ai";

function Interested() {
    return (
        <div className="interested">
            <div className="interest-container">
                <h2 className="subheading">
                    Interested in This Program? Secure your spot now.
                </h2>
                <div className="para">
                    The application is free and takes only 5 minutes to
                    complete.
                </div>

                <div className="form-inputs">
                    <div className="number">
                        <input type="text" placeholder="Email*" />
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
                    <div className="submit-btn">

                    <button className="btn">Submit</button>
                    </div>
                </div>

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
    );
}

export default Interested;
