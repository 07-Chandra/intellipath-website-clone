import React from "react";
import "./Transition.scss";

function Transition({ data }) {
    // console.log("transition data" , data);

    const arrowImg = data ? data?.arrowImg?.data.attributes.url : "";

    const features = data ? data.features : "";

    console.log("url ", features);
    return (
        <div className="container">
            <div className="transition">
                <div className="header">
                    <h2>
                        <span>{data.title}</span>
                    </h2>
                </div>
                <div className="info">
                    <div className="header">
                        <div className="image-wrapper">
                            <img
                                src={data ? data?.img?.data.attributes.url : ""}
                                alt=""
                            />
                        </div>

                        <div className="intro">
                            <p className="para">{data.name}</p>
                            <p>{data.position}</p>
                        </div>
                    </div>

                    <div className="story"></div>

                    <div className="tech">
                        <div className="cover">
                            <img
                                src={data?.status?.img?.data.attributes.url}
                                alt=""
                            />
                        </div>

                        <p className="para">{data?.status?.text}</p>
                    </div>
                    <p>{data?.about}</p>

                    <div className="company">
                        <div className="position">
                            <div className="image-wrapper">
                                <img
                                    src={
                                        data
                                            ? data?.company?.img?.data
                                                  .attributes.url
                                            : ""
                                    }
                                    alt=""
                                />
                            </div>
                            <p className="para">{data?.company?.text}</p>
                        </div>

                        <picture
                            className="icon"
                            style={{ backgroundImage: `url(${arrowImg})` }}
                        ></picture>
                        <div className="position">
                            <div className="image-wrapper">
                                <img
                                    src={
                                        data
                                            ? data?.nextCompany?.img?.data
                                                  .attributes.url
                                            : ""
                                    }
                                    alt=""
                                />
                            </div>
                            <p className="para">{data?.nextCompany?.text}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="graph">
                {features
                    ? features.map((item, id) => {
                          return (
                              <div className={`status a${id}`} key={id}>
                                  <div className="image-wrapper">
                                      <img
                                          className="icon"
                                          src={item.img.data.attributes.url}
                                          alt=""
                                      />
                                  </div>

                                  <p>
                                      <span>{item.text}</span>
                                  </p>
                              </div>
                          );
                      })
                    : ""}
            </div>
            <a className="link">{data.btnName}</a>
        </div>
    );
}

export default Transition;
