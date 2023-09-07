import React from "react";
import "./Course.scss";
import { AiOutlineCheck } from "react-icons/ai";


interface imgAttributes {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: null | any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
}

interface onlyImg {
    id : number ,
    img: data,

}

interface data {
    data: {
        id: number;
        attributes: imgAttributes;
    };
}

interface featuresItem {
    id: number;
    text: string;
    img: data;
}

interface courseData {
    course: {
        id: number;
        applyHeading: string;
        applyRules: Record<string, string>;
        roleHeading: string;
        allRoles: Record<string, string>;
        skills: Record<string , string>
        skillType : string,
        img : data,
        allImages : Array<onlyImg>,

    };
}

const Course : React.FC<courseData> = ({ course }) => {
    console.log("course data" , course);
    const applyRules = course ? course.applyRules : "";
    const allRoles = course ? course.allRoles : " ";
    const skills = course ? course.skills : " ";
    const allImages = course ? course?.allImages : "";
    const show1 = allImages ? allImages.slice(3) : "";
    const show2 = allImages ? allImages.slice(3, 5) : "";
    const show3 = allImages ? allImages.slice(6, allImages.length) : "";

    const image = course ? course?.img?.data.attributes.url : " ";
    // console.log("image", image);
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
                                <p>{`${value}`}</p>
                            </div>
                        ))}
                    </div>
                    <div className="girl">
                        <div className="image-size">
                            <img src={image} alt="" />
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
                                <p>{`${value}`}</p>
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
                                                <span>{`${value}`}</span>
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
                                                <span>{`${value}`}</span>
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
                                                <span>{`${value}`}</span>
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
                                {show1
                                    ? show1.map((image, id) => {
                                          return (
                                              <div
                                                  className="image-wrapper"
                                                  key={id}
                                              >
                                                  <img
                                                      src={
                                                          image?.img?.data
                                                              .attributes.url
                                                      }
                                                      alt="aws"
                                                  />
                                              </div>
                                          );
                                      })
                                    : ""}
                            </div>

                            <div className="show1 show2">
                                {show2
                                    ? show2.map((image, id) => {
                                          return (
                                              <div
                                                  className="image-wrapper"
                                                  key={id}
                                              >
                                                  <img
                                                      src={
                                                          image?.img?.data
                                                              .attributes.url
                                                      }
                                                      alt="aws"
                                                  />
                                              </div>
                                          );
                                      })
                                    : ""}
                            </div>
                            <div className="show1 show3">
                                {show3
                                    ? show3.map((image, id) => {
                                          return (
                                              <div
                                                  className="image-wrapper"
                                                  key={id}
                                              >
                                                  <img
                                                      src={
                                                          image?.img?.data
                                                              .attributes.url
                                                      }
                                                      alt="aws"
                                                  />
                                              </div>
                                          );
                                      })
                                    : ""}
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
