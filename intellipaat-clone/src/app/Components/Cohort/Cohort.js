"use client";

import React, { useState } from "react";
import "./Cohort.scss";
// import { BsCalendarMinus } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineCheck, AiOutlineDown } from "react-icons/ai";
import { BsCalendarMinus } from "react-icons/bs";
// import {BsCalendarMinus} from

function Cohort() {
    const [count, setCount] = useState(0);

    function checkCount(val) {
        if (count == val) {
            setCount(-1);
        } else {
            setCount(val);
        }
    }
    return (
        <div className="cohort center">
            <div className="cohort-container ">
                <div className="header">
                    <div className="heading">
                        Program <span>Cohorts</span>
                    </div>
                    <div className="subheading">Next Cohort</div>
                </div>

                <div className="programs card">
                    <div className="item">
                        <span>Program Induction</span>
                        <div className="icon-div">
                            <BsCalendarMinus className="icon" />
                            <p> 19th Aug 2023</p>
                        </div>
                        <div className="icon-div">
                            <BiTimeFive className="icon" />
                            <p> 08:00 PM IST</p>
                        </div>
                        <div className="icon-div">
                            <SlCalender className="icon" />
                            <p> Weekend (Sat-Sun)</p>
                        </div>
                    </div>
                    <div className="item item1">
                        <span>Regular Classes</span>
                        <div className="icon-div">
                            <BsCalendarMinus className="icon" />
                            <p> 19th Aug 2023</p>
                        </div>
                        <div className="icon-div">
                            <BiTimeFive className="icon" />
                            <p> 08:00 PM IST</p>
                        </div>
                        <div className="icon-div">
                            <SlCalender className="icon" />
                            <p> Weekend (Sat-Sun)</p>
                        </div>
                    </div>

                    <div className="center">
                        <button className="btn">Apply Now</button>
                    </div>
                </div>

                <div className="card program1">
                    <div className=" column col1">
                        <span></span>
                        <span>Program Induction</span>
                        <span>Regular Classes</span>
                    </div>
                    <div className="column col2">
                        <div className="row1">
                            <div className="icon-div">
                                <BsCalendarMinus className="icon" />
                            </div>
                            <div className="para">Date</div>
                        </div>

                        <span> 19th Aug 2023</span>
                        <span> 19th Aug 2023</span>
                    </div>
                    <div className="column col3">
                        <div className="row1">
                            <div className="icon-div">
                                <BiTimeFive className="icon" />
                            </div>
                            <div className="para">Time</div>
                        </div>

                        <span> 08:00 PM IST</span>
                        <span> 08:00 PM IST</span>
                    </div>
                    <div className="column col4">
                        <div className="row1">
                            <div className="icon-div">
                                <SlCalender className="icon" />
                            </div>
                            <div className="para">Time</div>
                        </div>

                        <span> Weekend (Sat-Sun)</span>
                        <span> Weekend (Sat-Sun)</span>
                    </div>

                    <div className="center center1">
                        <button className="btn">Apply Now</button>
                    </div>
                </div>
                <div className="center2">
                    <button className="btn">Apply Now</button>
                </div>
            </div>

            <div className="heading heading1">
                Frequently Asked <span>Questions</span>
            </div>
            <div className="questions">
                <div className="item">
                    <div className="que" onClick={() => checkCount(1)}>
                        <p className="para">
                            How will I receive my certificate?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 1 ? (
                        <div className="ans">
                            <p>
                                After completing this program in Advanced
                                Certification in DevOps and Cloud Computing as
                                well as the various projects and assignments,
                                you will receive a joint Advanced Certification
                                from IITM Pravartak and Intellipaat.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="item">
                    <div className="que" onClick={() => checkCount(2)}>
                        <p className="para">
                            Will IITM Pravartak be helping with the career
                            services?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 2 ? (
                        <div className="ans">
                            <p>
                                Intellipaat provides career services that
                                include guaranteed interviews for all the
                                learners enrolled in this course. IITM Pravartak
                                is not responsible for the career services.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="item">
                    <div className="que" onClick={() => checkCount(3)}>
                        <p className="para">
                            Why should I sign up for this Advanced Certification
                            in DevOps and Cloud Computing?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 3 ? (
                        <div className="ans">
                            <p>
                                This Advanced Certification in DevOps and Cloud
                                Computing is conducted by the faculty at IIT
                                Madras and other industry experts who will train
                                you in the area of cloud computing and advanced
                                DevOps skills through online video lectures and
                                real-time industry-relevant projects.
                            </p>
                            <p>
                                The program is designed to help you gain
                                in-depth knowledge in this field. On the
                                successful completion of the program, you will
                                gain an Advanced Certification in DevOps and
                                Cloud Computing from IITM Pravartak and
                                Intellipaat. This certification is widely
                                recognized by top organizations around the world
                                and will qualify you for top-paying jobs in the
                                market.
                            </p>
                            <p>
                                Our career services team will prepare you for
                                job interviews through mock interviews, getting
                                your resume ready, and more. You will also have
                                three guaranteed job interviews.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="item">
                    <div className="que" onClick={() => checkCount(4)}>
                        <p className="para">
                            What if I fail to attend one or more lectures?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 4 ? (
                        <div className="ans">
                            <p>
                                If you miss any of the live sessions, you will
                                get a copy of the recorded session within the
                                next 12 hours. If you have any other queries,
                                you can post them in our community or get in
                                touch with our course advisors.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="item">
                    <div className="que" onClick={() => checkCount(5)}>
                        <p className="para">
                            What will be the duration of the campus immersion?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 5 ? (
                        <div className="ans">
                            <p>
                                There will be an optional two-day campus
                                immersion module at IITM Pravartak during which
                                the learners will visit the campus and learn
                                from the faculty as well as get the opportunity
                                to interact with their peers. However, this is
                                subject to the COVID-19 situation and the
                                guidelines provided by the institute. The cost
                                of travel and accommodation will have to be
                                borne by the learners.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="item">
                    <div className="que" onClick={() => checkCount(6)}>
                        <p className="para">
                            What exams will I be able to clear if I complete
                            this advanced certification training?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 6 ? (
                        <div className="ans">
                            <p>
                                This advanced certification in DevOps and cloud
                                computing will help you to clear the Certified
                                Kubernetes Administrator (CKA) and Docker
                                Certified Associate (DCA) exams.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="item">
                    <div className="que" onClick={() => checkCount(7)}>
                        <p className="para">
                            What is the process of getting into the placement
                            pool?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 7 ? (
                        <div className="ans">
                            <p>
                                To be eligible for getting into the placement
                                pool, the learner has to complete the course
                                along with the submission of all projects and
                                assignments. After this, he/she has to clear the
                                Placement Readiness Test (PRT) to get into the
                                placement pool and get access to our job portal
                                as well as the career mentoring sessions.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="item">
                    <div className="que" onClick={() => checkCount(8)}>
                        <p className="para">
                            What is covered in placement assistance?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 8 ? (
                        <div className="ans">
                            <ul>
                                <li>Job Search Strategy Sessions</li>
                                <li>Resume Building</li>
                                <li>Linkedin Profile Creation</li>
                                <li>
                                    Interview Preparation Sessions by Industry
                                    Experts
                                </li>
                                <li>Mock Interviews</li>
                                <li>
                                    Placement opportunities with 400+ hiring
                                    partners upon clearing the Placement
                                    Readiness Test.
                                </li>
                            </ul>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="item">
                    <div className="que" onClick={() => checkCount(9)}>
                        <p className="para">
                            What is the refund policy for this program?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 9 ? (
                        <div className="ans">
                            <p>
                                If you are not satisfied from the program, you
                                can raise the refund request within 7 days of
                                course enrolment or payment date whichever is
                                earlier and you will be provided with 100%
                                refund provided that you have not downloaded the
                                course content. After 7 days no refund requests
                                will be accepted, however, we will be at every
                                step with you for your up-skilling and
                                professional growth needs. For raising the
                                refund request, please drop an email to{" "}
                                <a href="mailto:support@intellipaat.com">
                                    support@intellipaat.com
                                </a>
                            </p>
                            <p>
                                Refund shall be processed to an eligible student
                                within 30 working days from the date of receipt
                                of refund requests. If you have taken loan or no
                                cost EMI, then only principal amount will be
                                refunded to you which doesn’t includes interest
                                or loan charges paid to the bank / loan company.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="item">
                    <div className="que" onClick={() => checkCount(10)}>
                        <p className="para">
                            Do you have the batch deferral policy for this
                            program?
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>

                    {count == 10 ? (
                        <div className="ans">
                            <p>
                                Due to any reason you want to defer the batch or
                                restart the classes in a new batch then you need
                                to send the batch defer request on{" "}
                                <a href="mailto:support@intellipaat.com">
                                    support@intellipaat.com
                                </a>{" "}
                                and only 1 time batch defer request is allowed
                                without any additional cost.
                            </p>
                            <p>
                                Learner can request for batch deferral to any of
                                the cohorts starting in the next 3-6 months from
                                the start date of the initial batch in which the
                                student was originally enrolled for. Batch
                                deferral requests are accepted only once but you
                                should not have completed more than 20% of the
                                program. If you want to defer the batch 2nd time
                                then you need to pay batch defer fees which is
                                equal to 10% of the total course fees paid for
                                the program + Taxes.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>

            <div className="feature-form">
                <div className="features-div">
                    <div className="header">
                        <h2 className="subheading">
                            What is included in this course?
                        </h2>
                    </div>

                    <div className="features">
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>Non-biased career guidance</span>
                        </div>
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>
                                Counselling based on your skills and preference
                            </span>
                        </div>
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>
                                No repetitive calls, only as per convenience
                            </span>
                        </div>
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>
                                Rigorous curriculum designed by industry experts
                            </span>
                        </div>
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>Complete this program while you work</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h3 className="title">I’m Interested in This Program</h3>

                    <div className="form">
                        <input type="text" placeholder="Full Name*" />
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
                        <input type="email" placeholder="Email*" />
                    </div>

                    <button className="btn">Download Curriculum</button>

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

export default Cohort;
