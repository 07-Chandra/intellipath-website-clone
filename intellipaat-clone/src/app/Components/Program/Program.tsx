import React from "react";
import "./Program.scss";

import Caunselling from "@/app/SubComponents/Caunselling/Caunselling";

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

interface programData {
    data: {
        id: number;
        name: string;
        about: string;
        points: Record<string, string>;
        iitm: string;
        aboutIitm: string;
        achivements: Record<string, string>;
        note: string;
        certificate: {
            data: {
                id: number;
                attributes: imgAttributes;
            };
        };
    };
}

const Program: React.FC<programData> = ({ data }) => {
    // console.log("program data ", data);
    const allPoints = data ? data?.points : " ";
    const achivements = data ? data.achivements : " ";
    const name: string = data ? data?.name : " ";
    const about: string = data ? data?.about : " ";

    return (
        <div className="program">
            <div className="program-container">
                <div className="header">
                    <h2>{name}</h2>
                    <p>
                        <span>{about}</span>
                    </p>
                </div>

                <div className="wrap-highlight">
                    <div className="highlight card">
                        <div className="header">
                            <h2>Key Highlights</h2>
                        </div>

                        <div className="point">
                            {allPoints
                                ? Object.entries(allPoints).map(
                                      ([key, value]) => (
                                          <div className="item" key={key}>
                                              <div className="item-icon">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      x="0px"
                                                      y="0px"
                                                      width="100"
                                                      height="100"
                                                      viewBox="0 0 26 26"
                                                      className="icon"
                                                  >
                                                      <path d="M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 18.535156 18.535156 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 7.464844 7.464844 3 13 3 Z M 17.1875 7.0625 C 17.039063 7.085938 16.914063 7.164063 16.8125 7.3125 L 11.90625 14.59375 L 9.59375 12.3125 C 9.394531 12.011719 9.011719 11.988281 8.8125 12.1875 L 7.90625 13.09375 C 7.707031 13.394531 7.707031 13.800781 7.90625 14 L 11.40625 17.5 C 11.605469 17.601563 11.886719 17.8125 12.1875 17.8125 C 12.386719 17.8125 12.707031 17.707031 12.90625 17.40625 L 18.90625 8.59375 C 19.105469 8.292969 18.992188 8.011719 18.59375 7.8125 L 17.59375 7.09375 C 17.492188 7.042969 17.335938 7.039063 17.1875 7.0625 Z"></path>
                                                  </svg>
                                              </div>
                                              <p>{`${value}`}</p>
                                          </div>
                                      )
                                  )
                                : ""}
                        </div>
                    </div>

                    <div className="caunselling-form">
                        <Caunselling />
                    </div>
                </div>

                <div className="about">
                    <div className="header">
                        <p className="heading">
                            <span>{data?.iitm}</span>
                        </p>
                        <p className="para">{data?.aboutIitm}</p>
                    </div>

                    <div className="achivement card">
                        <h2 className="subhead">
                            Key Achievements of IIT Madras:
                        </h2>
                        <ul className="list">
                            {achivements
                                ? Object.entries(achivements).map(
                                      ([key, value]) => (
                                          <li className="list-item" key={key}>
                                              {value}
                                          </li>
                                      )
                                  )
                                : ""}
                        </ul>
                    </div>

                    <div className="certificate">
                        <div className="image-wrapper card">
                            <img
                                src={data?.certificate?.data?.attributes?.url}
                                alt="certificate of completion"
                            />
                        </div>
                        <p className="zoom">Click to Zoom</p>

                        <p className="note">
                            <span>Note :</span>
                            {data?.note}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;
