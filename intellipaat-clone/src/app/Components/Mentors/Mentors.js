import React from "react";
import "./Mentors.scss";
import Interested from "@/app/SubComponents/Interested/Interested";
function Mentors({ mentors }) {
    const first = mentors ? mentors[0] : "";
    const second = mentors ? mentors[1] : "";

    return (
        <div className="mentors">
            <div className="mentors-container">
                <div className="header">
                    <h2 className="heading">
                        Meet Your <span>Mentors</span>
                    </h2>
                </div>

                <div className="all-info">
                    <div className="info">
                        <div className="name">
                            <div className="image-wrapper">
                                <img
                                    src={first?.img?.data?.attributes.url}
                                    alt="human"
                                />
                            </div>
                            <p className="para">{first?.name}</p>
                            <p>{first?.position}</p>
                            <p>{first?.about}</p>
                        </div>
                    </div>
                    <div className="info second">
                        <div className="name">
                            <div className="image-wrapper">
                                <img
                                    src={second?.img?.data?.attributes.url}
                                    alt="human"
                                />
                            </div>
                            <p className="para">{second?.name}</p>
                            <p>{second?.position}</p>
                            <p>{second?.about}</p>
                        </div>
                    </div>
                    <div className="info third">
                        {mentors
                            ? mentors?.map((user, id) => (
                                  <div className="name" key={id}>
                                      <div className="image-wrapper">
                                          <img
                                              src={
                                                  user?.img?.data.attributes.url
                                              }
                                              alt="human"
                                          />
                                      </div>
                                      <p className="para">{user.name}</p>
                                      <p>{user.position}</p>
                                      <p>{user.about}</p>
                                  </div>
                              ))
                            : ""}
                    </div>
                </div>

                <div className="intrest-program">
                    <Interested />
                </div>
            </div>
        </div>
    );
}

export default Mentors;
