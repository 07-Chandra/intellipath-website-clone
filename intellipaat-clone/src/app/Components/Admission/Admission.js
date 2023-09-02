import React from "react";
import "./Admission.scss";

function Admission() {
    return (
        <div className="admission">
            <div className="admission-container">
                <div className="header">
                    <h2 className="heading">
                        Admission <span>Details</span>
                    </h2>
                    <p>
                        The application process consists of three simple steps.
                        An offer of admission will be made to selected
                        candidates based on the feedback from the interview
                        panel. The selected candidates will be notified over
                        email and phone, and they can block their seats through
                        the payment of the admission fee.
                    </p>
                </div>

                <div className="all-application">
                    <div className="application ">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2021/05/ad-submit.png"
                                alt=""
                            />
                        </div>

                        <h2 className="subheading">Submit Application</h2>

                        <p>
                            Tell us a bit about yourself and why you want to
                            join this program
                        </p>
                    </div>
                    <div className="application green">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2021/05/ad-review.png"
                                alt=""
                            />
                        </div>

                        <h2 className="subheading">Application Review</h2>

                        <p>
                            An admission panel will shortlist candidates based
                            on their application
                        </p>
                    </div>
                    <div className="application yellow">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2021/05/ad-admission-1.png"
                                alt=""
                            />
                        </div>

                        <h2 className="subheading">Application Review</h2>

                        <p>
                            Selected candidates will be notified within 1–2
                            weeks you want to join this program
                        </p>
                    </div>
                </div>
            </div>
            <div className="program">
                <div className="cover">
                    <h2 className="heading">
                        Program <span>Fees</span>{" "}
                    </h2>

                    <div className="admission-fees">
                        <div className="item">
                            <div className="left-part">
                                <h2 className="subheading">
                                    Total Admission Fee
                                </h2>

                                <p className="price">₹ 80,028</p>
                            </div>

                            <button className="btn">Apply Now</button>
                        </div>

                        <div className="item">
                            <div className="left-part">
                                <h2 className="subheading">
                                    No Cost EMI Starts at
                                </h2>

                                <p className="price">₹ 4,999</p>
                            </div>

                            <div className="right-part">
                                <p>
                                    We partnered with financing companies to
                                    provide competitive finance option at 0%
                                    interest rate with no hidden costs
                                </p>

                                <h2 className="subheading">
                                    Financing Partners
                                </h2>

                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/wp-content/themes/intellipaat/images/pg-fee-web.png"
                                        alt="company"
                                    />
                                </div>
                                <p className="color">
                                    The credit facility is provided by a third
                                    party credit facility provider and any
                                    arrangement with such third party is outside
                                    Intellipaat’s purview.
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="left">
                                <h2 className="subheading">
                                    Upcoming Application Deadline
                                </h2>

                                <div className="price orange">
                                    19th Aug 2023
                                </div>
                            </div>
                        </div>
                        <p className="bottom-para">
                            Admissions are closed once the requisite number of
                            participants enroll for the upcoming cohort. Apply
                            early to secure your seat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admission;
