"use client";
import React, { useState } from "react";
import "./Project.scss";

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

interface projectData {
    project: {
        id: number;
        heading: string;
        about: string;
        levels: Record<string, string>;
        aboutHosting: Record<string, string>;
        percent: string;
        advancement: Array<featuresItem>;
        img : data,
    };
}

const Project: React.FC<projectData> = ({ project }) => {
    const advancement = project ? project?.advancement : "";
    const stage = project ? project.levels : " ";
    const levelOne = project ? project.aboutHosting.first : "";
    const levelTwo = project ? project.aboutHosting.second : "";
    const levelThree = project ? project.aboutHosting.third : "";
    // console.log("project data", project);

    const [level, setLevel] = useState(1);
    return (
        <div className="project">
            <div className="project-container">
                <div className="header">
                    <p className="heading">
                        <span>{project.heading}</span>
                    </p>
                    <p>{project.about}</p>
                </div>
                <div className="work">
                    {advancement
                        ? advancement?.map((list, id) => {
                              return (
                                  <div className="items" key={id}>
                                      <div className="icon-div">
                                          <img
                                              className="icon"
                                              src={
                                                  list?.img.data.attributes.url
                                              }
                                              alt=""
                                          />
                                      </div>
                                      <p className="para">{list.text}</p>
                                  </div>
                              );
                          })
                        : ""}
                </div>

                <div className="btn-div">
                    {Object.entries(stage).map(([key, value]) => (
                        <button
                            key={key}
                            className={`btn ${
                                Number(level) == Number(key) ? "start" : null
                            }`}
                            onClick={() => setLevel(Number(key))}
                        >
                            {`${value}`}
                        </button>
                    ))}
                </div>

                {level == 0 ? (
                    <div className="all-sponsor">
                        {Object.entries(levelOne).map(([key, value]) => (
                            <div className="sponsor" key={key}>
                                <h2 className="subheading">{key}</h2>
                                <p>{`${value}`}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    ""
                )}

                {level == 1 ? (
                    <div className="all-sponsor">
                        {Object.entries(levelTwo).map(([key, value]) => (
                            <div className="sponsor" key={key}>
                                <h2 className="subheading">{key}</h2>
                                <p>{`${value}`}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    " "
                )}

                {level == 2 ? (
                    <div className="all-sponsor">
                        {Object.entries(levelThree).map(([key, value]) => (
                            <div className="sponsor" key={key}>
                                <h2 className="subheading">{key}</h2>
                                <p>{`${value}`}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    " "
                )}

                <div className="success">
                    <div className="top">
                        <p>{project.percent}</p>
                    </div>
                    <div className="bottom">
                        <div className="image-wrapper">
                            <img
                                src={project?.img?.data.attributes.url}
                                alt="sponsor"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
