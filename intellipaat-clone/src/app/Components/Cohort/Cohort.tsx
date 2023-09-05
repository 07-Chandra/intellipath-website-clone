"use client";

import React, { useState } from "react";
import "./Cohort.scss";
// import { BsCalendarMinus } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineCheck, AiOutlineDown } from "react-icons/ai";
import { BsCalendarMinus } from "react-icons/bs";
// import {BsCalendarMinus} from

function Cohort({ data }) {
    const table = data ? data?.table : "";
    const modules = data ? data.module1 : "";
    const newTable = table ? table.slice(1) : "";
    const firstIndex = table ? table[0] : "";
    const features = data ? data.features : "";

    // console.log("new Array", firstIndex);

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
                        {" "}
                        <span>{data?.title}</span>{" "}
                    </div>
                    <div className="subheading">{data?.heading}</div>
                </div>

                <div className="programs card">
                    <div className="item">
                        <span>{firstIndex?.item1}</span>
                        {newTable
                            ? newTable.map((item, id) => {
                                  return (
                                      <div className="icon-div" key={id}>
                                          <img
                                              src={
                                                  item?.img?.data?.attributes
                                                      ?.url
                                              }
                                              alt=""
                                              className="icon"
                                          />
                                          <p>{item.item1}</p>
                                      </div>
                                  );
                              })
                            : ""}
                    </div>
                    <div className="item item1">
                        <span>{firstIndex?.item2}</span>
                        {newTable
                            ? newTable.map((item, id) => {
                                  return (
                                      <div className="icon-div" key={id}>
                                          <img
                                              src={
                                                  item?.img?.data?.attributes
                                                      ?.url
                                              }
                                              alt=""
                                              className="icon"
                                          />
                                          <p>{item.item1}</p>
                                      </div>
                                  );
                              })
                            : ""}
                    </div>

                    <div className="center">
                        <button className="btn">Apply Now</button>
                    </div>
                </div>

                <div className="card program1">
                    {table
                        ? table.map((item, id) => {
                              return (
                                  <div className=" column col1" key={id}>
                                      <div className="row1">
                                          <div className="icon-div">
                                              <img
                                                  src={
                                                      item?.img?.data
                                                          ?.attributes.url
                                                  }
                                                  alt=""
                                                  className="icon"
                                              />
                                          </div>
                                          <div className="para">
                                              {item?.imgName}
                                          </div>
                                      </div>
                                      <span>{item.item1}</span>
                                      <span>{item.item2}</span>
                                  </div>
                              );
                          })
                        : ""}

                    <div className="center center1">
                        <button className="btn">Apply Now</button>
                    </div>
                </div>
                <div className="center2">
                    <button className="btn">Apply Now</button>
                </div>
            </div>

            <div className="heading heading1">
                <span> {data?.question}</span>
            </div>
            <div className="questions">
                {modules
                    ? modules.map((item, id) => {
                          return (
                              <div className="item" key={id}>
                                  <div
                                      className="que"
                                      onClick={() => checkCount(id + 1)}
                                  >
                                      {/* {console.log("list id " , id + 1)} */}
                                      <p className="para">{item?.quary}</p>

                                      <div className="icon-part">
                                          <AiOutlineDown className="arrow" />
                                      </div>
                                  </div>

                                  {count == id + 1 ? (
                                      <div className="ans">
                                          {Object.entries(item?.ans).map(
                                              ([key, value]) => {
                                                  return (
                                                      <li
                                                          key={key}
                                                          className={
                                                              item?.list
                                                                  ? "point"
                                                                  : "unpoint"
                                                          }
                                                      >
                                                          {String(value)}
                                                      </li>
                                                  );
                                              }
                                          )}
                                      </div>
                                  ) : (
                                      ""
                                  )}
                              </div>
                          );
                      })
                    : ""}
            </div>

            <div className="feature-form">
                <div className="features-div">
                    <div className="header">
                        <h2 className="subheading">{data?.extra}</h2>
                    </div>

                    <div className="features">
                        {features
                            ? features.map((item, id) => {
                                  return (
                                      <div className="item" key={id}>
                                          <AiOutlineCheck className="icon" />
                                          <span>{item.item}</span>
                                      </div>
                                  );
                              })
                            : ""}
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
