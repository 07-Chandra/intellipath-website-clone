"use client";

import React, { useState } from "react";
import "./Services.scss";
import { VscBellDot } from "react-icons/vsc";
import { BsCalendar2Event } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { HiUserGroup } from "react-icons/hi";
function Services({ data }) {
    console.log("service data ", data);

    const stages = data ? data?.stage : "";
    const [state, setState] = useState(1);
    const [imageCount, setImageCount] = useState(1);
    const arr = data ? data.allInfo : "";

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

    const first = pairsArray ? pairsArray[0] : "";
    const second = pairsArray ? pairsArray[1] : "";
    const third = pairsArray ? pairsArray[2] : "";

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
                                      <button
                                          key={key}
                                          className={`btn1 ${
                                              state == { key } ? "start" : ""
                                          }`}
                                          onClick={() => setState(key)}
                                      >
                                          {value}
                                      </button>
                                  ))
                                : ""}

                            {/* <button
                                className={`btn1 ${state == 2 ? "start" : ""}`}
                                onClick={() => setState(2)}
                            >
                                Interview Preparation
                            </button>
                            <button
                                className={`btn1 ${state == 3 ? "start" : ""}`}
                                onClick={() => setState(3)}
                            >
                                Profile Building
                            </button> */}
                        </div>

                        {state == 1 ? (
                            <>
                                {first
                                    ? first.map((element, id) => {
                                          return (
                                              <div
                                                  className="placement"
                                                  key={id}
                                              >
                                                  {console.log(
                                                      "element",
                                                      element
                                                  )}
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
                        ) : (
                            " "
                        )}

                        {state == 2 ? (
                            <>
                                {second
                                    ? second.map((element, id) => {
                                          return (
                                              <div
                                                  className="placement"
                                                  key={id}
                                              >
                                                  {console.log(
                                                      "element",
                                                      element
                                                  )}
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
                        ) : (
                            " "
                        )}

                        {state == 3 ? (
                            <>
                                {third
                                    ? third.map((element, id) => {
                                          return (
                                              <div
                                                  className="placement"
                                                  key={id}
                                              >
                                                  {console.log(
                                                      "element",
                                                      element
                                                  )}
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
                        ) : (
                            " "
                        )}
                    </div>
                </div>

                <h2 className="heading">
                    Our <span>Alumni Works At</span>{" "}
                </h2>
                <div className="alumni">
                    <div className="image-div">
                        <img
                            src="https://intellipaat.com/wp-content/themes/intellipaat/images/Hiring-Partners.png"
                            alt=""
                        />
                    </div>
                </div>

                <h2 className="heading">
                    Peer <span>Learning</span>
                </h2>
                <p>
                    {" "}
                    Via <span> Intellipaat PeerChat</span>, you can interact
                    with your peers across all classes and batches and even our
                    alumni. Collaborate on projects, share job referrals &
                    interview experiences, compete with the best, make new
                    friends – the possibilities are endless and our community
                    has something for everyone!
                </p>
                <div className="peer-learning">
                    <div className="image-wrapper">
                        {imageCount == 1 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_1.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                        {imageCount == 2 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_2.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                        {imageCount == 3 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_3.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                        {imageCount == 4 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_4.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                        {imageCount == 5 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_5.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                    </div>

                    <div className="pros">
                        <div
                            className={`items ${
                                imageCount == 1 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(1)}
                        >
                            <div className="icon-wrapper">
                                <VscBellDot className="icon" />
                            </div>

                            <span>Class Notifications</span>
                        </div>

                        <div
                            className={`items ${
                                imageCount == 2 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(2)}
                        >
                            <div className="icon-wrapper">
                                <BsCalendar2Event className="icon" />
                            </div>

                            <span> Hackathons</span>
                        </div>

                        <div
                            className={`items ${
                                imageCount == 3 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(3)}
                        >
                            <div className="icon-wrapper">
                                <MdMiscellaneousServices className="icon" />
                            </div>

                            <span>Career Services</span>
                        </div>

                        <div
                            className={`items ${
                                imageCount == 4 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(4)}
                        >
                            <div className="icon-wrapper">
                                <TfiAnnouncement className="icon" />
                            </div>

                            <span>Major Annoncement</span>
                        </div>

                        <div
                            className={`items ${
                                imageCount == 5 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(5)}
                        >
                            <div className="icon-wrapper">
                                <HiUserGroup className="icon" />
                            </div>

                            <span> Collaborative Learning</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
