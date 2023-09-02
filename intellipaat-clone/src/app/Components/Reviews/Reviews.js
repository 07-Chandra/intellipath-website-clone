import React from "react";
import "./Reviews.scss";
function Reviews({ review }) {
    const img = review ? review?.img?.data.attributes.url : "";

    const reviewTop = review ? review?.reviewTop : "";
    const reviewCenter = review ? review.reviewCenter : "";
    const reviewBottom = review ? review.reviewBottom : "";

    console.log("review ", reviewBottom);
    return (
        <div className="review">
            <div className="review-container">
                <div className="header">
                    <div className="heading">
                        <span>{review.title}</span>
                    </div>

                    <div className="stars">
                        <span className="val">{review.val}</span>
                        <span
                            className="img"
                            style={{ backgroundImage: `url(${img})` }}
                        ></span>
                        <p className="rate">{review.rate}</p>
                    </div>
                </div>

                <div className="all-review-list">
                    {reviewTop
                        ? reviewTop?.map((user, id) => {
                              return (
                                  <div className="review-list" key={id}>
                                      <div className="image-wrapper">
                                          <img
                                              src={
                                                  user?.profileImg.data
                                                      .attributes.url
                                              }
                                              alt="review"
                                          />
                                      </div>
                                      <div className="name">
                                          <p className="para">{user.name}</p>
                                          <div className="icon-div">
                                              <img
                                                  className="icon"
                                                  src={
                                                      user?.log?.data.attributes
                                                          .url
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                        : ""}
                </div>

                <div className="all-user">
                    {reviewCenter
                        ? reviewCenter?.map((user, id) => {
                              return (
                                  <div className="user" key={id}>
                                      <div className="info-div">
                                          <div className="image-wrapper">
                                              <img
                                                  src={
                                                      user?.profileImg?.data
                                                          .attributes.url
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                          <div className="info">
                                              <p className="para">
                                                  {user.name}
                                              </p>
                                              <p>{user.position}</p>
                                          </div>
                                      </div>
                                      <p>{user.about}</p>
                                  </div>
                              );
                          })
                        : ""}
                </div>

                <h2 className="heading">{review.text}</h2>

                <div className="hiring-partners">
                    {reviewBottom
                        ? reviewBottom.map((user, id) => {
                              return (
                                  <div className="partners" key={id}>
                                      <div className="info-div">
                                          <div className="image-wrapper">
                                              <img
                                                  src={
                                                      user?.profileImg?.data
                                                          .attributes.url
                                                  }
                                              />
                                          </div>
                                          <div className="info">
                                              <p className="para">
                                                  {user.name}
                                              </p>
                                              <p>{user.position}</p>
                                              {/* <span className="img"></span> */}
                                          </div>

                                          <div className="image-wrapper">
                                              {console.log(
                                                  "image url ",
                                                  user?.icon?.data.attributes.url
                                              )}
                                              <img
                                                  src={
                                                      user?.icon?.data
                                                          .attributes.url
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                      </div>
                                      <p>{user.about}</p>
                                  </div>
                              );
                          })
                        : ""}
                </div>
            </div>
        </div>
    );
}

export default Reviews;
