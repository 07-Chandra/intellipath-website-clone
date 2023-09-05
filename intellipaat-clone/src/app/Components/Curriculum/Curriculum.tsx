"use client";
import React, { useState } from "react";

import "./Curriculum.scss";

// import Interested from "@/app/SubComponents/Interested/Interested.tsx";
import Interested from "@/app/SubComponents/Interested/Interested";
import Highlight from "@/app/SubComponents/Highlight/Highlight";
import Points from "@/app/SubComponents/Points/Points";
function Curriculum({ data }) {
    const [count, setCount] = useState(0);

    const module1 = data ? data?.modules : "";
    const module2 = data ? data?.module1 : "";
    const hightlightData = data ? data?.highlightItem : "";

    // console.log("data arrived" , module1 , module2, hightlightData);

    function checkCount(val) {
        if (val == count) {
            setCount(-1);
        } else {
            setCount(val);
        }
    }

    return (
        <div className="curriculum">
            <div className="curiculum-container">
                <div className="module-parts">
                    <div className="part1">
                        <div className="heading">
                            <span>{data?.title}</span>
                        </div>
                        <div className="header">
                            <div className="head">
                                <svg
                                    // className="blue"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-circle-filled blue"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="var(--blue-color);"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path
                                        d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                                        strokeWidth="0"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className="para">{data?.course1} </p>
                            </div>

                            <div className="head">
                                <svg
                                    // className="green"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-circle-filled green"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="green"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path
                                        d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                                        strokeWidth="0"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className="para">{data?.course2}</p>
                            </div>

                            <div className="download-btn">
                                <button className="btn">
                                    Download Brochure
                                </button>
                            </div>
                        </div>

                        <div className="module">
                            {module1
                                ? module1?.map((item, id) => {
                                      return (
                                          <div className="item" key={id}>
                                              <div
                                                  className="topic"
                                                  onClick={() =>
                                                      checkCount(id + 1)
                                                  }
                                              >
                                                  <Points name={item?.name} />
                                                  {/* <Points name={item?.name} /> */}
                                              </div>

                                              {count == id + 1 ? (
                                                  <div className="discription">
                                                      {Object.entries(
                                                          item?.upper
                                                      ).map(([key, value]) => {
                                                          return (
                                                              <div key={key}>
                                                                  <p
                                                                      className={`nested ${item.listType}`}
                                                                  >
                                                                      <span>
                                                                          {item?.listType ==
                                                                          "ol " ? (
                                                                              Number(
                                                                                  key
                                                                              ) +
                                                                              1 +
                                                                              ". " +
                                                                              `${value}`
                                                                          ) : item?.listType ==
                                                                            "ul" ? (
                                                                              <li
                                                                                  className="circleList"
                                                                                  style={{
                                                                                      marginLeft:
                                                                                          "-10px",
                                                                                  }}
                                                                              >
                                                                                  {`${value}`}
                                                                              </li>
                                                                          ) : (
                                                                              `${value}`
                                                                          )}
                                                                      </span>
                                                                  </p>
                                                                  <ul>
                                                                      {Object.entries(
                                                                          item?.lower
                                                                      ).map(
                                                                          ([
                                                                              key,
                                                                              value,
                                                                          ]) => {
                                                                              return (
                                                                                  <div
                                                                                      key={
                                                                                          key
                                                                                      }
                                                                                  >
                                                                                      {Object.entries(
                                                                                          value
                                                                                      ).map(
                                                                                          ([
                                                                                              key,
                                                                                              value,
                                                                                          ]) => {
                                                                                              return (
                                                                                                  <li
                                                                                                      key={
                                                                                                          value
                                                                                                      }
                                                                                                  >
                                                                                                      {
                                                                                                          value
                                                                                                      }
                                                                                                  </li>
                                                                                              );
                                                                                          }
                                                                                      )}
                                                                                  </div>
                                                                              );
                                                                          }
                                                                      )}
                                                                  </ul>
                                                              </div>
                                                          );
                                                      })}

                                                      {/* <div className="download-btn"> */}
                                                      <button className="broch-btn">
                                                          {item.btn}
                                                      </button>
                                                      {/* </div> */}
                                                  </div>
                                              ) : (
                                                  " "
                                              )}
                                          </div>
                                      );
                                  })
                                : ""}
                        </div>

                        <div className="heading">
                            <span>{data.title2}</span>
                        </div>
                        <div className="module card">
                            {module2
                                ? module2?.map((item, id) => {
                                      return (
                                          <div className="item" key={id}>
                                              <div
                                                  className="topic"
                                                  onClick={() =>
                                                      checkCount(
                                                          id +
                                                              module1.length +
                                                              1
                                                      )
                                                  }
                                              >
                                                  <Points name={item?.name} />
                                              </div>

                                              {count ==
                                              id + module1.length + 1 ? (
                                                  <div className="discription">
                                                      {Object.entries(
                                                          item?.upper
                                                      ).map(([key, value]) => {
                                                          return (
                                                              <div key={key}>
                                                                  <p className="nested">
                                                                      <span>
                                                                          {`${value}`}
                                                                      </span>
                                                                  </p>
                                                                  <ul>
                                                                      {Object.entries(
                                                                          item?.lower
                                                                      ).map(
                                                                          ([
                                                                              key,
                                                                              value,
                                                                          ]) => {
                                                                              return (
                                                                                  <div
                                                                                      key={
                                                                                          key
                                                                                      }
                                                                                  >
                                                                                      {Object.entries(
                                                                                          value
                                                                                      ).map(
                                                                                          ([
                                                                                              key,
                                                                                              value,
                                                                                          ]) => {
                                                                                              return (
                                                                                                  <li
                                                                                                      key={
                                                                                                          value
                                                                                                      }
                                                                                                  >
                                                                                                      {
                                                                                                          value
                                                                                                      }
                                                                                                  </li>
                                                                                              );
                                                                                          }
                                                                                      )}
                                                                                  </div>
                                                                              );
                                                                          }
                                                                      )}
                                                                  </ul>
                                                              </div>
                                                          );
                                                      })}
                                                      <button className="broch-btn">
                                                          {item.btn}
                                                      </button>
                                                  </div>
                                              ) : (
                                                  " "
                                              )}
                                          </div>
                                      );
                                  })
                                : ""}
                        </div>

                        <div className="desclaimer">
                            <h3>{data.desc}</h3>
                            <p className="desc">{data?.about}</p>
                        </div>
                    </div>

                    <div className="part2">
                        <Highlight
                            info={hightlightData}
                            name={data?.programName}
                        />
                    </div>
                </div>
                <div className="interested-program">
                    <Interested />
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
