"use client";

import React, { useState } from "react";
import "./Services.scss";

function Services({ data }) {
    console.log("service data ", data);

    const stages = data ? data?.stage : "";
    const [state, setState] = useState(0);
    const [imageCount, setImageCount] = useState(1);
    const arr = data ? data.allInfo : "";
    const allButtons = data ? data.buttons : "";
    const [imageNum, setImageNum] = useState(0);
    const peerImages = data ? data.peerImages : "";

    function createPairs(arr) {
        const pairs = [];
        for (let i = 0; i < arr.length; i += 2) {
            if (i + 1 < arr.length) {
                pairs.push([arr[i], arr[i + 1]]);
            } else {
                pairs.push([arr[i]]);
            }
        }
        return pairs;
    }

    const pairsArray = createPairs(arr);

    const first = pairsArray ? pairsArray[state] : "";
    // const second = pairsArray ? pairsArray[1] : "";
    // const third = pairsArray ? pairsArray[2] : "";

    return (
        <div className="service">
            <div className="service-container">
                <h2 className="heading">
                    <span>{data?.title}</span>
                </h2>

                <div className="main-part">
                    <div className="career">
                        <div className="image-wrapper">
                            <img
                                src={data?.img?.data.attributes.url}
                                alt="service"
                            />
                        </div>
                    </div>

                    <div className="right-part">
                        <div className="btn-wrapper">
                            {stages
                                ? Object.entries(stages).map(([key, value]) => (
                                      <div key={key}>
                                          {console.log(key)}
                                          <button
                                              key={key}
                                              className={`btn1 ${
                                                  state == key ? "start" : ""
                                              }`}
                                              onClick={() => setState(key)}
                                          >
                                              {value}
                                          </button>
                                      </div>
                                  ))
                                : ""}
                        </div>

                        <>
                            {first
                                ? first.map((element, id) => {
                                      return (
                                          <div className="placement" key={id}>
                                              <div className="item">
                                                  <div className="image-wrapper">
                                                      <img
                                                          src="https://intellipaat.com/course-image/2020/08/guaranteed.png"
                                                          alt=""
                                                      />
                                                  </div>
                                                  <div className="about">
                                                      <h2 className="subheading">
                                                          {element.name}
                                                      </h2>
                                                      <p className="footer">
                                                          {element.type}
                                                      </p>
                                                  </div>
                                              </div>
                                              <p className="desc">
                                                  {element.about}
                                              </p>
                                          </div>
                                      );
                                  })
                                : ""}
                        </>
                    </div>
                </div>

                <h2 className="heading">{data.alumni}</h2>
                <div className="alumni">
                    <div className="image-div">
                        <img
                            src={data?.alumniImg?.data.attributes.url}
                            alt=""
                        />
                    </div>
                </div>

                <h2 className="heading">
                    <span>{data?.peer}</span>
                </h2>
                <p>{data?.aboutPeer}</p>

                <div className="peer-learning">
                    <div className="image-wrapper">
                        {peerImages ? (
                            <img
                                src={
                                    peerImages[imageNum]?.img?.data.attributes
                                        .url
                                }
                                alt=""
                            />
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="pros">
                        {allButtons
                            ? allButtons.map((icon, id) => {
                                  return (
                                      <div
                                          key={id}
                                          className={`items ${
                                              imageCount == id + 1
                                                  ? "start"
                                                  : ""
                                          }`}
                                          onClick={() => {
                                              setImageCount(id + 1),
                                                  setImageNum(id);
                                          }}
                                      >
                                          <div className="icon-wrapper">
                                              <img
                                                  src={
                                                      icon?.img?.data.attributes
                                                          .url
                                                  }
                                                  alt=""
                                                  className="icon"
                                              />
                                          </div>

                                          <span>{icon?.text}</span>
                                      </div>
                                  );
                              })
                            : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
