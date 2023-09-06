import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Contact from "@/app/SubComponents/Contact/Contact";
// import Test from "../Test";

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

interface imgSchema {
    id: number;
    img: {
        data: {
            id: number;
            attributes: imgAttributes;
        };
    };
}

interface HeroData {
    props: {
        id: number;
        courseName: string;
        courseBy: string;
        aboutCourse: string;
        seat: string;
        country: string;
        rank: string;
        couseDetail: Record<string, string>;
        score: string;
        scoreImage: {
            data: {
                id: number;
                attributes: imgAttributes;
            };
        };
        ratings: Array<imgSchema>;
    };
}

const Hero: React.FC<HeroData> = ({ props }) => {
    console.log("props ", props);

    let data = props;
    const courseDetail = props ? props?.couseDetail : "";

    const companyRatings = props ? props?.ratings : "";

    const score: string = props ? props?.score : "";

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
                        ? Object.entries(courseDetail)?.map(([key, value]) => {
                              return (
                                  <div className="feature" key={key}>
                                      <p>{key}</p>
                                      <h3>{value}</h3>
                                  </div>
                              );
                          })
                        : ""}
                </div>

                <div className="ratings">
                    {companyRatings
                        ? companyRatings?.map((image, id) => (
                              <div className="border" key={id}>
                                  <div className="image-wrapper">
                                      <img
                                          src={image?.img?.data.attributes.url}
                                          alt="rating1"
                                      />
                                  </div>
                              </div>
                          ))
                        : ""}
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
};
export default Hero;
