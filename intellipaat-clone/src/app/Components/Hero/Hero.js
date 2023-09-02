import React from "react";
import "./Hero.scss";
import Contact from "@/app/SubComponents/Contact/Contact";

function Hero({ props }) {
    const data  = props;
    const courseDetail = props ? props?.couseDetail : "";
    const companyRatings = props ? props?.ratings : "";
    const dataArray = [];
    
    console.log("hero data is ", companyRatings);
    // if (props) {
    //     for (const key in companyRatings) {
    //         if (key !== "id") {
    //             const ratingData = companyRatings[key].data.attributes;
    //             dataArray.push(ratingData);
    //         }
    //     }
    // }



    const score = props ? props?.score : "";

    if (props) {
        console.log(props[0]?.id);
    }

    return (
        <div className="hero">
            <div className="cover">
                <div className="contact-form">
                    <Contact />
                </div>

                <div className="hero-course">
                    <h1 className="heading">{props.courseName}</h1>
                    <div className="location">{props.courseBy}</div>
                    <p className="about">{props.aboutCourse}</p>
                    <div className="button">
                        <button className="btn apply">Apply Now</button>
                        <button className="btn download">
                            Download Broachure
                        </button>
                    </div>
                    <div className="seats">
                        <p className="seat">{props.seat}</p>
                        <div className="rank">
                            Ranked #1 Cloud Program by{" "}
                            <a href="#">{props.country}</a>
                        </div>
                    </div>

                    <ul></ul>
                </div>
            </div>
            <div className="advertise">
                <div className="about-course">
                    {courseDetail
                        ? Object.entries(courseDetail)?.map(([key, value]) => (
                              <div className="feature" key={key}>
                                  <p>{key}</p>
                                  <h3>{value}</h3>
                              </div>
                          ))
                        : ""}
                </div>

                <div className="ratings">
                    {companyRatings ?  companyRatings?.map((image, id) => (
                        <div className="border" key={id}>
                            <div className="image-wrapper">
                                <img src={image?.img?.data.attributes.url} alt="rating1" />
                            </div>
                        </div>
                    )) : ""}
                </div>

                <div className="success">
                    <div className="top">
                        <p className="para">{data?.score}</p>
                    </div>
                    <div className="bottom">
                        <div className="image-wrapper">
                            <img
                                src={data?.scoreImage?.data?.attributes.url}
                                alt="sponsor"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;
