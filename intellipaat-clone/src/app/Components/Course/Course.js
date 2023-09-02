import React from "react";
import "./Course.scss";
import { AiOutlineCheck } from "react-icons/ai";

function Course({ course }) {
    // console.log("course data" , course);
    const applyRules = course ? course.applyRules : "";
    const allRoles = course ? course.allRoles : " ";
    const skills = course ? course.skills : " ";

    const image = (course) ? course.img.data.attributes.url : " ";
    console.log("image" , image);
    // console.log("all Roles", allRoles);
    return (
        <div className="course">
            <div className="course-container">
                <div className="header">
                    <h2 className="heading">
                        <span>{course ? course.applyHeading : ""}</span>
                    </h2>
                </div>

                <div className="feature-girl">
                    <div className="features card">
                        {/* 
                        {Object.entries(achivements).map(([key, value]) => (
                                <li className="list-item" key={key}>
                                    {value}
                                </li>
                            ))} */}

                        {Object.entries(applyRules).map(([key, value]) => (
                            <div className="item" key={key}>
                                <div className="icon-div">
                                    <AiOutlineCheck className="icon" />
                                </div>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="girl">
                        <div className="image-size">
                            <img
                                src={image}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="header">
                    <h2 className="heading">
                        <span>{course.roleHeading}</span>
                    </h2>
                </div>

                <div className="contain-all">
                    <div className="architect card">
                        {Object.entries(allRoles).map(([key, value]) => (
                            <div className="cart" key={key}>
                                <h3>{key}</h3>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="skill-div">
                        <h3 className="subheading">{course.skillType}</h3>

                        <div className="skill-part">
                            <div className="skill1">
                                {Object.entries(skills)
                                    .slice(0, 3)
                                    .map(([key, value]) => (
                                        <div className="item" key={key}>
                                            <p>
                                                <span>{value}</span>
                                            </p>
                                        </div>
                                    ))}
                            </div>
                            <div className="skill1 skill2">
                                {Object.entries(skills)
                                    .slice(3, 6)
                                    .map(([key, value]) => (
                                        <div className="item" key={key}>
                                            <p>
                                                <span>{value}</span>
                                            </p>
                                        </div>
                                    ))}
                            </div>
                            <div className="skill1 all">
                                {Object.entries(skills)
                                    .slice(7)
                                    .map(([key, value]) => (
                                        <div className="item" key={key}>
                                            <p>
                                                <span>{value}</span>
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <p className="view">
                            {" "}
                            <span> View More </span>
                        </p>
                    </div>

                    <div className="tools-div">
                        <p className="subheading">Tools to Master</p>
                        <div className="tool">
                            <div className="show1">
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2017/09/AWS.jpg"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2019/01/kubernetes.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/docker.png"
                                        alt="aws"
                                    />
                                </div>
                            </div>

                            <div className="show1 show2">
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/ansible.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2021/04/Terraform.png"
                                        alt="aws"
                                    />
                                </div>
                            </div>
                            <div className="show1 show3">
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/puppet.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/chef.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2017/08/AWSLambda.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/selenium.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/jenkins.png"
                                        alt="aws"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="view">View More</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
